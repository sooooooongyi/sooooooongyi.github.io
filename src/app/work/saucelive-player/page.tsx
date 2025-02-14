const DetailPage = () => {
  return (
    <div className="mx-auto min-h-screen w-full max-w-[70%] pt-14 max-sm:max-w-[90%]">
      <div className="pt-12">
        <div className="border-l-[6px] border-[#7a9b57] pl-4 text-4xl font-bold max-sm:text-3xl">
          소스라이브 플레이어
        </div>
        {/* <div className="relative mb-6 mt-12 aspect-[16/9] w-full">
          <Image
            src="/images/image-saucelive-liveconsole.png"
            alt="image-saucelive-liveconsole"
            fill
            className="object-cover"
          />
        </div> */}
        <div className="border-b border-gray-950/5 py-6 dark:border-white/10">
          <div className="text-lg font-bold">📝 프로젝트 설명</div>
          <div className="pt-1">
            PC, 모바일, 하이브리드앱 환경에서 제공하는 반응형 플레이어 서비스
            운영 및 이슈 대응했습니다.
          </div>
        </div>
        <div className="border-b border-gray-950/5 py-6 dark:border-white/10">
          <div className="text-lg font-bold">🕐 프로젝트 기간</div>
          <div className="pt-1">2022.03~2023.06</div>
        </div>
        <div className="border-b border-gray-950/5 py-6 dark:border-white/10">
          <div className="text-lg font-bold">⚒️ 기술 스택</div>
          <div className="pt-1">
            TypeScript, React, Sass, Redux, Redux-Saga, Axios
          </div>
        </div>
        <div className="border-b border-gray-950/5 py-6 dark:border-white/10">
          <div className="text-lg font-bold">🖥️ 상세 내용</div>
          <ul className="list-inside list-disc pt-1">
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

export default DetailPage;
