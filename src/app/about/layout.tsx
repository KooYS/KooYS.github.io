import React from "react";

export async function generateMetadata() {
  const now = new Date();
  let year = now.getFullYear();
  if (now.getMonth() >= 9) {
    year += 1;
  }
  return {
    title: `🧑‍💻 웹 개발자 구영서 | ${year}`,
    description:
      "꾸준함과 집중, 그리고 노력으로 성장하는 개발자. 지식을 공유하며 팀과 함께 발전하는 것을 중요시합니다.",
    openGraph: {
      title: `🧑‍💻 웹 개발자 구영서 | ${year}`,
      description:
        "꾸준함과 집중, 그리고 노력으로 성장하는 개발자. 지식을 공유하며 팀과 함께 발전하는 것을 중요시합니다.",
    },
  };
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
