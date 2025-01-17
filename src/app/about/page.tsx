import { cn } from "@/lib/utils";
import { Mail, Phone } from "lucide-react";
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
            <li>
              회사 백오피스 개발:
              <ul className="list-disc pl-6">
                <li>데이터 대시보드</li>
                <li>단축 URL 생성기</li>
                <li>액자 배치도 생성 도구</li>
                <li>메일 시스템</li>
                <li>스케줄러</li>
              </ul>
            </li>
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
  return (
    <div>
      <h2 className={SectionTitle}>Projects</h2>
      <div className="space-y-10">
        {/* Couponvill */}
        <div>
          <h3 className="text-lg font-semibold">
            테마 기반 맛집 큐레이션 서비스
          </h3>
          <p className="text-muted-foreground">
            PHP와 CodeIgniter를 활용하여 User App, Client, Admin 파트를 포함한
            웹 기반 하이브리드 앱을 개발. Python으로 리뷰 분석기 제작.
          </p>
          <div className="flex items-center gap-4 text-muted-foreground overflow-scroll">
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
              className="border rounded-md w-[240px] aspect-[9/16] h-full object-cover"
            />
          </div>
        </div>

        {/* Duckzill 아이돌 팬 정보 큐레이션 서비스 */}
        <div>
          <h3 className="text-lg font-semibold">
            Duckzill 아이돌 팬 정보 큐레이션 서비스
          </h3>
          <p className="text-muted-foreground">
            팬 이벤트와 광고를 한 곳에 모아 큐레이션하는 서비스를 Next.js와
            Node.js로 개발. SEO 구성 및 트위터 크롤링 프로그램 개발.
          </p>
          <div className="flex items-center gap-4 text-muted-foreground overflow-scroll">
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
        <div>
          <h3 className="text-lg font-semibold">Duckzill Shop</h3>
          <p className="text-muted-foreground">
            Shopify와 고도몰 기반의 이커머스를 제작 및 커스터마이징. Spring
            Boot와 Notion 연동 정산 프로세스 개발.
          </p>
          <div className="flex items-center gap-4 text-muted-foreground overflow-scroll">
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

        {/* Duckzill NFT Project */}
        <div>
          <h3 className="text-lg font-semibold">Duckzill NFT Project</h3>
          <p className="text-muted-foreground">
            클레이튼 기반의 NFT 드랍 및 이벤트 서비스를 개발. Auto Scaling 및
            무중단 배포 환경 구축.
          </p>
          <div className="flex items-center gap-4 text-muted-foreground overflow-scroll">
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
        <div>
          <h3 className="text-lg font-semibold">NFT AirDrop Event</h3>
          <p className="text-muted-foreground">
            Polygon 기반 NFT Airdrop 이벤트 개발. Opensea와 협업하여
            프론트엔드와 컨트렉트 제작.
          </p>
          <div className="flex items-center gap-4 text-muted-foreground overflow-scroll">
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
        <div>
          <h3 className="text-lg font-semibold">Festa for Army</h3>
          <p className="text-muted-foreground">
            부산 이벤트 맵 서비스 개발. Next.js와 AWS Lambda를 활용하여
            프론트엔드 및 백엔드 구성.
          </p>
          <div className="flex items-center gap-4 text-muted-foreground overflow-scroll">
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
          </div>
        </div>

        {/* Frame Layout Service */}
        <div>
          <h3 className="text-lg font-semibold">액자 배치도 서비스</h3>
          <p className="text-muted-foreground">
            자동 정렬, PDF 및 이미지 Export 기능을 제공하는 백오피스 서비스.
          </p>
          <div className="flex items-center gap-4 text-muted-foreground overflow-scroll">
            <img
              src="./images/about/backoffice_frame_layout/1.png"
              alt="Frame Layout"
              className="border rounded-md w-[240px] aspect-[9/16] h-full object-cover"
            />
          </div>
        </div>

        {/* Short URL Service */}
        <div>
          <h3 className="text-lg font-semibold">단축 URL 서비스</h3>
          <p className="text-muted-foreground">
            Monorepo 기반 단축 URL 관리 서비스. 메타데이터 수집 및 분석 기능
            포함.
          </p>
          <div className="flex items-center gap-4 text-muted-foreground overflow-scroll">
            <img
              src="./images/about/backoffice_url/1.png"
              alt="Short URL"
              className="border rounded-md w-[240px] aspect-[9/16] h-full object-cover"
            />
            <img
              src="./images/about/backoffice_url/2.png"
              alt="Short URL"
              className="border rounded-md w-[240px] aspect-[9/16] h-full object-cover"
            />
          </div>
        </div>

        {/* Thumbnail Generator */}
        <div>
          <h3 className="text-lg font-semibold">액자 판매 썸네일 생성기</h3>
          <p className="text-muted-foreground">
            디자이너 리소스를 절약하기 위해 썸네일 자동 생성기를 개발.
          </p>
          <div className="flex items-center gap-4 text-muted-foreground overflow-scroll">
            <img
              src="./images/about/backoffice_frame_checkerboard/1.png"
              alt="Thumbnail Generator"
              className="border rounded-md w-[240px] aspect-[9/16] h-full object-cover"
            />
            <img
              src="./images/about/backoffice_frame_checkerboard/2.png"
              alt="Thumbnail Generator"
              className="border rounded-md w-[240px] aspect-[9/16] h-full object-cover"
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
