import Image from "next/image";

const DetailPage = () => {
  return (
    <div className="mx-auto min-h-screen w-full max-w-[70%] pt-14 max-sm:max-w-[90%]">
      <div className="pt-12">
        <div className="border-l-[6px] border-[#7a9b57] pl-4 text-4xl font-bold max-sm:text-3xl">
          소스클립 관리자 페이지
        </div>
        <div className="relative mb-6 mt-12 aspect-[16/9] w-full">
          <Image
            src="/images/image-sauceclip-admin.png"
            alt="image-sauceclip-admin"
            fill
            className="object-cover"
          />
        </div>
        <div className="border-b border-gray-950/5 py-6 dark:border-white/10">
          <div className="text-lg font-bold">📝 프로젝트 설명</div>
          <div className="pt-1">
            소스클립 영상과 상품을 등록하고 플레이어 내 각종 기능을 설정할 수
            있는 관리자 서비스를 개발했습니다.
          </div>
        </div>
        <div className="border-b border-gray-950/5 py-6 dark:border-white/10">
          <div className="text-lg font-bold">🕐 프로젝트 기간</div>
          <div className="pt-1">2023.11~2024.07</div>
        </div>
        <div className="border-b border-gray-950/5 py-6 dark:border-white/10">
          <div className="text-lg font-bold">⚒️ 기술 스택</div>
          <div className="pt-1">
            TypeScript, React, styled-components, SCSS, React-Query, Recoil,
            Axios, ECharts, Antd
          </div>
        </div>
        <div className="border-b border-gray-950/5 py-6 dark:border-white/10">
          <div className="text-lg font-bold">🖥️ 상세 내용</div>
          <ul className="list-inside list-disc pt-1">
            <li>대시보드 개발</li>
            <li>클립 영상에 대한 조회, 등록, 수정, 삭제 기능 개발</li>
            <li>상품에 대한 조회, 등록, 수정, 삭제 기능 개발</li>
            <li>큐레이션에 대한 조회, 등록, 수정, 삭제 기능 개발</li>
            <li>광고 조회, 등록, 수정, 삭제 기능 개발</li>
            <li>빠른 화면 구축을 위한 디자인 시스템 도입</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
