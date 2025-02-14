import Image from "next/image";

const DetailPage = () => {
  return (
    <div className="mx-auto min-h-screen w-full max-w-[70%] pt-14 max-sm:max-w-[90%]">
      <div className="pt-12">
        <div className="border-l-[6px] border-[#7a9b57] pl-4 text-4xl font-bold max-sm:text-3xl">
          소스라이브 라이브콘솔&프롬프터
        </div>
        <div className="relative mb-6 mt-12 aspect-[16/9] w-full">
          <Image
            src="/images/image-saucelive-liveconsole.png"
            alt="image-saucelive-liveconsole"
            fill
            className="object-cover"
          />
        </div>
        <div className="border-b border-gray-950/5 py-6 dark:border-white/10">
          <div className="text-lg font-bold">📝 프로젝트 설명</div>
          <div className="pt-1">
            라이브 커머스 매니저 및 관리자를 위한 라이브콘솔&프롬프터 서비스
            화면 개발 및 운영했습니다.
          </div>
        </div>
        <div className="border-b border-gray-950/5 py-6 dark:border-white/10">
          <div className="text-lg font-bold">🕐 프로젝트 기간</div>
          <div className="pt-1">2023.01~2023.06</div>
        </div>
        <div className="border-b border-gray-950/5 py-6 dark:border-white/10">
          <div className="text-lg font-bold">⚒️ 기술 스택</div>
          <div className="pt-1">
            TypeScript, React, Sass, Redux, Redux-Saga, Axios, React-Quill
          </div>
        </div>
        <div className="border-b border-gray-950/5 py-6 dark:border-white/10">
          <div className="text-lg font-bold">🖥️ 상세 내용</div>
          <ul className="list-inside list-disc pt-1">
            <li>공통 컴포넌트 개발</li>
            <li>채팅 관련 기능 개발(단축어, 확대/축소, 신고, 복사, 공지)</li>
            <li>채팅 보관함 관련 기능 개발(보관, 삭제, 복사, 확대/축소)</li>
            <li>프롬프터 관련 기능 개발(채팅, 채팅 보관함, 메모)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
