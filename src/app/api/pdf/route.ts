import { NextResponse } from "next/server";
import chrome from "@sparticuz/chrome-aws-lambda";
export const dynamic = "force-dynamic";
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const targetUrl = searchParams.get("url");

  try {
    // Puppeteer 초기화
    const browser = await chrome.puppeteer.launch({
      args: chrome.args,
      defaultViewport: chrome.defaultViewport,
      executablePath: await chrome.executablePath,
      headless: true,
      ignoreHTTPSErrors: true,
    });

    const page = await browser.newPage();

    // 페이지 이동 및 렌더링 대기
    await page.goto(targetUrl || "", {
      waitUntil: ["domcontentloaded", "networkidle0"],
      timeout: 30000,
    });

    // 전체 페이지 높이 계산 (가로 스크롤 방지)
    const bodyHeight = await page.evaluate(() => {
      document.body.style.overflowX = "hidden"; // 가로 스크롤 제거
      return Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
      );
    });

    await page.evaluate(() => {
      const debugElements = document.querySelectorAll("nextjs-portal");
      debugElements.forEach((el) => el.remove());
      const header = document.querySelectorAll("header");
      header.forEach((el) => el.remove());
    });
    const scale = 0.8;
    // PDF 생성 옵션
    const pdfBuffer = await page.pdf({
      width: "1300px", // 웹 페이지 기준 너비
      height: `${bodyHeight * scale}px`, // 동적 높이 설정
      printBackground: true,
      scale, // 80% 크기로 축소
      omitBackground: true, // 투명 배경 사용
      preferCSSPageSize: true, // CSS 페이지 크기 우선 적용
      margin: {
        top: "0px",
        bottom: "0px",
        left: "0px",
        right: "0px",
      },
    });

    await browser.close();

    // PDF 응답 반환
    return new NextResponse(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=generated.pdf",
      },
    });
  } catch (error) {
    console.error("PDF 생성 실패:", error);
    return NextResponse.json(
      { error: "PDF 생성에 실패했습니다." },
      { status: 500 }
    );
  }
}
