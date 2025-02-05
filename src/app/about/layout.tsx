import React from "react";

export async function generateMetadata() {
  const now = new Date();
  let year = now.getFullYear();
  if (now.getMonth() >= 9) {
    year += 1;
  }
  return {
    title: `🧑‍💻 웹 개발자 구영서 | ${year}`,
    description: "#팀워크 #성장 #시간과비용관리",
    openGraph: {
      title: `🧑‍💻 웹 개발자 구영서 | ${year}`,
      description: "#팀워크 #성장 #시간과비용관리",
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
