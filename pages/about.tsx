import styled from '@emotion/styled';
import React from 'react';

const Container = styled.div`
    width: 100%;
    font-weight: 300;
    word-wrap: break-word;
    word-break: keep-all;
    line-height: 1.8;

    & a {
        color: #007bff;
        text-decoration: none;
        background-color: transparent;
    }
    & .blue {
        color: #3c78d8;
    }

    & .gray {
        color: gray;
    }

    & .profile-img {
        max-height: 160px;
    }

    & li.example_img {
        margin-top: 15px;
        display: flex;
        gap: 10px;
    }
    & li img {
        width: auto;
        height: 300px;
        border-radius: 5px;
        border: 1px solid #e0e0e0;
        box-shadow: 5px 5px 5px #e0e0e0;
    }

    & .col-12 {
        flex: 0 0 100%;
        max-width: 100%;
    }

    .badge {
        display: inline-block;
        padding: 0.25em 0.4em;
        font-size: 75%;
        font-weight: 700;
        line-height: 1;
        text-align: center;
        white-space: nowrap;
        vertical-align: baseline;
        border-radius: 0.25rem;
        margin-right: 5px;
    }

    .badge-pill {
        padding-right: 0.6em;
        padding-left: 0.6em;
        border-radius: 10rem;
    }

    .badge-primary {
        color: #fff;
        background-color: #007bff;
    }

    .badge-info {
        color: #fff;
        background-color: #17a2b8;
    }

    .badge-secondary {
        color: #fff;
        background-color: #868e96;
    }

    .badge-light {
        color: #111;
        background-color: #f8f9fa;
    }

    hr {
        margin: 25px 0 40px;
    }

    h2 {
        margin: 20px 0;
    }
`;

const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Col = styled.div`
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
`;

const StyledMyName = styled.div`
    ${(props) => props.theme.mq.mobile} {
        text-align: center;
    }
    width: 100%;
`;

const StyledSimpleItem = styled.div`
    display: flex;
    gap: 15px;
    align-items: center;
    margin: 15px 0;
`;
const StyledSimpleItemWrap = styled.div``;

const Tooltip = styled.small<{ title: string }>`
    & {
        font-size: 15px;
        margin-left: 5px;
    }
    & :hover {
        position: relative;
    }

    & :hover::after {
        content: '${({ title }) => title}';

        white-space: pre;
        position: absolute;
        bottom: 100%;
        left: 0;

        background-color: rgba(0, 0, 0, 0.8);
        color: #ffffff;
        font-size: 12px;

        z-index: 9999;

        padding: 20px;
        min-width: 200px;
        width: 100%;
        border-radius: 8px;
    }
`;

const SkillWrap = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-left: 15px;

    & h4 {
        margin: 10px 0;
        font-size: 18px;
    }

    & ul.non-badge li::before {
        content: '○';
        font-size: 13px;
        padding-right: 1em;
        padding-left: 0.2em;
    }
`;

const Date = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    & h4 {
        margin: 0;
    }
`;
const ContentWrap = styled.div``;
const Content = styled.div`
    & ul {
        padding-left: 20px;
        li {
            margin: 5px 0;
        }
        div {
            margin: 5px;
        }
    }
`;
const Title = styled.div`
    font-size: 18px;
    font-weight: bold;
`;
const SubTitle = styled.div`
    font-size: 15px;
`;

