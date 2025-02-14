import Link from "next/link";

const Project = () => {
  return (
    <div id="project" className="pt-12">
      <div className="font-pretendardBold text-4xl font-bold text-[#628B35]">
        Project Experience
      </div>
      <div className="pt-4">
        <Link
          className="text-2xl font-bold text-[#7a9b57] underline"
          href="/project/hotdealwave"
        >
          Hot Deal Wave
        </Link>
        <div className="border-b border-gray-950/5 py-3 dark:border-white/10">
          <div className="font-bold">프로젝트 기간</div>
          <div>2024.12~2025-01</div>
        </div>
        <div className="border-b border-gray-950/5 py-3 dark:border-white/10">
          <div className="font-bold">기술 스택</div>
          <div>
            Java, Spring Boot(3.4.2), Spring Data JPA, Spring Security, Spring
            Cloud, Eureka, MySQL, Docker, Docker Compose, Swagger, Kakfa, Redis
          </div>
        </div>
        <div className="border-b border-gray-950/5 py-3 dark:border-white/10">
          <div className="font-bold">구현 기능</div>
          <ul className="list-inside list-disc">
            <li>업체 도메인 개발</li>
            <li>리뷰 도메인 개발</li>
            <li>파일 도메인 개발</li>
          </ul>
        </div>
      </div>
      <div className="pt-8">
        <Link
          className="text-2xl font-bold text-[#7a9b57] underline"
          href="/project/fitnessu"
        >
          Fitnessu
        </Link>
        <div className="border-b border-gray-950/5 py-3 dark:border-white/10">
          <div className="font-bold">프로젝트 기간</div>
          <div>2022.04~2022-06</div>
        </div>
        <div className="border-b border-gray-950/5 py-3 dark:border-white/10">
          <div className="font-bold">기술 스택</div>
          <div>
            JavaScript, React, SCSS, Context API, stompjs, sockjs-client, git
          </div>
        </div>
        <div className="border-b border-gray-950/5 py-3 dark:border-white/10">
          <div className="font-bold">구현 기능</div>
          <ul className="list-inside list-disc">
            <li>Fitnessu 서비스 화면 개발</li>
            <li>공통 컴포넌트 개발</li>
          </ul>
        </div>
      </div>
      <div className="pt-8">
        <Link
          className="text-2xl font-bold text-[#7a9b57] underline"
          href="/project/monthsub"
        >
          MonthSub
        </Link>
        <div className="border-b border-gray-950/5 py-3 dark:border-white/10">
          <div className="font-bold">프로젝트 기간</div>
          <div>2021.11~2021.12</div>
        </div>
        <div className="border-b border-gray-950/5 py-3 dark:border-white/10">
          <div className="font-bold">기술 스택</div>
          <div>
            JavaScript, React, Context API, styled-components, storybook, git
          </div>
        </div>
        <div className="border-b border-gray-950/5 py-3 dark:border-white/10">
          <div className="font-bold">구현 기능</div>
          <ul className="list-inside list-disc">
            <li>MonthSub 서비스 화면 개발</li>
            <li>무한 스크롤링 구현</li>
            <li>Axios 추상화</li>
          </ul>
        </div>
      </div>
      <div className="pt-8">
        <div className="text-2xl font-bold text-[#7a9b57] underline">
          Pet Salon
        </div>
        <div className="border-b border-gray-950/5 py-3 dark:border-white/10">
          <div className="font-bold">프로젝트 기간</div>
          <div>2021.10~2021.11</div>
        </div>
        <div className="border-b border-gray-950/5 py-3 dark:border-white/10">
          <div className="font-bold">기술 스택</div>
          <div>JavaScript, React, styled-components, git</div>
        </div>
        <div className="border-b border-gray-950/5 py-3 dark:border-white/10">
          <div className="font-bold">구현 기능</div>
          <ul className="list-inside list-disc">
            <li>Pet Salon 서비스 화면 개발</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Project;
