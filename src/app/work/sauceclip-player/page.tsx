import Image from "next/image";

const DetailPage = () => {
  return (
    <div className="mx-auto min-h-screen w-full max-w-[70%] pt-14 max-sm:max-w-[90%]">
      <div className="pt-12">
        <div className="border-l-[6px] border-[#7a9b57] pl-4 text-4xl font-bold max-sm:text-3xl">
          소스클립 플레이어
        </div>
        <div className="relative mb-6 mt-12 aspect-[16/9] w-full">
          <Image
            src="/images/image-sauceclip-player.png"
            alt="image-sauceclip-player"
            fill
            className="object-cover"
          />
        </div>
        <div className="border-b border-gray-950/5 py-6 dark:border-white/10">
          <div className="text-lg font-bold">📝 프로젝트 설명</div>
          <div className="pt-1">
            PC, 모바일, 하이브리드앱 환경에서 제공하는 쇼퍼블 숏폼 반응형
            플레이어 서비스를 개발했습니다.
          </div>
        </div>
        <div className="border-b border-gray-950/5 py-6 dark:border-white/10">
          <div className="text-lg font-bold">🕐 프로젝트 기간</div>
          <div className="pt-1">2023.07~2024-07</div>
        </div>
        <div className="border-b border-gray-950/5 py-6 dark:border-white/10">
          <div className="text-lg font-bold">⚒️ 기술 스택</div>
          <div className="pt-1">
            TypeScript, React, styled-components, Redux, Axios, Swiper
          </div>
        </div>
        <div className="border-b border-gray-950/5 py-6 dark:border-white/10">
          <div className="text-lg font-bold">🖥️ 상세 내용</div>
          <ul className="list-inside list-disc pt-1">
            <li>
              코드 사용성과 가독성 개선을 위한 코드 컨벤션 도입 및 리팩토링
            </li>
            <li>공통 컴포넌트 개발</li>
            <li>좋아요 기능 개발</li>
            <li>추천 소스 클립 기능 개발</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