const About = () => {
    return (
        <>
            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            />
            <Container>
                <Row>
                    <Col>
                        <Row>
                            <StyledMyName>
                                <h1 className="black">구 영 서</h1>
                            </StyledMyName>
                        </Row>
                        <Row>
                            <StyledSimpleItemWrap>
                                <StyledSimpleItem>
                                    <i
                                        className="fa fa-envelope"
                                        aria-hidden="true"></i>
                                    <a
                                        href="mailto:koo@duckzill.co"
                                        target="_blank"
                                        rel="noreferrer">
                                        koo@duckzill.com
                                    </a>
                                </StyledSimpleItem>
                                <StyledSimpleItem>
                                    <i
                                        className="fa fa-phone"
                                        aria-hidden="true"></i>
                                    <span className="badge badge-light">
                                        010-8832-4207
                                    </span>
                                </StyledSimpleItem>
                                <StyledSimpleItem>
                                    <i
                                        className="fa fa-github"
                                        aria-hidden="true"></i>
                                    <a
                                        href="https://github.com/KooYS"
                                        target="_blank"
                                        rel="noreferrer">
                                        https://github.com/KooYS
                                    </a>
                                </StyledSimpleItem>
                            </StyledSimpleItemWrap>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Row>
                            <h2>
                                <span className="blue">SKILLS</span>
                                <Tooltip
                                    title={
                                        '1: 구체적으로는 잘 모르지만, 기본적인 지식과 경험은 가지고 있음 \\A 2: 사이드 프로젝트 수준의 개발이 가능 \\A 3: Production 수준의 개발이 가능'
                                    }>
                                    <i
                                        className="fa fa-question-circle"
                                        aria-hidden="true"></i>
                                </Tooltip>
                            </h2>
                        </Row>
                        <SkillWrap>
                            <h4 className="gray">Back-end</h4>
                            <ul>
                                <li>
                                    <span className="badge badge-pill badge-primary">
                                        3
                                    </span>
                                    Node
                                </li>
                                <li>
                                    <span className="badge badge-pill badge-primary">
                                        3
                                    </span>
                                    Nest.js
                                </li>
                                <li>
                                    <span className="badge badge-pill badge-primary">
                                        3
                                    </span>
                                    Express.js
                                </li>
                                <li>
                                    <span className="badge badge-pill badge-primary">
                                        3
                                    </span>
                                    Typeorm
                                </li>
                            </ul>
                        </SkillWrap>
                        <hr />
                        <SkillWrap>
                            <h4 className="gray">DevOps</h4>
                            <ul>
                                <li>
                                    <span className="badge badge-pill badge-primary">
                                        3
                                    </span>
                                    AWS - EC2, S3, RDS, CloudFront, Route53,
                                    CodeBuild, CodePipeline CodeDeploy
                                </li>
                                <li>
                                    <span className="badge badge-pill badge-info">
                                        2
                                    </span>
                                    AWS - ELB, Lambda, Beanstalk, ElastiCache
                                </li>
                                <li>
                                    <span className="badge badge-pill badge-info">
                                        2
                                    </span>
                                    Docker
                                </li>
                                <li>
                                    <span className="badge badge-pill badge-info">
                                        2
                                    </span>
                                    nginx
                                </li>
                            </ul>
                        </SkillWrap>
                        <hr />
                        <SkillWrap>
                            <h4 className="gray">Database</h4>
                            <ul>
                                <li>
                                    <span className="badge badge-pill badge-primary">
                                        3
                                    </span>
                                    MySql
                                </li>
                                <li>
                                    <span className="badge badge-pill badge-info">
                                        2
                                    </span>
                                    PostgreSQL
                                </li>
                            </ul>
                        </SkillWrap>
                        <hr />
                        <SkillWrap>
                            <h4 className="gray">Front-end</h4>
                            <ul>
                                <li>
                                    <span className="badge badge-pill badge-info">
                                        2
                                    </span>
                                    React.js
                                </li>
                                <li>
                                    <span className="badge badge-pill badge-info">
                                        2
                                    </span>
                                    Eslint
                                </li>
                                <li>
                                    <span className="badge badge-pill badge-info">
                                        2
                                    </span>
                                    Husky
                                </li>
                                <li>
                                    <span className="badge badge-pill badge-info">
                                        2
                                    </span>
                                    Prettier
                                </li>
                                <li>
                                    <span className="badge badge-pill badge-secondary">
                                        1
                                    </span>
                                    React-query
                                </li>
                                <li>
                                    <span className="badge badge-pill badge-primary">
                                        3
                                    </span>
                                    HTML/CSS/JS
                                </li>
                                <li>
                                    <span className="badge badge-pill badge-info">
                                        2
                                    </span>
                                    Next.js
                                </li>
                                <li>
                                    <span className="badge badge-pill badge-info">
                                        2
                                    </span>
                                    Recoil
                                </li>
                                <li>
                                    <span className="badge badge-pill badge-info">
                                        2
                                    </span>
                                    Typescript
                                </li>
                                <li>
                                    <span className="badge badge-pill badge-info">
                                        2
                                    </span>
                                    Emotion.js
                                </li>
                                <li>
                                    <span className="badge badge-pill badge-secondary">
                                        1
                                    </span>
                                    Mobx
                                </li>
                            </ul>
                        </SkillWrap>
                        <hr />
                        <SkillWrap>
                            <h4 className="gray">Etc</h4>
                            <ul>
                                <li>
                                    <span className="badge badge-pill badge-info">
                                        2
                                    </span>
                                    Docker
                                </li>
                                <li>
                                    <span className="badge badge-pill badge-primary">
                                        3
                                    </span>
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
                        </SkillWrap>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Row>
                            <h2>
                                <span className="blue">EDUCATION</span>
                            </h2>
                        </Row>
                        <ContentWrap>
                            <Date>
                                <h4 className="gray">2013. 03 ~ 2020. 02</h4>
                            </Date>
                            <Content>
                                <Title>중앙대학교 졸업</Title>
                                <SubTitle>컴퓨터공학부</SubTitle>
                            </Content>
                        </ContentWrap>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Row>
                            <h2>
                                <span className="blue">EXPERIENCE</span>
                            </h2>
                        </Row>
                        <div className="row">
                            <ContentWrap>
                                <Date>
                                    <h4 className="gray">
                                        2017. 07 ~ 2017. 09
                                    </h4>
                                    <span className="badge badge-info">
                                        3개월
                                    </span>
                                </Date>
                                <Content>
                                    <Title>중앙일보</Title>
                                    <SubTitle>인턴 개발</SubTitle>
                                    <ul>
                                        <li>편집부의 기사를 Gamification</li>
                                        <li>
                                            편집부와 개발부의 브릿지 작업 담당
                                        </li>
                                        <li>
                                            <strong>Skill Keywords</strong>
                                        </li>
                                        <div>
                                            <span className="badge badge-secondary">
                                                HTML,CSS
                                            </span>
                                            <span className="badge badge-secondary">
                                                D3.js
                                            </span>
                                            <span className="badge badge-secondary">
                                                JS
                                            </span>
                                        </div>
                                    </ul>
                                </Content>
                            </ContentWrap>
                            <hr />
                            <div className="row">
                                <div className="col-md-3 col-12 text-md-right">
                                    <div className="row">
                                        <div className="col-md-12 col">
                                            <h4 className="gray">
                                                2018. 01 ~ 2018. 06
                                                <br />
                                            </h4>
                                        </div>
                                        <div className="col-md-12 col-3 text-center text-md-right">
                                            <span className="badge badge-info">
                                                6개월
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-9 col-12">
                                    <h4>비버소프트</h4>
                                    <i className="gray">사원</i>
                                    <ul className="pt-3">
                                        <li>
                                            하이치과 백엔드 및 하이브리드앱
                                            서비스 제작(웹뷰 - ios, android)
                                        </li>
                                        <li>
                                            주베베 백엔드 및 하이브리드앱 서비스
                                            제작(웹뷰 - ios, android)
                                        </li>
                                        <li>
                                            <strong>Skill Keywords</strong>
                                        </li>
                                        <div>
                                            <span className="badge badge-secondary">
                                                PHP
                                            </span>
                                            <span className="badge badge-secondary">
                                                HTML,CSS
                                            </span>
                                            <span className="badge badge-secondary">
                                                JQuery
                                            </span>
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
                            <div className="row">
                                <div className="col-md-3 col-12 text-md-right">
                                    <div className="row">
                                        <div className="col-md-12 col">
                                            <h4 className="gray">
                                                2018. 06 ~ 현재
                                                <br />
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-9 col-12">
                                    <h4>AMP</h4>
                                    <i className="gray">공동창업자</i>
                                    <ul className="pt-3">
                                        <li>쿠폰빌 서비스 제작</li>
                                        <li>
                                            덕질 아이돌 팬 정보 큐레이션 서비스
                                            제작
                                        </li>
                                        <li>
                                            덕질 이커머스 서비스 제작(고도몰
                                            기반)
                                        </li>
                                        <li>
                                            덕질 리뉴얼 이커머스 서비스 제작 중
                                        </li>
                                        <li>덕질 NFT 서비스 제작 중</li>
                                        <li>
                                            <strong>Skill Keywords</strong>
                                        </li>
                                        <div>
                                            <span className="badge badge-secondary">
                                                HTML,CSS,JS
                                            </span>
                                            <span className="badge badge-secondary">
                                                React
                                            </span>
                                            <span className="badge badge-secondary">
                                                Next.js
                                            </span>
                                            <span className="badge badge-secondary">
                                                Node
                                            </span>
                                            <span className="badge badge-secondary">
                                                Nest.js
                                            </span>
                                            <span className="badge badge-secondary">
                                                AWS
                                            </span>
                                            <span className="badge badge-secondary">
                                                PHP
                                            </span>
                                            <span className="badge badge-secondary">
                                                JQuery
                                            </span>
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
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Row>
                            <h2>
                                <span className="blue">PROJECTS</span>
                            </h2>
                        </Row>
                        <div className="row">
                            <div className="col">
                                <div className="row">
                                    <div className="col-md-3 col-12 text-md-right">
                                        <h4 className="gray">
                                            2018. 06 ~ 2018. 12
                                        </h4>
                                    </div>
                                    <div className="col-md-9 col-12">
                                        <h4>테마 기반 맛집 큐레이션 서비스</h4>
                                        <i className="gray">쿠폰빌</i>
                                        <ul className="pt-3">
                                            <li>
                                                PHP를 이용하여 서비스 구성 -
                                                CodeIgniter(MVC 패턴)
                                            </li>
                                            <li>
                                                기본 CodeIgniter 템플릿을
                                                이용하여 SSR 처리
                                            </li>
                                            <li>
                                                웹뷰를 통하여 Web 베이스의
                                                Android, Ios의 하이브리드 패키징
                                                작업
                                            </li>
                                            <li>
                                                User App, Client, Admin 3가지
                                                파트로 구성
                                            </li>
                                            <li>
                                                Python을 이용하여 리뷰 분석기
                                                개발
                                            </li>
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
                                <div className="row">
                                    <div className="col-md-3 col-12 text-md-right">
                                        <h4 className="gray">
                                            2019. 01 ~ 2019. 07
                                        </h4>
                                    </div>
                                    <div className="col-md-9 col-12">
                                        <h4>
                                            Duckzill 아이돌 팬 정보 큐레이션
                                            서비스
                                        </h4>
                                        <i className="gray">AMP</i>
                                        <ul className="pt-3">
                                            <li>
                                                팬들이 주최하는 이벤트,
                                                지하철광고 등 이벤트를 한 곳으로
                                                모아 큐레이팅 해주는 서비스
                                            </li>
                                            <li>
                                                <strong>FrontEnd</strong>
                                                <ul>
                                                    Nextjs, Apollo, GraphQL,
                                                    React, Mobx
                                                </ul>
                                            </li>
                                            <li>
                                                <strong>Backend</strong>
                                                <ul>node, express</ul>
                                            </li>
                                            <li>
                                                <strong>CI/CD</strong>
                                                <ul>Jenkins</ul>
                                            </li>
                                            <li>
                                                <strong>ETC</strong>
                                                <ul>
                                                    <li>
                                                        트위터에서 이벤트를
                                                        크롤링해주는 마케터 전용
                                                        프로그램 개발
                                                    </li>
                                                    <li>SEO 구성</li>
                                                    <li>
                                                        Active User 53만, 해외
                                                        이용자 6만, SNS 콘텐츠
                                                        노출 수 1,525만
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="example_img">
                                                <img
                                                    src="./images/about/duckzill/1.png"
                                                    alt="duckzill"
                                                />
                                                <img
                                                    src="./images/about/duckzill/2.png"
                                                    alt="duckzill"
                                                />
                                                <img
                                                    src="./images/about/duckzill/3.png"
                                                    alt="duckzill"
                                                />
                                                <img
                                                    src="./images/about/duckzill/4.png"
                                                    alt="duckzill"
                                                />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-md-3 col-12 text-md-right">
                                        <h4 className="gray">
                                            2019. 07 ~ 현재
                                        </h4>
                                    </div>
                                    <div className="col-md-9 col-12">
                                        <h4>Duckzill Shop 서비스</h4>
                                        <i className="gray">AMP</i>
                                        <ul className="pt-3">
                                            <li>
                                                <strong>
                                                    <a
                                                        href="https://shop.duckzill.com/"
                                                        target="_blank"
                                                        rel="noreferrer">
                                                        https://shop.duckzill.com
                                                    </a>
                                                </strong>
                                            </li>
                                            <li>
                                                Shopify 기반의 이커머스 제작
                                            </li>
                                            <li>
                                                고도몰 기반의 오픈형 이커머스
                                                2차 제작
                                            </li>
                                            <li>
                                                고도몰 관리자, 공급사, 유저
                                                페이지 커스텀 작업
                                            </li>
                                            <li>입점 프로세스 추가</li>
                                            <li>
                                                Notion과 공급사 정산 프로세스
                                                연동 - 간편 정산 기능 추가
                                            </li>
                                            <li>수요조사 및 입금폼 추가</li>
                                            <li>
                                                Spring boot를 이용하여 Event,
                                                Store, User Api 개발
                                            </li>
                                            <li>
                                                외부 데이터 핸들링 백오피스 개발
                                            </li>
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
                                <div className="row">
                                    <div className="col-md-3 col-12 text-md-right">
                                        <h4 className="gray">
                                            2020. 12 ~ 현재
                                        </h4>
                                    </div>
                                    <div className="col-md-9 col-12">
                                        <h4>Duckzill NFT Project - Backend</h4>
                                        <i className="gray">AMP</i>
                                        <ul className="pt-3">
                                            <li>
                                                클레이튼 기반의 NFT 드랍 온,
                                                오프라인 이벤트
                                            </li>
                                            <li>
                                                <strong>Backend</strong>
                                                <ul>
                                                    <li>
                                                        서버 프레임워크는
                                                        Nest.js + Typescript
                                                        사용
                                                    </li>
                                                    <li>
                                                        개발 서버는 AWS
                                                        CodePipeline, CodeBuild,
                                                        CodeDeploy 사용
                                                    </li>
                                                    <li>
                                                        운영 서버는 AWS
                                                        Beanstalk + ECR + Git
                                                        Action을 이용한 Docker
                                                        기반으로 무중단
                                                        배포(Auto scaling,
                                                        Immutable 배포)
                                                    </li>
                                                    <li>
                                                        ElastiCache를 이용한
                                                        in-memory 기반 session
                                                        인증 사용
                                                    </li>
                                                    <li>
                                                        Klaytn API Service 와
                                                        Klip app2app api 사용
                                                    </li>
                                                    <li>
                                                        이벤트 당첨 알고리즘
                                                        추가(응모시간 기반)
                                                    </li>
                                                    <li>
                                                        이미지 최적화(On-demand
                                                        resizing) 적용
                                                    </li>
                                                    <li>
                                                        husky, eslint, prettier
                                                        적용
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <strong>ETC</strong>
                                                <ul>
                                                    <li>
                                                        Slack, Linear, Github,
                                                        Postman, Figma
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-md-3 col-12 text-md-right">
                                        <h4 className="gray">
                                            2020. 12 ~ 현재
                                        </h4>
                                    </div>
                                    <div className="col-md-9 col-12">
                                        <h4>Duckzill Shop 리뉴얼 서비스</h4>
                                        <i className="gray">AMP</i>
                                        <ul className="pt-3">
                                            <li>
                                                솔루션 의존도를 없애고 확장성을
                                                고려한 자체 이커머스 개발 중
                                            </li>
                                            <li>프로젝트 총괄</li>
                                            <li>
                                                <strong>Backend</strong>
                                                <ul>
                                                    <li>
                                                        서버 프레임워크는 node를
                                                        사용
                                                    </li>
                                                    <li>
                                                        개발 서버는 AWS
                                                        CodePipeline, CodeBuild,
                                                        CodeDeploy 사용
                                                    </li>
                                                    <li>
                                                        jwt 기반 토큰 인증 사용
                                                    </li>
                                                    <li>
                                                        husky, eslint, prettier
                                                        적용
                                                    </li>
                                                    <li>
                                                        셀러와 메인어드민은
                                                        Next.js의 API Routes
                                                        사용
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <strong>Frontend</strong>
                                                <ul>
                                                    <li>
                                                        Next.js와 Emotion,
                                                        Redux를 사용
                                                    </li>
                                                    <li>
                                                        개발 서버는 AWS
                                                        CodePipeline, CodeBuild,
                                                        CodeDeploy 사용
                                                    </li>
                                                    <li>
                                                        husky, eslint, prettier
                                                        적용
                                                    </li>
                                                    <li>
                                                        셀러와 메인어드민 또한
                                                        Next.js로 구성
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <strong>ETC</strong>
                                                <ul>
                                                    <li>
                                                        Slack, Linear, Github,
                                                        Swagger, Zeplin
                                                    </li>
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
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Row>
                            <h2>
                                <span className="blue">ETC</span>
                            </h2>
                        </Row>
                        <div className="row">
                            <div className="col">
                                <div className="row">
                                    <div className="col-md-3 col-12 text-md-right">
                                        <h4 className="gray">
                                            2022. 01 ~ 현재
                                        </h4>
                                    </div>
                                    <div className="col-md-9 col-12">
                                        <h4>기술 블로그 운영</h4>
                                        <i className="gray">개인 블로그</i>
                                        <ul className="pt-3">
                                            <li>
                                                <a
                                                    href="https://0seo.tistory.com/"
                                                    target="_blank"
                                                    rel="noreferrer">
                                                    https://0seo.tistory.com
                                                </a>
                                            </li>
                                            <li>
                                                22년 초부터 취미로 기술 블로그
                                                운영
                                            </li>
                                            <li>
                                                사이드 프로젝트 및 개발에
                                                사용하는 프로세스 기록할 예정
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default About;
