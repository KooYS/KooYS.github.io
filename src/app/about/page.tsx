"use client";
import { cn } from "@/lib/utils";
import { FileDown, Mail, Phone } from "lucide-react";
import ImagePopup from "@/app/about/ImagePopup";
import React from "react";
import Image from "next/image";
import "./about.css";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const DownloadPdfButton = () => {
  const handleDownload = () => {
    const currentUrl = window.location.href;
    const apiUrl = `/api/pdf?url=${encodeURIComponent(currentUrl)}`;
    // 새 탭에서 PDF 다운로드 트리거
    window.open(apiUrl, "_blank");
  };

  return (
    <Button onClick={handleDownload} className="p-0 h-6 mb-px" variant={"link"}>
      <FileDown />
    </Button>
  );
};

const SectionTitle = "text-2xl font-bold mb-4 underline-offset-4 underline";

const Introduce = () => {
  return (
    <div>
      <h2 className={SectionTitle}>Introduce</h2>
      <div className="text-muted-foreground space-y-2">
        <ul className="p-4 space-y-3 text-black">
          <li className="list-disc">
            안녕하세요 🙇 ! &nbsp; <code>웹 기반 풀스택 개발자 구영서</code>{" "}
            입니다.
          </li>
          <li className="list-disc">
            최신 트렌드를 <b>꾸준히</b> 학습하며, 이를 통해 팀의 성과 향상에
            기여하는 것을 즐깁니다.
          </li>
          <li className="list-disc">
            문제를 해결하기 위해 항상 <b>집중하며 노력</b>합니다.
          </li>
          <li className="list-disc">
            지식을 <b>공유</b>하며 피드백을 소중히 여겨 성장합니다.
          </li>
          <li className="list-disc">
            좋은 코드는 마치 <b>잘 정돈된 방</b>처럼, 가독성이 높고 유지보수가
            쉬운 코드라고 생각합니다.
          </li>
          <li className="list-disc">
            결과물이 누군가에게 도움이 된다면, 그 자체로 <b>큰 의미</b>가 있다고
            생각합니다.
          </li>
        </ul>
      </div>
    </div>
  );
};
const Skill = () => {
  const className = {
    bg: "bg-muted rounded-md px-3 py-2 text-center flex flex-col justify-center items-center",
    sub_title: "border-b pb-3 text-base font-semibold my-4",
  };

  return (
    <div>
      <h2 className={SectionTitle}>Skills</h2>
      <div className="space-y-10">
        {/* Frontend */}
        <div>
          <div className={className.sub_title}>Frontend</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className={className.bg}>
              <div className="text-sm font-semibold">React</div>
              <div className="text-xs text-gray-500">Next.js</div>
            </div>
            <div className={className.bg}>
              <div className="text-sm font-semibold">State</div>
              <div className="text-xs text-gray-500">
                SWR, Recoil, TanStack Query, Zustand
              </div>
            </div>
            <div className={className.bg}>
              <div className="text-sm font-semibold">Styling</div>
              <div className="text-xs text-gray-500">
                Tailwind, MUI, Shadcn UI
              </div>
            </div>
            <div className={className.bg}>
              <div className="text-sm font-semibold">Testing</div>
              <div className="text-xs text-gray-500">Cypress, Storybook</div>
            </div>
          </div>
        </div>

        {/* Backend */}
        <div>
          <div className={className.sub_title}>Backend & DevOps</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className={className.bg}>
              <div className="text-sm font-semibold">Node.js</div>
              <div className="text-xs text-gray-500">Nest.js, Express.js</div>
            </div>
            <div className={className.bg}>
              <div className="text-sm font-semibold ">Nginx</div>
            </div>
            <div className={className.bg}>
              <div className="text-sm font-semibold">AWS</div>
              <div className="text-xs text-gray-500">EC2, EB, Lambda, RDS</div>
            </div>
            <div className={className.bg}>
              <div className="text-sm font-semibold">GCP</div>
              <div className="text-xs text-gray-500">
                Compute Engine, Cloud SQL
              </div>
            </div>
            <div className={className.bg}>
              <div className="text-sm font-semibold ">Docker</div>
            </div>
            <div className={className.bg}>
              <div className="text-sm font-semibold">CI/CD</div>
              <div className="text-xs text-gray-500">
                GitHub Actions, Jenkins
              </div>
            </div>
            <div className={className.bg}>
              <div className="text-sm font-semibold">Git</div>
              <div className="text-xs text-gray-500">Github</div>
            </div>
          </div>
        </div>

        {/* Database */}
        <div>
          <div className={className.sub_title}>Database</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className={className.bg}>
              <div className="text-sm font-semibold">RDBMS</div>
              <div className="text-xs text-gray-500">MySQL, PostgreSQL</div>
            </div>
            <div className={className.bg}>
              <div className="text-sm font-semibold">NoSQL</div>
              <div className="text-xs text-gray-500">MongoDB</div>
            </div>
            <div className={className.bg}>
              <div className="text-sm font-semibold">ORM</div>
              <div className="text-xs text-gray-500">TypeORM, Prisma</div>
            </div>
          </div>
        </div>

        {/* Tools */}
        <div>
          <div className={className.sub_title}>Business Tools</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className={className.bg}>
              <div className="text-sm font-semibold">Communication</div>
              <div className="text-xs text-gray-500">
                Slack, Notion, Mattermost
              </div>
            </div>
            <div className={className.bg}>
              <div className="text-sm font-semibold">Design</div>
              <div className="text-xs text-gray-500">Figma, Zeplin</div>
            </div>
            <div className={className.bg}>
              <div className="text-sm font-semibold">API</div>
              <div className="text-xs text-gray-500">Postman, Swagger</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Education = () => {
  return (
    <div>
      <h2 className={SectionTitle}>Education</h2>
      <div className="space-y-10">
        <div>
          <h3 className="text-lg font-semibold">학력</h3>
          <p className="text-muted-foreground">
            중앙대학교 컴퓨터공학부 (서울) | 2013.03 - 2020.02
          </p>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <div>
      <h2 className={SectionTitle}>Experience</h2>
      <div className="space-y-10">
        {/* 중앙일보 */}
        <div>
          <h3 className="text-lg font-semibold">중앙일보</h3>
          <p className="text-muted-foreground">
            인턴, 웹 개발 | 2017.07 - 2017.09
          </p>
          <ul className="list-disc pl-4 text-muted-foreground">
            <li>편집부 기사를 Gamification을 추가한 개발 작업</li>
            <li>편집부와 개발부 간 소통 및 관리 역할 수행</li>
            <li>HTML, CSS, D3.js, JavaScript를 활용한 개발 경험</li>
          </ul>
        </div>

        {/* 비버소프트 */}
        <div>
          <h3 className="text-lg font-semibold">비버소프트</h3>
          <p className="text-muted-foreground">
            사원, 소프트웨어 엔지니어 | 2018.01 - 2018.06
          </p>
          <ul className="list-disc pl-4 text-muted-foreground">
            <li>하이치과 백엔드 및 하이브리드 앱 서비스 제작 (iOS, AOS)</li>
            <li>주베베 백엔드 및 하이브리드 앱 서비스 제작 (iOS, AOS)</li>
            <li>
              PHP, HTML, CSS, JQuery, Android Framework, iOS Framework 활용
            </li>
          </ul>
        </div>

        {/* AMP */}
        <div>
          <h3 className="text-lg font-semibold">(주) 앰프</h3>
          <p className="text-muted-foreground">공동 창업자 | 2018.06 - 현재</p>
          <ul className="list-disc pl-4 text-muted-foreground">
            <li>풀스택 개발</li>
            <li>쿠폰빌 서비스 제작</li>
            <li>아이돌 팬 정보 큐레이션 서비스 제작</li>
            <li>팬 굿즈 이커머스 및 NFT 서비스 제작</li>
            <li>백오피스 제작</li>
            <li>온/오프라인 이벤트 프로젝트 기획 및 개발</li>
            <li>
              HTML, CSS, JavaScript, React, Next.js, Node.js, Nest.js, AWS, GCP
              등 다양한 기술 활용.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [selectedImageForPopup, setSelectedImageForPopup] = React.useState({
    src: "",
    alt: "",
    className: "",
  });
  const [openImagePopup, setOpenImagePopup] = React.useState(false);

  const clickImage = (src: string, alt: string) => {
    setSelectedImageForPopup({
      src,
      alt,
      className: "m-auto ",
    });
    setOpenImagePopup(true);
  };

  React.useLayoutEffect(() => {
    document.getElementById("proj-wrapper")?.addEventListener("click", (e) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "IMG") {
        clickImage(
          (target as HTMLImageElement).src,
          (target as HTMLImageElement).alt
        );
      }
    });
  }, []);
  return (
    <div id="proj-wrapper">
      <ImagePopup
        {...selectedImageForPopup}
        open={openImagePopup}
        setOpen={setOpenImagePopup}
      />
      <h2 className={SectionTitle}>Projects</h2>
      <div className="space-y-14">
        {/* Duckzill 아이돌 팬 정보 큐레이션 서비스 */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">
            Duckzill 아이돌 팬 정보 큐레이션 서비스
            <p className="text-muted-foreground font-bold text-xs border-b-2 py-2">
              <code>Next.js</code> <code>Apollo</code> <code>Mobx</code>{" "}
              <code>GraphQL</code> <code>Jenkins</code> <code>AWS</code>
            </p>
          </h3>
          <p className="text-muted-foreground">
            팬들이 주최하는 다양한 이벤트와 지하철 광고가 분산되어 있어 정보를
            찾기 어려운 상황에서, 이벤트를 큐레이팅해주는 서비스를
            개발하였습니다.
          </p>
          <p className="text-muted-foreground">
            SNS 크롤링을 서드파티로 구성하여 마케팅을 효율적으로 진행하고, SEO
            구성을 통해 서비스의 가시성을 높였습니다.
          </p>
          <p className="text-muted-foreground">
            그 결과, Active User 수는 <b>53만명</b>, 해외 이용자 수는{" "}
            <b>6만명</b>, SNS 콘텐츠 노출 수는 <b>1,525만회</b>에 달하는 성과를
            이루었습니다.
          </p>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>관련 이미지 보기</AccordionTrigger>
              <AccordionContent>
                <div className="flex items-center gap-4 text-muted-foreground overflow-scroll pt-3">
                  <Image
                    width={240}
                    height={1}
                    src="/images/about/duckzill/1.png"
                    alt="duckzill"
                    className="border rounded-md w-[240px] aspect-[9/16] h-full object-cover"
                  />
                  <Image
                    width={240}
                    height={1}
                    src="/images/about/duckzill/2.png"
                    alt="duckzill"
                    className="border rounded-md w-[240px] aspect-[9/16] h-full object-cover"
                  />
                  <Image
                    width={240}
                    height={1}
                    src="/images/about/duckzill/3.png"
                    alt="duckzill"
                    className="border rounded-md w-[240px] aspect-[9/16] h-full object-cover"
                  />
                  <Image
                    width={240}
                    height={1}
                    src="/images/about/duckzill/4.png"
                    alt="duckzill"
                    className="border rounded-md w-[240px] aspect-[9/16] h-full object-cover"
                  />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Duckzill Shop */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">
            Duckzill Shop
            <p className="text-muted-foreground font-bold text-xs border-b-2 py-2">
              <code>PHP</code> <code>Jquery</code> <code>Spring Boot</code>{" "}
              <code>AWS</code>
            </p>
          </h3>
          <p className="text-muted-foreground">
            솔루션을 시장에 맞게 커스터마이징하고, Spring Boot와 Notion을 연동한
            정산 프로세스를 개발했습니다. 이를 통해 관리자, 판매자, 사용자
            페이지를 최적화하고, 입점 프로세스를 개선하여 사용자 편의성을
            높였습니다.
          </p>
          <p className="text-muted-foreground">
            이 결과로 최근까지 <b>628명</b>의 판매자가 등록되었고,{" "}
            <b>3,135 개</b>의 상품이 올라왔습니다. 또한, <b>388명</b>의 판매자가
            매출을 발생시켜 총 <b>18억원</b>의 매출을 기록하는 성과를
            이루었습니다.
          </p>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-2">
              <AccordionTrigger>관련 이미지 보기</AccordionTrigger>
              <AccordionContent>
                <div className="flex items-center gap-4 text-muted-foreground overflow-scroll pt-3">
                  <Image
                    width={240}
                    height={1}
                    src="/images/about/duckzill_shop/1.jpg"
                    alt="duckzill shop"
                    className="border rounded-md w-[240px] aspect-[9/16] h-full object-cover"
                  />
                  <Image
                    width={240}
                    height={1}
                    src="/images/about/duckzill_shop/2.jpg"
                    alt="duckzill shop"
                    className="border rounded-md w-[240px] aspect-[9/16] h-full object-cover"
                  />
                  <Image
                    width={240}
                    height={1}
                    src="/images/about/duckzill_shop/3.jpg"
                    alt="duckzill shop"
                    className="border rounded-md w-[240px] aspect-[9/16] h-full object-cover"
                  />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Frame Market Service */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">
            액자 판매 시스템
            <p className="text-muted-foreground font-bold text-xs border-b-2 py-2">
              <code>Next.js</code> <code>Nest.js</code> <code>Docker</code>{" "}
              <code>MUI</code> <code>NginX</code> <code>AWS</code>
            </p>
          </h3>
          <p className="text-muted-foreground">
            국내 및 해외에서 종이로 판매 액자를 주문하는 시스템이 오프라인에서
            운영되던 상황에서, 주문 과정에서 발생하는 오류와 현장에서의 혼란을
            줄이기 위해 온라인 시스템으로의 전환이 필요했습니다.
          </p>
          <p className="text-muted-foreground">
            이에 따라 저는 온라인 주문 시스템을 개발하여 사용자 편의성을
            향상시키고, 주문 과정에서의 오류를 줄이며 전체적인 시간을 단축시키는
            역할을 맡았습니다.
          </p>
          <p className="text-muted-foreground">
            이 과정에서 기존의 종이 주문 방식을 온라인으로 전환하고 사용자
            인터페이스를 개선했으며, AWS Lambda를 활용하여 액자 이미지에
            워터마크 기능을 추가하여 무단 사용을 방지했습니다. 또한, 사용자
            피드백을 반영하여 시스템의 편리성을 지속적으로 개선했습니다.
          </p>
          <p className="text-muted-foreground">
            그 결과, 이 프로젝트를 통해 국내 및 해외에서 <b>50여 건의 이벤트</b>
            가 성공적으로 진행되었고, 총 <b>3,800건</b>의 주문 기록과 약
            <b>5,900만원</b>의 매출을 기록했습니다. 사용자들은 편리한 온라인
            주문 시스템을 통해 주문 과정에서의 혼란이 줄어들고, 만족도가 크게
            향상되었습니다.
          </p>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-5">
              <AccordionTrigger>관련 이미지 보기</AccordionTrigger>
              <AccordionContent>
                <div className="flex items-center gap-4 text-muted-foreground overflow-scroll pt-3">
                  <Image
                    width={240}
                    height={1}
                    src="/images/about/frame_tool/1.png"
                    alt="Frame Tool"
                    className="border rounded-md w-[240px] aspect-[9/16] h-full object-cover"
                  />
                  <Image
                    width={240}
                    height={1}
                    src="/images/about/frame_tool/2.png"
                    alt="Frame Tool"
                    className="border rounded-md w-[240px] aspect-[9/16] h-full object-cover"
                  />
                  <Image
                    width={480}
                    height={240}
                    src="/images/about/frame_tool/3.png"
                    alt="Frame Tool"
                    className="border rounded-md h-full aspect-[3/2] w-full object-cover"
                  />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Backoffice */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">
            회사 백오피스 개발
            <p className="text-muted-foreground font-bold text-xs border-b-2 py-2">
              <code>Next.js</code> <code>Nest.js</code> <code>Redis</code>{" "}
              <code>Nx</code> <code>Python</code>
              <code>Docker</code> <code>AWS</code> <code>GCP</code>
            </p>
          </h3>
          <p className="text-muted-foreground">
            회사의 백오피스 시스템이 비효율적이고 비용이 많이 드는 기존 서비스에
            의존하고 있었으며, 직원들의 데이터 관리, 마케팅, 현장 운영, 기획에
            필요한 기능들이 부족했습니다. 이에 따라 효율적인 데이터 관리와 비용
            절감을 위해 새로운 백오피스 시스템을 개발하고, 직원들의 업무
            효율성을 높이기 위한 다양한 기능을 기획 및 구현했습니다. 이를 위해
            Monorepo 구조를 채택하여 UI 효율성을 극대화했습니다.
          </p>
          <p className="text-muted-foreground">
            주요 작업으로 첫째, 타사의 플랫폼 비용 문제를 해결하기 위해 Monorepo
            기반의 단축 URL 관리 서비스를 개발하였고, 메타데이터 수집 및 분석
            기능을 추가하며 서버 분리를 통해 이슈 대응 속도를 높였습니다.
          </p>
          <p className="text-muted-foreground">
            둘째, 이벤트 공지 및 해외 유저의 데이터를 기반으로 단체 이메일을
            발송하는 메일링 서비스를 개발하였으며, 사용하던 타사의 플랫폼 비용
            문제를 해결하고 예약, 스케줄링, 템플릿 기능을 추가하여 사용자
            편의성을 높였습니다.
          </p>
          <p className="text-muted-foreground">
            셋째, POS기의 데이터를 Webhook을 통해 DB에 저장하고 이를
            스케줄링하여 프로젝트에 구성된 SpreadSheet에 업로드하는 현장
            오프라인 POS 연동 시스템을 구축했습니다.
          </p>
          <p className="text-muted-foreground">
            넷째, 전시회 진행 시 소요되는 시간을 줄이기 위해 자동 정렬, PDF 및
            이미지 Export 기능을 제공하는 액자 배치도 서비스를 개발하였으며,
            마지막으로 디자이너 리소스를 절약하기 위해 썸네일 자동 생성기를
            개발했습니다. 이 외에도 기업 센터 미팅룸 예약 확인, 휴가 관리, 외근,
            디자인 요청 등의 기능을 추가하여 전반적인 업무 효율성을
            향상시켰습니다.
          </p>
          <p className="text-muted-foreground">
            이러한 기능들을 통해 기존의 메일링 및 단축 URL 서비스를 중단함으로써
            <b> 비용을 전부 절감</b>하고 <b>인력 리소스를 향상</b>시켰으며, 액자
            판매 썸네일 생성에 소요되던 시간을 간소화하고 기획 시간을 단축시켜
            전반적인 업무 효율을 크게 향상시켰습니다. 직원들은 새로운 백오피스
            시스템을 통해 더 나은 업무 환경을 경험하게 되었습니다.
          </p>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-6">
              <AccordionTrigger>관련 이미지 보기</AccordionTrigger>
              <AccordionContent>
                <div className="flex items-center gap-4 text-muted-foreground overflow-scroll pt-3">
                  <Image
                    width={240}
                    height={1}
                    src="/images/about/backoffice_frame_checkerboard/2.png"
                    alt="Thumbnail Generator"
                    className="border rounded-md w-[240px] aspect-[9/16] h-full object-cover"
                  />
                  <Image
                    width={480}
                    height={240}
                    src="/images/about/backoffice_frame_checkerboard/1.png"
                    alt="Thumbnail Generator"
                    className="border rounded-md h-full aspect-[3/2] w-full object-cover"
                  />
                  <Image
                    width={240}
                    height={1}
                    src="/images/about/backoffice_url/1.png"
                    alt="Short URL"
                    className="border rounded-md w-[240px] aspect-[9/16] h-full object-cover"
                  />
                  <Image
                    width={480}
                    height={240}
                    src="/images/about/backoffice_url/2.png"
                    alt="Short URL"
                    className="border rounded-md h-full aspect-[3/2] w-full object-cover"
                  />
                  <Image
                    width={480}
                    height={240}
                    src="/images/about/backoffice_mail/1.png"
                    alt="Mailing"
                    className="border rounded-md h-full aspect-[3/2] w-full object-cover"
                  />
                  <Image
                    width={480}
                    height={240}
                    src="/images/about/backoffice_mail/2.png"
                    alt="Mailing"
                    className="border rounded-md h-full aspect-[3/2] w-full object-cover"
                  />
                  <Image
                    width={240}
                    height={1}
                    src="/images/about/offline-pos/1.png"
                    alt="Pick your winter"
                    className="border rounded-md w-[240px] aspect-[9/16] h-full object-cover"
                  />
                  <Image
                    width={240}
                    height={1}
                    src="/images/about/offline-pos/2.png"
                    alt="Find the difference"
                    className="border rounded-md w-[240px] aspect-[9/16] h-full object-cover"
                  />
                  <Image
                    width={480}
                    height={240}
                    src="/images/about/offline-pos/3.png"
                    alt="Love potion"
                    className="border rounded-md h-full aspect-[3/2] w-full object-cover"
                  />
                  <Image
                    width={480}
                    height={240}
                    src="/images/about/backoffice_frame_layout/1.png"
                    alt="Frame Layout"
                    className="border rounded-md h-full aspect-[3/2] w-full object-cover"
                  />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Duckzill NFT Project - Backend */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">
            Duckzill NFT Project - Backend
            <p className="text-muted-foreground font-bold text-xs border-b-2 py-2">
              <code>Nest.js</code> <code>ElastiCache</code> <code>Docker</code>{" "}
              <code>AWS</code>
            </p>
          </h3>
          <p className="text-muted-foreground">
            사업의 방향을 NFT 콘텐츠로 전환하면서 클레이튼 기반의 NFT 드랍 온,
            오프라인 이벤트를 연결해주는 프로젝트가 필요했습니다. 이 프로젝트는
            사용자 참여를 증대시키고 NFT의 가치를 높이는 데 중점을 두었습니다.
          </p>
          <p className="text-muted-foreground">
            이에 따라, 저는 Backend 파트 개발을 담당하였고 서비스 API 뿐만
            아니라 AWS Beanstalk, ECR, Git Action을 활용하여 Docker 기반의
            무중단 배포 시스템을 구현했습니다. 이 과정에서 Auto scaling과
            Immutable 배포를 적용하여 시스템의 안정성을 높였습니다.
          </p>
          <p className="text-muted-foreground">
            또한, 이벤트 당첨 알고리즘을 응모 시간 기반으로 개발하여 공정성을
            강화하고, 이미지 최적화 기능을 추가하여 On-demand resizing을 통해
            사용자 경험을 개선했습니다.
          </p>
          <p className="text-muted-foreground">
            이러한 개발을 통해 서비스 설문을 통한 사용자 반응에서
            <b> 75% 이상은 만족</b>했습니다. 특히, 이벤트 당첨 과정의 공정성이
            높아져 사용자 만족도가 크게 향상되었고 팀의 기술적 역량을 강화하는
            데 기여했습니다.
          </p>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-4">
              <AccordionTrigger>관련 이미지 보기</AccordionTrigger>
              <AccordionContent>
                <div className="flex items-center gap-4 text-muted-foreground overflow-scroll pt-3">
                  <Image
                    width={240}
                    height={1}
                    src="/images/about/nft-proj/1.png"
                    alt="duckzill shop"
                    className="border rounded-md w-[240px] aspect-[9/16] h-full object-cover"
                  />
                  <Image
                    width={240}
                    height={1}
                    src="/images/about/nft-proj/2.png"
                    alt="duckzill shop"
                    className="border rounded-md w-[240px] aspect-[9/16] h-full object-cover"
                  />
                  <Image
                    width={480}
                    height={240}
                    src="/images/about/nft-proj/3.png"
                    alt="duckzill shop"
                    className="border rounded-md h-full aspect-[3/2] w-full object-cover"
                  />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Duckzill Shop */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">
            Duckzill Shop 리뉴얼 서비스
            <p className="text-muted-foreground font-bold text-xs border-b-2 py-2">
              <code>Next.js</code> <code>Nest.js</code> <code>Redis</code>{" "}
              <code>Redux</code> <code>Docker</code> <code>AWS</code>
            </p>
          </h3>
          <p className="text-muted-foreground">
            이커머스 플랫폼의 기존 솔루션에 의존하여 운영하던 상황에서, 시장의
            변화에 빠르게 대응하기 위해 팀은 새로운 아키텍처를 설계하고 사용자
            요구사항을 반영하여 유연한 시스템을 구축하기 위한 개발 작업을
            진행했습니다.
          </p>
          <p className="text-muted-foreground">
            자체 이커머스 플랫폼의 초기 버전이 성공적으로 완성되었으며, 이는
            사용자 경험을 개선하고 관리 효율성을 높이는 데 기여하였고, 향후 추가
            기능 개발 및 확장에 대한 기반을 마련했습니다.
          </p>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-3">
              <AccordionTrigger>관련 이미지 보기</AccordionTrigger>
              <AccordionContent>
                <div className="flex items-center gap-4 text-muted-foreground overflow-scroll pt-3">
                  <Image
                    width={240}
                    height={1}
                    src="/images/about/duckzill_shop2/1.png"
                    alt="duckzill shop"
                    className="border rounded-md w-[240px] aspect-[9/16] h-full object-cover"
                  />
                  <Image
                    width={240}
                    height={1}
                    src="/images/about/duckzill_shop2/2.png"
                    alt="duckzill shop"
                    className="border rounded-md w-[240px] aspect-[9/16] h-full object-cover"
                  />
                  <Image
                    width={240}
                    height={1}
                    src="/images/about/duckzill_shop2/3.png"
                    alt="duckzill shop"
                    className="border rounded-md w-[240px] aspect-[9/16] h-full object-cover"
                  />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Offline Event Page */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">
            온 / 오프라인 이벤트 페이지
            <p className="text-muted-foreground font-bold text-xs border-b-2 py-2">
              <code>Next.js</code> <code>Tailwind</code> <code>Vercel</code>{" "}
              <code>MSW</code> <code>Beanstalk</code> <code>ECR</code>
              <code>Docker</code>
            </p>
          </h3>
          <p className="text-muted-foreground">
            현장에서 매출 증진을 위해 참여형 이벤트 페이지를 개발할 필요성이
            있었습니다. 특히, 다양한 SNS를 통해 유입된 사용자들을 오프라인
            방문으로 유도하는 전략이 필요했습니다. 이를 위해 템플릿 프로젝트를
            구성하여 이벤트 페이지의 디자인과 기능을 최적화하고, 사용자 경험을
            개선하는 데 집중했습니다.
          </p>
          <p className="text-muted-foreground">
            디자인을 핵심 요소로 삼아 생산성과 효율성을 높이기 위해 다양한
            시각적 요소와 인터랙티브한 기능을 추가했습니다.
          </p>
          <p className="text-muted-foreground">
            그 결과, 이벤트 페이지는 총 <b>56,000회</b>의 참여 조회수를
            기록하였고, 평균 참여 시간은 약 <b>30초</b>에 달했습니다. 특히,
            <b> 해외 유입이 60% 이상</b>을 차지했고, 현장 매출 향상에 기여하여
            메인 이벤트로 자리 잡게 되었습니다. 이러한 성과는 참여형 이벤트
            페이지의 효과성을 입증하며, 이후 모든 프로젝트에 대한 긍정적인
            기반을 마련했습니다.
          </p>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-11">
              <AccordionTrigger>관련 이미지 보기</AccordionTrigger>
              <AccordionContent>
                <div className="flex items-center gap-4 text-muted-foreground overflow-scroll pt-3">
                  <Image
                    width={240}
                    height={1}
                    src="/images/about/event-publicize/1.gif"
                    alt="Pick your winter"
                    className="border rounded-md w-[240px] aspect-[9/16] h-full object-cover"
                  />
                  <Image
                    width={240}
                    height={1}
                    src="/images/about/event-publicize/2.gif"
                    alt="Find the difference"
                    className="border rounded-md w-[240px] aspect-[9/16] h-full object-cover"
                  />
                  <Image
                    width={240}
                    height={1}
                    src="/images/about/event-publicize/3.gif"
                    alt="Love potion"
                    className="border rounded-md w-[240px] aspect-[9/16] h-full object-cover"
                  />
                  <Image
                    width={240}
                    height={1}
                    src="/images/about/map/1.gif"
                    alt="Festa for Army"
                    className="border rounded-md w-[240px] aspect-[9/16] h-full object-cover"
                  />
                  <Image
                    width={240}
                    height={1}
                    src="/images/about/map/2.gif"
                    alt="Festa for Army"
                    className="border rounded-md w-[240px] aspect-[9/16] h-full object-cover"
                  />
                  <Image
                    width={240}
                    height={1}
                    src="/images/about/map/3.gif"
                    alt="Festa for Army"
                    className="border rounded-md w-[240px] aspect-[9/16] h-full object-cover"
                  />
                  <Image
                    width={240}
                    height={240}
                    src="/images/about/map/4.png"
                    alt="Festa for Army"
                    className="border rounded-md h-full aspect-[3/2] w-full object-cover"
                  />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Duckzill NFT Project */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">
            NFT AirDrop Project
            <p className="text-muted-foreground font-bold text-xs border-b-2 py-2">
              <code>Openzeppelin/Contracts</code> <code>Hardhat</code>{" "}
              <code>Next.js</code>
              <code>AWS</code>
            </p>
          </h3>
          <p className="text-muted-foreground">
            Polygon 기반의 NFT Airdrop Event를 기획하고 진행하는 과정에서,
            다양한 이슈에 대응할 수 있는 시스템과 커뮤니티의 참여를 유도할
            필요성이 있었습니다. 이에 따라 LG U+와 협업하여 가상 전시회
            <b>{`'포토카드룸'`}</b>을 개최하고, NFT 홀더들에게 선물을 제공하는
            응모 페이지를 개발하는 것이 주요 과제가 되었습니다.
          </p>
          <p className="text-muted-foreground">
            이벤트의 성공적인 진행을 위해, 먼저 Polygon 기반의 NFT Airdrop
            Event를 위한 스마트 컨트랙트를 개발하고 Front-end를 구성했습니다. LG
            U+와의 협업을 통해 DIVE 플랫폼에서 가상 전시회를 열고, 해당
            프로젝트를 개시했습니다. 또한, 다양한 이슈에 대응할 수 있도록
            오프라인 이벤트를 위한 수동 Drop Scanner를 추가 개발하였고, NFT
            홀더들에게 선물을 제공하는 응모 페이지를 개발하여 참여를
            유도했습니다.
          </p>
          <p className="text-muted-foreground">
            NFT 커뮤니티의 중요성을 고려하여 유틸리티 페이지를 기획하고, 공식
            굿즈 선물과 함께 다음 오프라인 이벤트에 대한 재참여를 높이기 위한
            장치를 마련했습니다. 이 모든 과정에서 적은 리소스에 맞춰 모바일
            페이지로만 구성하여 효율성을 극대화했습니다.
          </p>
          <p className="text-muted-foreground">
            결과적으로, 이벤트는 성공적으로 진행되었으며, 참여자들의 긍정적인
            반응을 이끌어냈습니다. <b>LG U+와의 협업</b>을 통해 KPOP 팬덤 내에서
            <b>NFT 문화를 형성</b>하는 데 기여하였고, 커뮤니티의 참여가 증가하여
            오프라인 이벤트에 대한 재참여율이 높아졌습니다.
          </p>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-13">
              <AccordionTrigger>관련 이미지 보기</AccordionTrigger>
              <AccordionContent>
                <div className="flex items-center gap-4 text-muted-foreground overflow-scroll pt-3">
                  <Image
                    width={240}
                    height={1}
                    src="/images/about/nft/1.png"
                    alt="NFT Project"
                    className="border rounded-md w-[240px] aspect-[9/16] h-full object-cover"
                  />
                  <Image
                    width={240}
                    height={1}
                    src="/images/about/nft/2.gif"
                    alt="NFT Project"
                    className="border rounded-md w-[240px] aspect-[9/16] h-full object-cover"
                  />
                  <Image
                    width={240}
                    height={1}
                    src="/images/about/nft/3.jpg"
                    alt="NFT Project"
                    className="border rounded-md w-[240px] aspect-[9/16] h-full object-cover"
                  />
                  <Image
                    width={240}
                    height={1}
                    src="/images/about/nft2/1.png"
                    alt="NFT Airdrop"
                    className="border rounded-md w-[240px] aspect-[9/16] h-full object-cover"
                  />
                  <Image
                    width={240}
                    height={1}
                    src="/images/about/nft2/2.png"
                    alt="NFT Airdrop"
                    className="border rounded-md w-[240px] aspect-[9/16] h-full object-cover"
                  />
                  <Image
                    width={240}
                    height={1}
                    src="/images/about/nft2/3.png"
                    alt="NFT Airdrop"
                    className="border rounded-md w-[240px] aspect-[9/16] h-full object-cover"
                  />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Couponvill */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">
            테마 기반 맛집 큐레이션 서비스
            <p className="text-muted-foreground font-bold text-xs border-b-2 py-2">
              <code>PHP</code> <code>Python</code>
            </p>
          </h3>
          <p className="text-muted-foreground">
            사업의 시작으로 웹 기반 하이브리드 앱 개발을 시작했습니다. 이
            프로젝트는 사용자, 클라이언트, 관리자 파트를 포함한 프로젝트였으며,
            PHP와 CodeIgniter를 활용하여 각 파트를 개발하고, Python을 사용하여
            리뷰 분석기를 제작하였습니다. 프로젝트의 요구사항을 정의하고, 각
            파트의 기능을 설계하여 구현하였으며, 리뷰 분석기를 통해 가상의
            데이터를 분석하는 방법을 실험했습니다. 이 프로젝트를 통해 웹 개발 및
            데이터 분석 기술을 향상시킬 수 있었고, 향후 더 큰 프로젝트에 대한
            기초를 다질 수 있었습니다.
          </p>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-15">
              <AccordionTrigger>관련 이미지 보기</AccordionTrigger>
              <AccordionContent>
                <div className="flex items-center gap-4 text-muted-foreground overflow-scroll pt-3">
                  <Image
                    width={240}
                    height={1}
                    src="/images/about/couponvill/1.png"
                    alt="couponvill"
                    className="border rounded-md w-[240px] aspect-[9/16] h-full object-cover"
                  />
                  <Image
                    width={240}
                    height={1}
                    src="/images/about/couponvill/2.png"
                    alt="couponvill"
                    className="border rounded-md w-[240px] aspect-[9/16] h-full object-cover"
                  />
                  <Image
                    width={240}
                    height={240}
                    src="/images/about/couponvill/3.png"
                    alt="couponvill"
                    className="border rounded-md h-full aspect-[3/2] w-full object-cover"
                  />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};
export default function Page() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 lg:px-6 py-12 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 lg:gap-12">
        <div className="flex flex-col items-center lg:items-start space-y-4">
          <div className="rounded-full w-32 h-32 overflow-hidden border">
            <Image
              src="https://avatars.githubusercontent.com/u/17160263"
              width={128}
              height={128}
              alt="KooYS Profile"
              className="w-full h-full object-cover "
            />
          </div>
          <div className="space-y-2 text-center lg:text-left">
            <div className="flex items-end gap-1">
              <h1 className="text-2xl font-bold">구영서</h1>
              <DownloadPdfButton />
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">0seo4207@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <GithubIcon className="w-4 h-4 text-muted-foreground" />
              <a
                href="https://github.com/KooYS"
                className="underline underline-offset-2 text-muted-foreground"
              >
                View on GitHub
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">+82 (010) 8832-4207</span>
            </div>
          </div>
        </div>
        <div className="space-y-10">
          <div>
            <h2 className={cn(SectionTitle, "text-3xl")}>About Me</h2>
          </div>
          <Introduce />
          <Skill />
          <Projects />
          <Experience />
          <Education />
        </div>
      </div>
    </div>
  );
}

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}
