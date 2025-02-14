import Link from "next/link";

const Work = () => {
  return (
    <div id="work" className="pt-12">
      <div className="font-pretendardBold text-4xl font-bold text-[#628B35]">
        Work Experience
      </div>
      <div className="pt-4">
        <Link
          className="text-2xl font-bold text-[#7a9b57] underline"
          href="/work/sauceclip-admin"
        >
          [모비두] 소스클립 관리자 페이지
        </Link>
        <div className="border-b border-gray-950/5 py-3 dark:border-white/10">
          <div className="font-bold">프로젝트 기간</div>
          <div>2023.11~2024-07</div>
        </div>
        <div className="border-b border-gray-950/5 py-3 dark:border-white/10">
          <div className="font-bold">기술 스택</div>
          <div>
            TypeScript, React, styled-components, SCSS, React-Query, Recoil,
            Axios, ECharts, Antd
          </div>
        </div>
        <div className="border-b border-gray-950/5 py-3 dark:border-white/10">
          <div className="font-bold">구현 기능</div>
          <ul className="list-inside list-disc">
            <li>소스클립 관리자 서비스 화면 개발</li>
            <li>빠른 화면 구축을 위한 디자인 시스템 도입</li>
          </ul>
        </div>
      </div>
      <div className="pt-8">
        <Link
          className="text-2xl font-bold text-[#7a9b57] underline"
          href="/work/sauceclip-player"
        >
          [모비두] 소스클립 플레이어
        </Link>
        <div className="border-b border-gray-950/5 py-3 dark:border-white/10">
          <div className="font-bold">프로젝트 기간</div>
          <div>2023.07~2024-07</div>
        </div>
        <div className="border-b border-gray-950/5 py-3 dark:border-white/10">
          <div className="font-bold">기술 스택</div>
          <div>TypeScript, React, styled-components, Redux, Axios, Swiper</div>
        </div>
        <div className="border-b border-gray-950/5 py-3 dark:border-white/10">
          <div className="font-bold">구현 기능</div>
          <ul className="list-inside list-disc">
            <li>
              PC, 모바일, 하이브리드앱 환경에서 제공하는 쇼퍼블 숏폼 반응형
              플레이어 서비스 화면 개발
            </li>
            <li>
              코드 사용성과 가독성 개선을 위한 코드 컨벤션 도입 및 리팩토링
            </li>
          </ul>
        </div>
      </div>
      <div className="pt-8">
        <Link
          className="text-2xl font-bold text-[#7a9b57] underline"
          href="/work/saucelive-liveconsole"
        >
          [모비두] 소스라이브 라이브콘솔&프롬프터
        </Link>
        <div className="border-b border-gray-950/5 py-3 dark:border-white/10">
          <div className="font-bold">프로젝트 기간</div>
          <div>2023.01~2023.06</div>
        </div>
        <div className="border-b border-gray-950/5 py-3 dark:border-white/10">
          <div className="font-bold">기술 스택</div>
          <div>
            TypeScript, React, Sass, Redux, Redux-Saga, Axios, React-Quill
          </div>
        </div>
        <div className="border-b border-gray-950/5 py-3 dark:border-white/10">
          <div className="font-bold">구현 기능</div>
          <ul className="list-inside list-disc">
            <li>
              라이브 커머스 매니저 및 관리자를 위한 라이브콘솔&프롬프터 서비스
              화면 개발 및 운영
            </li>
          </ul>
        </div>
      </div>
      <div className="pt-8">
        <Link
          className="text-2xl font-bold text-[#7a9b57] underline"
          href="/work/saucelive-player"
        >
          [모비두] 소스라이브 플레이어
        </Link>
        <div className="border-b border-gray-950/5 py-3 dark:border-white/10">
          <div className="font-bold">프로젝트 기간</div>
          <div>2022.03~2023.06</div>
        </div>
        <div className="border-b border-gray-950/5 py-3 dark:border-white/10">
          <div className="font-bold">기술 스택</div>
          <div>TypeScript, React, Sass, Redux, Redux-Saga, Axios</div>
        </div>
        <div className="border-b border-gray-950/5 py-3 dark:border-white/10">
          <div className="font-bold">구현 기능</div>
          <ul className="list-inside list-disc">
            <li>
              PC, 모바일, 하이브리드앱 환경에서 제공하는 반응형 플레이어 서비스
              운영 및 이슈 대응
            </li>
            <li>
              디자인팀과 협업하여 디자인 시스템 도입을 통한 플레이어 전반적인
              UI/UX 개선
            </li>
            <li>팀내 개발 문화 구축을 위하여 코드 컨벤션 및 코드 리뷰 도입</li>
            <li>공통 컴포넌트 개발로 코드 재사용성 및 개발 효율성 개선</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Work;
