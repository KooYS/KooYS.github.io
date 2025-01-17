import React from "react";

const Page = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <div>
        <div>
          <div>
            <div>
              <div>
                <h1 className="black">구 영 서</h1>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  <a
                    href="mailto:koo@duckzill.co"
                    target="_blank"
                    rel="noreferrer"
                  >
                    koo@duckzill.com
                  </a>
                </div>
                <div>
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <span className="badge badge-light">010-8832-4207</span>
                </div>
                <div>
                  <i className="fa fa-github" aria-hidden="true"></i>
                  <a
                    href="https://github.com/KooYS"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://github.com/KooYS
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>
              <h2>
                <span className="blue">SKILLS</span>
                <div
                  title={
                    "1: 구체적으로는 잘 모르지만, 기본적인 지식과 경험은 가지고 있음 \\A 2: 사이드 프로젝트 수준의 개발이 가능 \\A 3: Production 수준의 개발이 가능"
                  }
                >
                  <i className="fa fa-question-circle" aria-hidden="true"></i>
                </div>
              </h2>
            </div>
            <div>
              <h4 className="gray">Back-end</h4>
              <ul>
                <li>
                  <span className="badge badge-pill badge-primary">3</span>
                  Node
                </li>
                <li>
                  <span className="badge badge-pill badge-primary">3</span>
                  Nest.js
                </li>
                <li>
                  <span className="badge badge-pill badge-primary">3</span>
                  Express.js
                </li>
                <li>
                  <span className="badge badge-pill badge-info">2</span>
                  Typeorm, Prisma
                </li>
                <li>
                  <span className="badge badge-pill badge-info">2</span>
                  GraphQL
                </li>
                <li>
                  <span className="badge badge-pill badge-secondary">1</span>
                  Spring Boot
                </li>
              </ul>
            </div>
            <hr />
            <div>
              <h4 className="gray">DevOps</h4>
              <ul>
                <li>
                  <span className="badge badge-pill badge-primary">3</span>
                  AWS - EC2, S3, RDS, CloudFront,Lambda, Route53, CodeBuild,
                  CodePipeline CodeDeploy
                </li>
                <li>
                  <span className="badge badge-pill badge-primary">3</span>
                  GCP - CE, Cloud Functions, APP Engine, SQL
                </li>
                <li>
                  <span className="badge badge-pill badge-info">2</span>
                  AWS - ELB, Beanstalk, ElastiCache, DynamoDB
                </li>
                <li>
                  <span className="badge badge-pill badge-info">2</span>
                  Docker
                </li>
                <li>
                  <span className="badge badge-pill badge-info">2</span>
                  Nginx
                </li>
                <li>
                  <span className="badge badge-pill badge-info">2</span>
                  Redis
                </li>
              </ul>
            </div>
            <hr />
            <div>
              <h4 className="gray">Database</h4>
              <ul>
                <li>
                  <span className="badge badge-pill badge-primary">3</span>
                  MySql
                </li>
                <li>
                  <span className="badge badge-pill badge-info">2</span>
                  PostgreSQL
                </li>
                <li>
                  <span className="badge badge-pill badge-info">2</span>
                  MongoDB
                </li>
              </ul>
            </div>
            <hr />
            <div>
              <h4 className="gray">Front-end</h4>
              <ul>
                <li>
                  <span className="badge badge-pill badge-primary">3</span>
                  HTML/CSS/JS
                </li>
                <li>
                  <span className="badge badge-pill badge-primary">3</span>
                  React.js
                </li>
                <li>
                  <span className="badge badge-pill badge-primary">3</span>
                  Next.js
                </li>
                <li>
                  <span className="badge badge-pill badge-info">2</span>
                  Eslint/Husky/Prettier
                </li>
                <li>
                  <span className="badge badge-pill badge-info">2</span>
                  React-query
                </li>
                <li>
                  <span className="badge badge-pill badge-primary">3</span>
                  SWR
                </li>
                <li>
                  <span className="badge badge-pill badge-info">2</span>
                  Recoil
                </li>
                <li>
                  <span className="badge badge-pill badge-primary">3</span>
                  Typescript
                </li>
                <li>
                  <span className="badge badge-pill badge-primary">3</span>
                  Emotion.js
                </li>
                <li>
                  <span className="badge badge-pill badge-info">2</span>
                  Tailwind CSS
                </li>
                <li>
                  <span className="badge badge-pill badge-primary">3</span>
                  MUI
                </li>
                <li>
                  <span className="badge badge-pill badge-secondary">1</span>
                  Mobx
                </li>
                <li>
                  <span className="badge badge-pill badge-info">2</span>
                  Storybook
                </li>
                <li>
                  <span className="badge badge-pill badge-info">2</span>
                  Cypress
                </li>
              </ul>
            </div>
            <hr />
            <div>
              <h4 className="gray">Etc</h4>
              <ul>
                <li>
                  <span className="badge badge-pill badge-info">2</span>
                  Prompt Engineering
                </li>
                <li>
                  <span className="badge badge-pill badge-info">2</span>
                  Python
                </li>
                <li>
                  <span className="badge badge-pill badge-info">2</span>
                  NX(Monorepos)
                </li>
                <li>
                  <span className="badge badge-pill badge-secondary">1</span>
                  Sentry
                </li>
                <li>
                  <span className="badge badge-pill badge-primary">3</span>
                  Git / Github/ Git Action
                </li>
              </ul>
              <ul className="non-badge">
                <li>Slack</li>
                <li>Figma</li>
                <li>Linear</li>
                <li>Zeplin</li>
                <li>Swagger</li>
                <li>Postman</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>
              <h2>
                <span className="blue">EDUCATION</span>
              </h2>
            </div>
            <div>
              <div>
                <h4 className="gray">2013. 03 ~ 2020. 02</h4>
              </div>
              <div>
                <div>중앙대학교 졸업</div>
                <div>컴퓨터공학부</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>
              <h2>
                <span className="blue">EXPERIENCE</span>
              </h2>
            </div>
            <div className="row">
              <div>
                <div>
                  <h4 className="gray">2017. 07 ~ 2017. 09</h4>
                  <span className="badge badge-info">3개월</span>
                </div>
                <div>
                  <div>중앙일보</div>
                  <div>인턴 개발</div>
                  <ul>
                    <li>편집부의 기사를 Gamification</li>
                    <li>편집부와 개발부의 브릿지 작업 담당</li>
                    <li>
                      <strong>Skill Keywords</strong>
                    </li>
                    <div>
                      <span className="badge badge-secondary">HTML,CSS</span>
                      <span className="badge badge-secondary">D3.js</span>
                      <span className="badge badge-secondary">JS</span>
                    </div>
                  </ul>
                </div>
              </div>
              <hr />
              <div>
                <div>
                  <h4 className="gray">2018. 01 ~ 2018. 06</h4>
                  <span className="badge badge-info">6개월</span>
                </div>
                <div>
                  <div>비버소프트</div>
                  <div>사원</div>
                  <ul>
                    <li>
                      하이치과 백엔드 및 하이브리드앱 서비스 제작(웹뷰 - ios,
                      android)
                    </li>
                    <li>
                      주베베 백엔드 및 하이브리드앱 서비스 제작(웹뷰 - ios,
                      android)
                    </li>
                    <li>
                      <strong>Skill Keywords</strong>
                    </li>
                    <div>
                      <span className="badge badge-secondary">PHP</span>
                      <span className="badge badge-secondary">HTML,CSS</span>
                      <span className="badge badge-secondary">JQuery</span>
                      <span className="badge badge-secondary">
                        Android Framework
                      </span>
                      <span className="badge badge-secondary">
                        Ios Framework
                      </span>
                    </div>
                  </ul>
                </div>
              </div>
              <hr />
              <div>
                <div>
                  <h4 className="gray">
                    2018. 06 ~ 현재
                    <br />
                  </h4>
                </div>
                <div>
                  <div>AMP</div>
                  <div>Co-founder</div>
                  <ul>
                    <li>쿠폰빌 서비스 제작</li>
                    <li>덕질 아이돌 팬 정보 큐레이션 서비스 제작</li>
                    <li>덕질 이커머스 서비스 제작</li>
                    <li>덕질 NFT 서비스 제작</li>
                    <li>
                      회사 백오피스 개발 (데이터 대시보드, 단축 URL, 액자
                      배치도, 메일 시스템, 스케쥴러 등)
                    </li>
                    <li>
                      <strong>Skill Keywords</strong>
                    </li>
                    <div>
                      <span className="badge badge-secondary">HTML,CSS,JS</span>
                      <span className="badge badge-secondary">React</span>
                      <span className="badge badge-secondary">Next.js</span>
                      <span className="badge badge-secondary">Node</span>
                      <span className="badge badge-secondary">Nest.js</span>
                      <span className="badge badge-secondary">AWS</span>
                      <span className="badge badge-secondary">PHP</span>
                      <span className="badge badge-secondary">JQuery</span>
                      <span className="badge badge-secondary">
                        Android Framework
                      </span>
                      <span className="badge badge-secondary">
                        Ios Framework
                      </span>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>
              <h2>
                <span className="blue">PROJECTS</span>
              </h2>
            </div>
            <div className="row">
              <div>
                <div>
                  <h4 className="gray">2018. 06 ~ 2018. 12</h4>
                </div>
                <div>
                  <div>테마 기반 맛집 큐레이션 서비스</div>
                  <div>쿠폰빌</div>
                  <div>프로젝트 1인 개발</div>

                  <ul>
                    <li>PHP를 이용하여 서비스 구성 - CodeIgniter(MVC 패턴)</li>
                    <li>기본 CodeIgniter 템플릿을 이용하여 SSR 처리</li>
                    <li>
                      웹뷰를 통하여 Web 베이스의 Android, Ios의 하이브리드
                      패키징 작업
                    </li>
                    <li>User App, Client, Admin 3가지 파트로 구성</li>
                    <li>Python을 이용하여 리뷰 분석기 개발</li>
                    <li className="example_img">
                      <img
                        src="./images/about/couponvill/1.png"
                        alt="couponvill"
                      />
                      <img
                        src="./images/about/couponvill/2.png"
                        alt="couponvill"
                      />
                      <img
                        src="./images/about/couponvill/3.png"
                        alt="couponvill"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <hr />
              <div>
                <div>
                  <h4 className="gray">2019. 01 ~ 2019. 07</h4>
                </div>
                <div>
                  <div>Duckzill 아이돌 팬 정보 큐레이션 서비스</div>
                  <div>AMP</div>
                  <div>프로젝트 1인 개발</div>

                  <ul>
                    <li>
                      팬들이 주최하는 이벤트, 지하철광고 등 이벤트를 한 곳으로
                      모아 큐레이팅 해주는 서비스
                    </li>
                    <li>
                      <strong>FrontEnd</strong>
                      <ul>
                        <span className="badge badge-secondary">Nextjs</span>
                        <span className="badge badge-secondary">Apollo</span>
                        <span className="badge badge-secondary">GraphQL</span>
                        <span className="badge badge-secondary">React</span>
                        <span className="badge badge-secondary">Mobx</span>
                      </ul>
                    </li>
                    <li>
                      <strong>Backend</strong>
                      <ul>
                        <span className="badge badge-secondary">Node</span>
                        <span className="badge badge-secondary">Express</span>
                      </ul>
                    </li>
                    <li>
                      <strong>CI/CD</strong>
                      <ul>
                        <span className="badge badge-secondary">Jenkins</span>
                      </ul>
                    </li>
                    <li>
                      <strong>ETC</strong>
                      <ul>
                        <li>
                          트위터에서 이벤트를 크롤링해주는 마케터 전용 프로그램
                          개발
                        </li>
                        <li>SEO 구성</li>
                        <li>
                          Active User 53만, 해외 이용자 6만, SNS 콘텐츠 노출 수
                          1,525만
                        </li>
                      </ul>
                    </li>
                    <li className="example_img">
                      <img src="./images/about/duckzill/1.png" alt="duckzill" />
                      <img src="./images/about/duckzill/2.png" alt="duckzill" />
                      <img src="./images/about/duckzill/3.png" alt="duckzill" />
                      <img src="./images/about/duckzill/4.png" alt="duckzill" />
                    </li>
                  </ul>
                </div>
              </div>
              <hr />
              <div>
                <div>
                  <h4 className="gray">2019. 07 ~ 현재</h4>
                </div>
                <div>
                  <div>Duckzill Shop 서비스</div>
                  <div>AMP</div>
                  <div>프로젝트 1인 개발</div>

                  <ul>
                    <li>
                      <strong>
                        <a
                          href="https://shop.duckzill.com/main/index.php"
                          target="_blank"
                          rel="noreferrer"
                        >
                          https://shop.duckzill.com
                        </a>
                      </strong>
                    </li>
                    <li>Shopify 기반의 이커머스 제작</li>
                    <li>고도몰 기반의 오픈형 이커머스 2차 제작</li>
                    <li>고도몰 관리자, 공급사, 유저 페이지 커스텀 작업</li>
                    <li>입점 프로세스 추가</li>
                    <li>
                      Notion과 공급사 정산 프로세스 연동 - 간편 정산 기능 추가
                    </li>
                    <li>수요조사 및 입금폼 추가</li>
                    <li>Spring boot를 이용하여 Event, Store, User Api 개발</li>
                    <li>외부 데이터 핸들링 백오피스 개발</li>
                    <li className="example_img">
                      <img
                        src="./images/about/duckzill_shop/1.jpg"
                        alt="duckzill"
                      />
                      <img
                        src="./images/about/duckzill_shop/2.jpg"
                        alt="duckzill"
                      />
                      <img
                        src="./images/about/duckzill_shop/3.jpg"
                        alt="duckzill"
                      />
                      <img
                        src="./images/about/duckzill_shop/4.jpg"
                        alt="duckzill"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <hr />
              <div>
                <div>
                  <h4 className="gray">2021. 12 ~ 2022. 04</h4>
                </div>
                <div>
                  <div>Duckzill NFT Project - Backend</div>
                  <div>AMP</div>
                  <div>프로젝트 백엔드 파트 개발 및 프로젝트 총괄</div>
                  <ul>
                    <li>클레이튼 기반의 NFT 드랍 온, 오프라인 이벤트</li>
                    <li>
                      <strong>Backend</strong>
                      <ul>
                        <li>서버 프레임워크는 Nest.js + Typescript 사용</li>
                        <li>
                          개발 서버는 AWS CodePipeline, CodeBuild, CodeDeploy
                          사용
                        </li>
                        <li>
                          운영 서버는 AWS Beanstalk + ECR + Git Action을 이용한
                          Docker 기반으로 무중단 배포(Auto scaling, Immutable
                          배포)
                        </li>
                        <li>
                          ElastiCache를 이용한 in-memory 기반 session 인증 사용
                        </li>
                        <li>Klaytn API Service 와 Klip app2app api 사용</li>
                        <li>이벤트 당첨 알고리즘 추가(응모시간 기반)</li>
                        <li>이미지 최적화(On-demand resizing) 적용</li>
                        <li>husky, eslint, prettier 적용</li>
                      </ul>
                    </li>
                    <li>
                      <strong>ETC</strong>
                      <ul>
                        <li>Slack, Linear, Github, Postman, Figma</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <hr />
              <div>
                <div>
                  <h4 className="gray">2020. 12 ~ 2023. 11</h4>
                </div>
                <div>
                  <div>Duckzill Shop 리뉴얼 서비스</div>
                  <div>AMP</div>
                  <div>프로젝트 개발 및 총괄</div>
                  <ul>
                    <li>
                      솔루션 의존도를 없애고 확장성을 고려한 자체 이커머스 개발
                      중
                    </li>
                    <li>
                      <strong>Backend</strong>
                      <ul>
                        <li>서버 프레임워크는 node를 사용</li>
                        <li>
                          개발 서버는 AWS CodePipeline, CodeBuild, CodeDeploy
                          사용
                        </li>
                        <li>jwt 기반 토큰 인증 사용</li>
                        <li>husky, eslint, prettier 적용</li>
                        <li>셀러와 메인어드민은 Next.js의 API Routes 사용</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Frontend</strong>
                      <ul>
                        <li>Next.js와 Emotion, Redux를 사용</li>
                        <li>
                          개발 서버는 AWS CodePipeline, CodeBuild, CodeDeploy
                          사용
                        </li>
                        <li>husky, eslint, prettier 적용</li>
                        <li>셀러와 메인어드민 또한 Next.js로 구성</li>
                      </ul>
                    </li>
                    <li>
                      <strong>ETC</strong>
                      <ul>
                        <li>Slack, Linear, Github, Swagger, Zeplin</li>
                      </ul>
                    </li>
                    <li className="example_img">
                      <img
                        src="./images/about/duckzill_shop2/1.png"
                        alt="duckzill"
                      />
                      <img
                        src="./images/about/duckzill_shop2/2.png"
                        alt="duckzill"
                      />
                      <img
                        src="./images/about/duckzill_shop2/3.png"
                        alt="duckzill"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <hr />
              <div>
                <div>
                  <h4 className="gray">2022. 06 ~ 2022. 07</h4>
                </div>
                <div>
                  <div>NFT AirDrop Event</div>
                  <div>AMP</div>
                  <div>프로젝트 1인 개발 및 LG U+ 협업</div>
                  <ul>
                    <li>
                      Polygon 기반의 NFT Airdrop Event (
                      <a
                        href="https://opensea.io/collection/duckzill"
                        target={"_blank"}
                        rel="noreferrer"
                      >
                        Opensea
                      </a>
                      ) 구성 컨트렉트 개발 및 Front-end, 오프라인 이벤트 기획 및
                      진행
                    </li>
                    <li>
                      LG U+와 협업하여 DIVE에 가상 전시회를 {`'포토카드룸'`}에서
                      열고 해당 프로젝트를 개시
                    </li>
                    <li>
                      <strong>Contract</strong>
                      <ul>
                        <li>openzeppelin/contracts과 hardhat을 사용</li>
                        <li>
                          Event 특성 상 다양한 이슈에 대응 가능한 형태로 개발
                        </li>
                        <li>
                          오프라인에서 진행할 경우 문제에 대비한 Drop Scanner
                          개발
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Frontend</strong>
                      <ul>
                        <li>Next.js(Static HTML Export)</li>
                        <li>emotion, i18next(번역), SEO 및 PWA 구성</li>
                        <li>husky, eslint, prettier 적용</li>
                      </ul>
                    </li>
                    <li>
                      <strong>CI/CD</strong>
                      <ul>
                        <li>Github Action, S3, CloudFront</li>
                      </ul>
                    </li>
                    <li className="example_img">
                      <img src="./images/about/nft/2.gif" alt="duckzill" />
                      <img src="./images/about/nft/1.png" alt="duckzill" />
                      <img src="./images/about/nft/3.jpg" alt="duckzill" />
                    </li>
                  </ul>
                </div>
              </div>
              <hr />
              <div>
                <div>
                  <h4 className="gray">2022. 07 ~ 2022. 08</h4>
                </div>
                <div>
                  <div>NFT AirDrop Event 확장 홀더 이벤트</div>
                  <div>AMP</div>
                  <div>프로젝트 1인 개발</div>
                  <ul>
                    <li>
                      Polygon 기반의 NFT Airdrop Event (
                      <a
                        href="https://opensea.io/collection/duckzill"
                        target={"_blank"}
                        rel="noreferrer"
                      >
                        Opensea
                      </a>
                      ) 에 참여한 홀더들에게 선물을 주는 응모 페이지 개발
                    </li>
                    <li>
                      NFT 특성상 커뮤니티의 영향력이 중요하기 때문에 NFT의
                      문화를 위한 유틸리티 페이지 기획
                    </li>
                    <li>
                      공식 굿즈 선물과 함께 다음에 있을 오프라인 이벤트에 대한
                      재참여를 높히기 위한 장치
                    </li>
                    <li>
                      적은 리소스 대비 효율을 가져가기 위한 모바일 페이지로만
                      구성
                    </li>
                    <li>
                      <strong>Frontend</strong>
                      <ul>
                        <li>Next.js(Static HTML Export)</li>
                        <li>emotion</li>
                        <li>husky, eslint, prettier 적용</li>
                      </ul>
                    </li>
                    <li>
                      <strong>CI/CD</strong>
                      <ul>
                        <li>Github Action, S3, CloudFront</li>
                      </ul>
                    </li>
                    <li className="example_img">
                      <img src="./images/about/nft2/1.png" alt="duckzill" />
                      <img src="./images/about/nft2/2.png" alt="duckzill" />
                      <img src="./images/about/nft2/3.png" alt="duckzill" />
                    </li>
                  </ul>
                </div>
              </div>
              <hr />
              <div>
                <div>
                  <h4 className="gray">2022. 09 ~ 2022. 10</h4>
                </div>
                <div>
                  <div>Festa for Army(부산 이벤트 맵)</div>
                  <div>AMP</div>
                  <div>프로젝트 1인 개발</div>
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li>
                      <strong>Frontend</strong>
                      <ul>
                        <li>Next.js</li>
                        <li>Typescript</li>
                        <li>emotion</li>
                        <li>next-auth</li>
                        <li>msw</li>
                        <li>husky, eslint, prettier 적용</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Backend</strong>
                      <ul>
                        <li>AWS Lambda</li>
                        <li>AWS API Gateway</li>
                      </ul>
                    </li>
                    <li>
                      <strong>CI/CD</strong>
                      <ul>
                        <li>Github Action, Beanstalk, ECR, Docker</li>
                      </ul>
                    </li>
                    <li className="example_img">
                      <img src="./images/about/map/1.gif" alt="duckzill" />
                      <img src="./images/about/map/2.gif" alt="duckzill" />
                      <img src="./images/about/map/3.gif" alt="duckzill" />
                      <img src="./images/about/map/4.png" alt="duckzill" />
                    </li>
                  </ul>
                </div>
              </div>
              <hr />
              <div>
                <div>
                  <h4 className="gray">2022. 11 ~ 2023. 03</h4>
                </div>
                <div>
                  <div>액자 판매 서비스</div>
                  <div>AMP</div>
                  <div>프로젝트 1인 개발</div>
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li>
                      <strong>Frontend</strong>
                      <ul>
                        <li>Next.js</li>
                        <li>Typescript</li>
                        <li>Emotion</li>
                        <li>Mui</li>
                        <li>Zustand</li>
                        <li>husky, eslint, prettier 적용</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Backend</strong>
                      <ul>
                        <li>GCP CE</li>
                        <li>Prisma</li>
                      </ul>
                    </li>
                    <li>
                      <strong>CI/CD</strong>
                      <ul>
                        <li>Github Action, Nginx, Docker</li>
                      </ul>
                    </li>
                    <li>
                      <strong>ETC</strong>
                      <ul>
                        <li>
                          AWS Lambda를 이용한 워터마크, 번역, 결제 및 주문
                          메일링, 결제 시스템
                        </li>
                      </ul>
                    </li>
                    <li className="example_img">
                      <img
                        src="./images/about/frame_tool/1.png"
                        alt="duckzill"
                      />
                      <img
                        src="./images/about/frame_tool/2.png"
                        alt="duckzill"
                      />
                      <img
                        src="./images/about/frame_tool/3.png"
                        alt="duckzill"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <hr />
              <div>
                <div>
                  <h4 className="gray">2022. 04 ~ 2023. 06</h4>
                </div>
                <div>
                  <div>백오피스 - 메일링 서비스</div>
                  <div>AMP</div>
                  <div>프로젝트 1인 개발</div>
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li>
                      <strong>Frontend</strong>
                      <ul>
                        <li>Nextjs 14</li>
                        <li>Typescript</li>
                        <li>Mui</li>
                        <li>SWR</li>
                        <li>Monorepo</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Backend</strong>
                      <ul>
                        <li>Nestjs</li>
                        <li>Typeorm</li>
                        <li>Redis</li>
                        <li>Google API</li>
                      </ul>
                    </li>
                    <li>
                      <strong>CI/CD</strong>
                      <ul>
                        <li>Github Action, Nginx, Docker, GCP</li>
                      </ul>
                    </li>
                    <li>
                      <strong>ETC</strong>
                      <ul>
                        <li>
                          예약작업에 대해 Redis로 분산, Google Sheet을 이용하여
                          반복 작업 기능도 추가
                        </li>
                      </ul>
                    </li>
                    <li className="example_img">
                      <img
                        src="./images/about/backoffice_mail/1.png"
                        alt="duckzill"
                      />
                      <img
                        src="./images/about/backoffice_mail/2.png"
                        alt="duckzill"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <hr />
              <div>
                <div>
                  <h4 className="gray">2022. 06 ~ 2023. 06</h4>
                </div>
                <div>
                  <div>백오피스 - 단축URL 서비스</div>
                  <div>AMP</div>
                  <div>프로젝트 1인 개발</div>
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li>
                      <strong>Frontend</strong>
                      <ul>
                        <li>Nextjs 14</li>
                        <li>Typescript</li>
                        <li>Mui</li>
                        <li>SWR</li>
                        <li>Monorepo</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Backend</strong>
                      <ul>
                        <li>Nestjs</li>
                        <li>Typeorm</li>
                        <li>Redis</li>
                        <li>Google API</li>
                      </ul>
                    </li>
                    <li>
                      <strong>CI/CD</strong>
                      <ul>
                        <li>Github Action, Nginx, Docker, GCP</li>
                      </ul>
                    </li>
                    <li>
                      <strong>ETC</strong>
                      <ul>
                        <li>
                          Monorepo 특성을 이용하여 단축 URL 서버는 따로 분리하여
                          서버 이슈에 대응, 메타데이터 수집
                        </li>
                      </ul>
                    </li>
                    <li className="example_img">
                      <img
                        src="./images/about/backoffice_url/1.png"
                        alt="duckzill"
                      />
                      <img
                        src="./images/about/backoffice_url/2.png"
                        alt="duckzill"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <hr />
              <div>
                <div>
                  <h4 className="gray">2022. 07 ~ 2023. 10</h4>
                </div>
                <div>
                  <div>백오피스 - 액자 배치도</div>
                  <div>AMP</div>
                  <div>프로젝트 1인 개발</div>
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li>
                      <strong>Frontend</strong>
                      <ul>
                        <li>Nextjs 14</li>
                        <li>Typescript</li>
                        <li>Mui</li>
                        <li>SWR</li>
                        <li>Monorepo</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Backend</strong>
                      <ul>
                        <li>Nestjs</li>
                        <li>Typeorm</li>
                        <li>Redis</li>
                        <li>Google API</li>
                      </ul>
                    </li>
                    <li>
                      <strong>CI/CD</strong>
                      <ul>
                        <li>Github Action, Nginx, Docker, GCP</li>
                      </ul>
                    </li>
                    <li>
                      <strong>ETC</strong>
                      <ul>
                        <li>
                          자동정렬, 간격조절, PDF 및 이미지 Export, 저장 및 수정
                          기능
                        </li>
                      </ul>
                    </li>
                    <li className="example_img">
                      <img
                        src="./images/about/backoffice_frame_layout/1.png"
                        alt="duckzill"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <hr />
              <div>
                <div>
                  <h4 className="gray">2022. 10 ~ 2023. 10</h4>
                </div>
                <div>
                  <div>백오피스 - 액자 판매 썸네일 만들기</div>
                  <div>AMP</div>
                  <div>1인 개발</div>
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li>
                      <strong>Frontend & Backend</strong>
                      <ul>
                        <li>Nextjs 14</li>
                        <li>Typescript</li>
                        <li>Mui</li>
                        <li>Monorepo</li>
                        <li>Cloud Function (Python)</li>
                      </ul>
                    </li>
                    <li>
                      <strong>ETC</strong>
                      <ul>
                        <li>
                          액자 바둑판 이미지 썸네일 생성기 (디자이너 리소스
                          절약)
                        </li>
                      </ul>
                    </li>
                    <li className="example_img">
                      <img
                        src="./images/about/backoffice_frame_checkerboard/1.png"
                        alt="duckzill"
                      />
                      <img
                        src="./images/about/backoffice_frame_checkerboard/2.png"
                        alt="duckzill"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>
              <h2>
                <span className="blue">ETC</span>
              </h2>
            </div>
            <div className="row">
              <div>
                <div>
                  <h4 className="gray">2022. 01 ~ 현재</h4>
                </div>
                <div>
                  <div>기술 블로그 개발 및 운영</div>
                  <div>개인 블로그</div>
                  <ul>
                    <li>
                      <a
                        href="https://0seo.tistory.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        https://0seo.tistory.com
                      </a>
                    </li>
                    <li>22년 초부터 취미로 기술 블로그 운영</li>
                    <li>
                      사이드 프로젝트 및 개발에 사용하는 프로세스 기록할 예정
                    </li>
                    <li>
                      <b>
                        현재는 직접 개발을 하여
                        <a
                          href="https://0seo.tistory.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          &nbsp;tistory&nbsp;
                        </a>
                        에서
                        <a
                          href="https://kooys.github.io/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          &nbsp;Github Page&nbsp;
                        </a>
                        으로 이전 준비 중
                      </b>
                    </li>
                  </ul>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
