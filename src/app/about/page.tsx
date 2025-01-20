"use client";
import { cn } from "@/lib/utils";
import { Mail, Phone } from "lucide-react";
import ImagePopup from "@/app/about/ImagePopup";
import React from "react";

const SectionTitle = "text-2xl font-bold mb-4 underline-offset-4 underline";
const Skill = () => {
  const className = {
    bg: "bg-muted rounded-md px-3 py-2 text-center",
    sub_title: "border-b pb-3 text-base font-semibold my-4",
  };

  return (
    <div>
      <h2 className={SectionTitle}>Skills</h2>
      <div className="space-y-10">
        <div>
          <div className={className.sub_title}>Back-end</div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className={className.bg}>
              <div className="text-sm font-semibold">Node</div>
            </div>
            <div className={className.bg}>
              <div className="text-sm font-semibold">Nest.js</div>
            </div>
            <div className={className.bg}>
              <div className="text-sm font-semibold">Express.js</div>
            </div>
            <div className={className.bg}>
              <div className="text-sm font-semibold">TypeORM</div>
            </div>
            <div className={className.bg}>
              <div className="text-sm font-semibold">Prisma</div>
            </div>
            <div className={className.bg}>
              <div className="text-sm font-semibold">GraphQL</div>
            </div>
            <div className={className.bg}>
              <div className="text-sm font-semibold">Spring Boot</div>
            </div>
          </div>
        </div>

        <div>
          <div className={className.sub_title}>DevOps</div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className={className.bg}>
              <div className="text-sm font-semibold">
                AWS (EC2, S3, RDS, CloudFront, Lambda, Route53, CodeBuild,
                CodePipeline, CodeDeploy)
              </div>
            </div>
            <div className={className.bg}>
              <div className="text-sm font-semibold">
                GCP (Compute Engine, Cloud Functions, App Engine, Cloud SQL)
              </div>
            </div>
            <div className={className.bg}>
              <div className="text-sm font-semibold">
                AWS (ELB, Beanstalk, ElastiCache, DynamoDB)
              </div>
            </div>
            <div className={className.bg}>
              <div className="text-sm font-semibold">Docker</div>
            </div>
            <div className={className.bg}>
              <div className="text-sm font-semibold">Nginx</div>
            </div>
            <div className={className.bg}>
              <div className="text-sm font-semibold">Redis</div>
            </div>
          </div>
        </div>

        <div>
          <div className={className.sub_title}>Database</div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {/* Database */}
            <div className={className.bg}>
              <div className="text-sm font-semibold">MySQL</div>
            </div>
            <div className={className.bg}>
              <div className="text-sm font-semibold">PostgreSQL</div>
            </div>
            <div className={className.bg}>
              <div className="text-sm font-semibold">MongoDB</div>
            </div>
          </div>
        </div>

        <div>
          <div className={className.sub_title}>Front-end</div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className={className.bg}>
              <div className="text-sm font-semibold">HTML/CSS/JS</div>
            </div>
            <div className={className.bg}>
              <div className="text-sm font-semibold">React.js</div>
            </div>
            <div className={className.bg}>
              <div className="text-sm font-semibold">Next.js</div>
            </div>
            <div className={className.bg}>
              <div className="text-sm font-semibold">ESLint/Husky/Prettier</div>
            </div>
            <div className={className.bg}>
              <div className="text-sm font-semibold">React Query</div>
            </div>
            <div className={className.bg}>
              <div className="text-sm font-semibold">SWR</div>
            </div>
            <div className={className.bg}>
              <div className="text-sm font-semibold">Recoil</div>
            </div>
            <div className={className.bg}>
              <div className="text-sm font-semibold">TypeScript</div>
            </div>
            <div className={className.bg}>
              <div className="text-sm font-semibold">Emotion.js</div>
            </div>
            <div className={className.bg}>
              <div className="text-sm font-semibold">Tailwind CSS</div>
            </div>
            <div className={className.bg}>
              <div className="text-sm font-semibold">MUI</div>
            </div>
            <div className={className.bg}>
              <div className="text-sm font-semibold">MobX</div>
            </div>
            <div className={className.bg}>
              <div className="text-sm font-semibold">Storybook</div>
            </div>
            <div className={className.bg}>
              <div className="text-sm font-semibold">Cypress</div>
            </div>
          </div>
        </div>

        <div>
          <div className={className.sub_title}>ETC</div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className={className.bg}>
              <div className="text-sm font-semibold">Prompt Engineering</div>
            </div>
            <div className={className.bg}>
              <div className="text-sm font-semibold">Python</div>
            </div>
            <div className={className.bg}>
              <div className="text-sm font-semibold">NX (Monorepos)</div>
            </div>
            <div className={className.bg}>
              <div className="text-sm font-semibold">Sentry</div>
            </div>
            <div className={className.bg}>
              <div className="text-sm font-semibold">
                Git / GitHub / Git Actions
              </div>
            </div>
            <div className={className.bg}>
              <div className="text-sm font-semibold">Slack</div>
            </div>
            <div className={className.bg}>
              <div className="text-sm font-semibold">Figma</div>
            </div>
            <div className={className.bg}>
              <div className="text-sm font-semibold">Linear</div>
            </div>
            <div className={className.bg}>
              <div className="text-sm font-semibold">Zeplin</div>
            </div>
            <div className={className.bg}>
              <div className="text-sm font-semibold">Swagger</div>
            </div>
            <div className={className.bg}>
              <div className="text-sm font-semibold">Postman</div>
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
            중앙대학교 컴퓨터공학부 | 2013.03 - 2020.02
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
            <li>편집부 기사를 Gamification 작업.</li>
            <li>편집부와 개발부 간 브릿지 역할 수행.</li>
            <li>HTML, CSS, D3.js, JavaScript를 활용한 개발 경험.</li>
          </ul>
        </div>

        {/* 비버소프트 */}
        <div>
          <h3 className="text-lg font-semibold">비버소프트</h3>
          <p className="text-muted-foreground">
            사원, 소프트웨어 엔지니어 | 2018.01 - 2018.06
          </p>
          <ul className="list-disc pl-4 text-muted-foreground">
            <li>
              하이치과 백엔드 및 하이브리드 앱 서비스 제작 (웹뷰 - iOS,
              Android).
            </li>
            <li>
              주베베 백엔드 및 하이브리드 앱 서비스 제작 (웹뷰 - iOS, Android).
            </li>
            <li>
              PHP, HTML, CSS, JQuery, Android Framework, iOS Framework 활용.
            </li>
          </ul>
        </div>

        {/* AMP */}
        <div>
          <h3 className="text-lg font-semibold">(주) 앰프</h3>
          <p className="text-muted-foreground">공동 창업자 | 2018.06 - 현재</p>
          <ul className="list-disc pl-4 text-muted-foreground">
            <li>쿠폰빌 서비스 제작.</li>
            <li>아이돌 팬 정보 큐레이션 서비스 제작.</li>
            <li>아이돌 이커머스 및 NFT 서비스 제작.</li>
            <li>회사 백오피스 제작</li>
            <li>오프라인 이벤트를 온라인과 연결하는 프로젝트 기획 및 개발</li>
            <li>
              HTML, CSS, JavaScript, React, Next.js, Node.js, Nest.js, AWS, PHP,
              JQuery, Android Framework, iOS Framework 등 다양한 기술 활용.
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
      <div className="space-y-10">
        {/* Couponvill */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">
            테마 기반 맛집 큐레이션 서비스
          </h3>
          <p className="text-muted-foreground">
            PHP와 CodeIgniter를 활용하여 User App, Client, Admin 파트를 포함한
            웹 기반 하이브리드 앱을 개발. Python으로 리뷰 분석기 제작.
          </p>
          <p className="text-muted-foreground font-bold">
            PHP와 CodeIgniter, Python (sklearn)
          </p>
          <div className="flex items-center gap-4 text-muted-foreground overflow-scroll pt-3">
            <img
              src="./images/about/couponvill/1.png"
              alt="couponvill"
              className="border rounded-md w-[240px] aspect-[9/16] h-full object-cover"
            />
            <img
              src="./images/about/couponvill/2.png"
              alt="couponvill"
              className="border rounded-md w-[240px] aspect-[9/16] h-full object-cover"
            />
            <img
              src="./images/about/couponvill/3.png"
              alt="couponvill"
              className="border rounded-md h-[240px] aspect-[3/2] h-full object-cover"
            />
          </div>
        </div>

        {/* Duckzill 아이돌 팬 정보 큐레이션 서비스 */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">
            Duckzill 아이돌 팬 정보 큐레이션 서비스
          </h3>
          <p className="text-muted-foreground">
            팬들이 주최하는 이벤트, 지하철광고 등 이벤트를 한 곳으로 모아
            큐레이팅 해주는 서비스를 개발했습니다.
          </p>
          <p className="text-muted-foreground">
            SNS 크롤링을 서드파티로 구성하여 마케팅을 효율적으로 진행할 수
            있도록 구성했습니다.
          </p>
          <p className="text-muted-foreground">
            SEO 구성을 기반으로 서비스를 만들어 나가면서 Active User 53만, 해외
            이용자 6만, SNS 콘텐츠 노출 수 1,525만 달성하였습니다.
          </p>
          <p className="text-muted-foreground font-bold">
            Nextjs, Apollo, Mobx, GraphQL, Jenkins
          </p>
          <div className="flex items-center gap-4 text-muted-foreground overflow-scroll pt-3">
            <img
              src="./images/about/duckzill/1.png"
              alt="duckzill"
              className="border rounded-md w-[240px] aspect-[9/16] h-full object-cover"
            />
            <img
              src="./images/about/duckzill/2.png"
              alt="duckzill"
              className="border rounded-md w-[240px] aspect-[9/16] h-full object-cover"
            />
            <img
              src="./images/about/duckzill/3.png"
              alt="duckzill"
              className="border rounded-md w-[240px] aspect-[9/16] h-full object-cover"
            />
            <img
              src="./images/about/duckzill/4.png"
              alt="duckzill"
              className="border rounded-md w-[240px] aspect-[9/16] h-full object-cover"
            />
          </div>
        </div>

        {/* Duckzill Shop */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Duckzill Shop</h3>
          <p className="text-muted-foreground">
            커스텀이 가능한 솔루션 기반의 이커머스를 제작 및 커스터마이징.
            Spring Boot와 Notion 연동 정산 프로세스 개발하였습니다.
          </p>
          <p className="text-muted-foreground">
            시장에 적합하도록 관리자, 판매자, 사용자 페이지를 커스텀하였으며
            입점 프로세스도 따로 구성하여 편의성을 향상시켰습니다.
          </p>
          <p className="text-muted-foreground font-bold">
            PHP, Jquery, HTML, Spring Boot
          </p>
          <div className="flex items-center gap-4 text-muted-foreground overflow-scroll pt-3">
            <img
              src="./images/about/duckzill_shop/1.jpg"
              alt="duckzill shop"
              className="border rounded-md w-[240px] aspect-[9/16] h-full object-cover"
            />
            <img
              src="./images/about/duckzill_shop/2.jpg"
              alt="duckzill shop"
              className="border rounded-md w-[240px] aspect-[9/16] h-full object-cover"
            />
            <img
              src="./images/about/duckzill_shop/3.jpg"
              alt="duckzill shop"
              className="border rounded-md w-[240px] aspect-[9/16] h-full object-cover"
            />
          </div>
        </div>
        {/* Duckzill NFT Project - Backend */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">
            Duckzill NFT Project - Backend
          </h3>
          <p className="text-muted-foreground">
            클레이튼 기반의 NFT 드랍 온, 오프라인 이벤트를 연결해주는 프로젝트를
            개발했으며, Backend 파트 개발을 담당했습니다.
          </p>
          <p className="text-muted-foreground">
            추가 개발 사항으로 AWS Beanstalk + ECR + Git Action을 이용한 Docker
            기반으로 무중단 배포(Auto scaling, Immutable 배포)
          </p>
          <p className="text-muted-foreground">
            이벤트 당첨 알고리즘 추가(응모시간 기반), 이미지 최적화(On-demand
            resizing)를 개발했습니다.
          </p>
          <p className="text-muted-foreground font-bold">
            Nestjs, Beanstalk, ECR, Docker, ElastiCache,
          </p>
          <div className="flex items-center gap-4 text-muted-foreground overflow-scroll pt-3">
            <img
              src="./images/about/nft-proj/1.png"
              alt="duckzill shop"
              className="border rounded-md w-[240px] aspect-[9/16] h-full object-cover"
            />
            <img
              src="./images/about/nft-proj/2.png"
              alt="duckzill shop"
              className="border rounded-md w-[240px] aspect-[9/16] h-full object-cover"
            />
            <img
              src="./images/about/nft-proj/3.png"
              alt="duckzill shop"
              className="border rounded-md h-[240px] aspect-[3/2] h-full object-cover"
            />
          </div>
        </div>

        {/* Duckzill Shop */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Duckzill Shop 리뉴얼 서비스</h3>
          <p className="text-muted-foreground">
            솔루션 의존도를 없애고 확장성을 고려한 자체 이커머스 개발했습니다.
          </p>
          <p className="text-muted-foreground">
            Nextjs, Nestjs, AWS, Redis, Docker, Emotion, Redux
          </p>
          <div className="flex items-center gap-4 text-muted-foreground overflow-scroll pt-3">
            <img
              src="./images/about/duckzill_shop2/1.png"
              alt="duckzill shop"
              className="border rounded-md w-[240px] aspect-[9/16] h-full object-cover"
            />
            <img
              src="./images/about/duckzill_shop2/2.png"
              alt="duckzill shop"
              className="border rounded-md w-[240px] aspect-[9/16] h-full object-cover"
            />
            <img
              src="./images/about/duckzill_shop2/3.png"
              alt="duckzill shop"
              className="border rounded-md w-[240px] aspect-[9/16] h-full object-cover"
            />
          </div>
        </div>

        {/* Duckzill NFT Project */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">NFT AirDrop Event</h3>
          <p className="text-muted-foreground">
            Polygon 기반의 NFT Airdrop Event 구성 컨트렉트 개발 및 Front-end,
            오프라인 이벤트 기획 및 진행했습니다.
          </p>
          <p className="text-muted-foreground">
            LG U+와 협업하여 DIVE에 가상 전시회를 <b>{`'포토카드룸'`}</b>에서
            열고 해당 프로젝트를 개시했습니다.
          </p>
          <p className="text-muted-foreground">
            또한, Event 특성 상 다양한 이슈에 대응 가능한 형태로 준비했고
            오프라인에서 진행할 경우 문제에 대비한 수동 Drop Scanner를 추가
            개발했습니다.
          </p>
          <p className="text-muted-foreground font-bold">
            openzeppelin/contracts과 hardhat,Next.js(Static HTML Export), S3,
            SEO 및 PWA 구성
          </p>
          <div className="flex items-center gap-4 text-muted-foreground overflow-scroll pt-3">
            <img
              src="./images/about/nft/1.png"
              alt="NFT Project"
              className="border rounded-md w-[240px] aspect-[9/16] h-full object-cover"
            />
            <img
              src="./images/about/nft/2.gif"
              alt="NFT Project"
              className="border rounded-md w-[240px] aspect-[9/16] h-full object-cover"
            />
            <img
              src="./images/about/nft/3.jpg"
              alt="NFT Project"
              className="border rounded-md w-[240px] aspect-[9/16] h-full object-cover"
            />
          </div>
        </div>

        {/* NFT AirDrop Event */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">
            NFT AirDrop Event 확장 홀더 이벤트
          </h3>
          <p className="text-muted-foreground">
            Polygon 기반의 NFT Airdrop Event에 참여한 홀더들에게 선물을 주는
            응모 페이지를 개발했습니다.
          </p>
          <p className="text-muted-foreground">
            NFT 특성상 커뮤니티의 영향력이 중요하기 때문에 NFT의 문화를 위한
            유틸리티 페이지 기획했으며 공식 굿즈 선물과 함께 다음에 있을
            오프라인 이벤트에 대한 재참여를 높히기 위한 장치로 사용했습니다.
          </p>
          <p className="text-muted-foreground">
            적은 리소스 대비 효율을 가져가기 위한 모바일 페이지로만
            구성했습니다.
          </p>
          <p className="text-muted-foreground font-bold">
            Static HTML Export, S3, CloudFront
          </p>
          <div className="flex items-center gap-4 text-muted-foreground overflow-scroll pt-3">
            <img
              src="./images/about/nft2/1.png"
              alt="NFT Airdrop"
              className="border rounded-md w-[240px] aspect-[9/16] h-full object-cover"
            />
            <img
              src="./images/about/nft2/2.png"
              alt="NFT Airdrop"
              className="border rounded-md w-[240px] aspect-[9/16] h-full object-cover"
            />
            <img
              src="./images/about/nft2/3.png"
              alt="NFT Airdrop"
              className="border rounded-md w-[240px] aspect-[9/16] h-full object-cover"
            />
          </div>
        </div>

        {/* Festa for Army */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Festa for Army</h3>
          <p className="text-muted-foreground">
            부산에서 진행한 큰 이벤트에 마케팅 및 현장 이벤트 운영을 하기 위해
            이벤트 맵을 만들었습니다.
          </p>
          <p className="text-muted-foreground">
            실제 이벤트 맵을 통해서 유입되는 인원이 상당히 많았고 광고 효과도
            좋았습니다.
          </p>
          <p className="text-muted-foreground  font-bold">
            Next.js, msw, Beanstalk, ECR, Docker
          </p>
          <div className="flex items-center gap-4 text-muted-foreground overflow-scroll pt-3">
            <img
              src="./images/about/map/1.gif"
              alt="Festa for Army"
              className="border rounded-md w-[240px] aspect-[9/16] h-full object-cover"
            />
            <img
              src="./images/about/map/2.gif"
              alt="Festa for Army"
              className="border rounded-md w-[240px] aspect-[9/16] h-full object-cover"
            />
            <img
              src="./images/about/map/3.gif"
              alt="Festa for Army"
              className="border rounded-md w-[240px] aspect-[9/16] h-full object-cover"
            />
            <img
              src="./images/about/map/4.png"
              alt="Festa for Army"
              className="border rounded-md w-[240px] aspect-[9/16] h-full object-cover"
            />
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">액자 판매 시스템</h3>
          <p className="text-muted-foreground">
            국내, 해외 오프라인에서 종이로 판매 액자를 주문하는 시스템을
            온라인으로 옮겨서 개발했습니다.
          </p>
          <p className="text-muted-foreground">
            종이로 주문하는 방식의 오류와 현장에서 많은 인원으로 생기는 혼란을
            줄이기 위해 개발했고 사용하고 편의성을 향상 시키며 시간을
            단축시켰습니다.
          </p>
          <p className="text-muted-foreground">
            액자 이미지를 무단으로 사용하는 것을 방지하기 위해 AWS Lambda를
            이용한 워터마크도 추가했습니다.
          </p>
          <p className="text-muted-foreground  font-bold">
            Next.js, Nest.js, Docker, Emotion, Mui, Nginx
          </p>
          <div className="flex items-center gap-4 text-muted-foreground overflow-scroll pt-3">
            <img
              src="./images/about/frame_tool/1.png"
              alt="Frame Tool"
              className="border rounded-md w-[240px] aspect-[9/16] h-full object-cover"
            />
            <img
              src="./images/about/frame_tool/2.png"
              alt="Frame Tool"
              className="border rounded-md w-[240px] aspect-[9/16] h-full object-cover"
            />
            <img
              src="./images/about/frame_tool/3.png"
              alt="Frame Tool"
              className="border rounded-md h-[240px] aspect-[3/2] h-full object-cover"
            />
          </div>
        </div>

        {/* Mailing Service */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">메일링 서비스</h3>
          <p className="text-muted-foreground">
            이벤트 공지 및 해외 유저의 Google Form을 통해 만들어진 SpreadSheet
            데이터를 기반으로 단체 이메일을 보내기 위해 개발했습니다.
          </p>
          <p className="text-muted-foreground">
            기존에 사용하던 서비스의 비용 문제 및 제한적인 기능으로 인해
            만들었고 예약, 스케쥴링, 템플릿 기능을 추가하여 사용자의 편의성을
            높였습니다.
          </p>
          <p className="text-muted-foreground  font-bold">
            Next.js, Nest.js, Redis, Docker
          </p>
          <div className="flex items-center gap-4 text-muted-foreground overflow-scroll pt-3">
            <img
              src="./images/about/backoffice_mail/1.png"
              alt="Mailing"
              className="border rounded-md h-[240px] aspect-[3/2] h-full object-cover"
            />
            <img
              src="./images/about/backoffice_mail/2.png"
              alt="Mailing"
              className="border rounded-md h-[240px] aspect-[3/2] h-full object-cover"
            />
          </div>
        </div>

        {/* Frame Layout Service */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">액자 배치도 서비스</h3>
          <p className="text-muted-foreground">
            현장에서 전시회를 진행할 때 PPT 혹은 드로잉 플랫폼을 이용하여
            만드는데 이에 대한 소요 시간이 상당하여 액자 배치도를 만들었습니다.
          </p>
          <p className="text-muted-foreground">
            자동 정렬, PDF 및 이미지 Export 기능을 제공하여 사용자의 편의성을
            높이고 소용 시간을 단축시켰습니다.
          </p>
          <p className="text-muted-foreground  font-bold">Next.js, Nest.js</p>
          <div className="flex items-center gap-4 text-muted-foreground overflow-scroll pt-3">
            <img
              src="./images/about/backoffice_frame_layout/1.png"
              alt="Frame Layout"
              className="border rounded-md h-[240px] aspect-[3/2] h-full object-cover"
            />
          </div>
        </div>

        {/* Short URL Service */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">단축 URL 서비스</h3>
          <p className="text-muted-foreground">
            기존 사용하던 타 플랫폼의 비용적인 이슈를 줄이고자 단축 URL 서비스를
            만들었습니다.
          </p>
          <p className="text-muted-foreground">
            Monorepo 기반 단축 URL 관리 서비스. 메타데이터 수집 및 분석 기능
            포함. 서버 분리를 통해 이슈에 보다 빠른 대응을 할 수 있도록
            구했습니다.
          </p>
          <p className="text-muted-foreground  font-bold">
            Next.js, Nest.js, Redis, Docker
          </p>
          <div className="flex items-center gap-4 text-muted-foreground overflow-scroll pt-3">
            <img
              src="./images/about/backoffice_url/1.png"
              alt="Short URL"
              className="border rounded-md w-[240px] aspect-[9/16] h-full object-cover"
            />
            <img
              src="./images/about/backoffice_url/2.png"
              alt="Short URL"
              className="border rounded-md h-[240px] aspect-[3/2] h-full object-cover"
            />
          </div>
        </div>
        {/* Thumbnail Generator */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">액자 판매 썸네일 생성기</h3>
          <p className="text-muted-foreground">
            디자이너 리소스를 절약하기 위해 썸네일 자동 생성기를 개발.
          </p>
          <p className="text-muted-foreground  font-bold">
            Python(PIL), Google Cloud Function, Nest.js
          </p>
          <div className="flex items-center gap-4 text-muted-foreground overflow-scroll pt-3">
            <img
              src="./images/about/backoffice_frame_checkerboard/2.png"
              alt="Thumbnail Generator"
              className="border rounded-md w-[240px] aspect-[9/16] h-full object-cover"
            />
            <img
              src="./images/about/backoffice_frame_checkerboard/1.png"
              alt="Thumbnail Generator"
              className="border rounded-md h-[240px] aspect-[3/2] h-full object-cover"
            />
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">현장 오프라인 이벤트 페이지</h3>
          <p className="text-muted-foreground">
            현장에서 진행되는 참여형 이벤트 페이지를 개발했습니다.
          </p>
          <p className="text-muted-foreground  font-bold">
            Nextjs, Tailwind Css, Vercel
          </p>
          <div className="flex items-center gap-4 text-muted-foreground overflow-scroll pt-3">
            <img
              src="./images/about/event-publicize/1.gif"
              alt="Pick your winter"
              className="border rounded-md w-[240px] aspect-[9/16] h-full object-cover"
            />
            <img
              src="./images/about/event-publicize/2.gif"
              alt="Find the difference"
              className="border rounded-md w-[240px] aspect-[9/16] h-full object-cover"
            />
            <img
              src="./images/about/event-publicize/3.gif"
              alt="Love potion"
              className="border rounded-md w-[240px] aspect-[9/16] h-full object-cover"
            />
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">
            현장 오프라인 POS 연동 시스템 구축
          </h3>
          <p className="text-muted-foreground">
            현장에서 사용한 POS기의 데이터를 Webhook을 구성하여 DB에 저장하고
            이를 스케쥴링하여 프로젝트에 구성되어있는 SpreadSheet에 업로드하는
            시스템 구축했습니다.
          </p>
          <p className="text-muted-foreground  font-bold">
            Nest.js(Queues, Redis), Google SpreadSheet API, API Gateway, Lambda
          </p>
          <div className="flex items-center gap-4 text-muted-foreground overflow-scroll pt-3">
            <img
              src="./images/about/offline-pos/1.png"
              alt="Pick your winter"
              className="border rounded-md w-[240px] aspect-[9/16] h-full object-cover"
            />
            <img
              src="./images/about/offline-pos/2.png"
              alt="Find the difference"
              className="border rounded-md w-[240px] aspect-[9/16] h-full object-cover"
            />
            <img
              src="./images/about/offline-pos/3.png"
              alt="Love potion"
              className="border rounded-md h-[240px] aspect-[3/2] h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default function Page() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-12 md:py-16 lg:py-20">
      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8 md:gap-12">
        <div className="flex flex-col items-center md:items-start space-y-4">
          <div className="rounded-full w-32 h-32 overflow-hidden border">
            <img
              src="https://avatars.githubusercontent.com/u/17160263"
              width={128}
              height={128}
              alt="KooYS Profile"
              className="w-full h-full object-cover"
              style={{ aspectRatio: "128/128", objectFit: "cover" }}
            />
          </div>
          <div className="space-y-2 text-center md:text-left">
            <h1 className="text-2xl font-bold">구영서</h1>
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
            <div className="text-muted-foreground space-y-2">
              <p>
                안녕하세요, 저는 웹 기반 풀스택 개발자입니다. 서비스를 설계하고
                개발하며, 하나의 아이디어가 기능으로 구현되는 과정에서 재미와
                보람을 느낍니다.
              </p>
              <p>
                개발 과정에서 잘 풀리지 않는 문제가 생기면 여러 번 시도하며 해결
                방법을 찾는 데 깊이 몰입하곤 합니다. 때로는 시간이 어떻게
                흘러가는지도 모를 정도로 집중하기도 하지만, 혼자만의 시야에
                갇히지 않으려 주변의 피드백과 조언을 소중히 여기며 성장하려고
                노력합니다.
              </p>
              <p>
                작은 디테일도 놓치지 않으면서 사용자에게 필요한 가치를
                고민합니다. 그 결과물이 누군가의 일상에 조금이나마 도움이 될 수
                있다면, 그것만으로도 개발자로서 큰 의미를 느낍니다. 앞으로도
                끊임없이 배우고 고민하며 노력하겠습니다.
              </p>
            </div>
          </div>

          <Skill />
          <Education />
          <Experience />
          <Projects />
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
