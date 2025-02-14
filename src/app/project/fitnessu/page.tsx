import Link from "next/link";
import Image from "next/image";

const DetailPage = () => {
  return (
    <div className="mx-auto min-h-screen w-full max-w-[70%] pt-14 max-sm:max-w-[90%]">
      <div className="pt-12">
        <div className="border-l-[6px] border-[#7a9b57] pl-4 text-4xl font-bold max-sm:text-3xl">
          Fitnessu
        </div>
        <div className="relative mb-6 mt-12 aspect-[16/9] w-full">
          <Image
            src="/images/image-fitnessu.png"
            alt="image-fitnessu"
            fill
            className="object-cover"
          />
        </div>
        <div className="border-b border-gray-950/5 py-6 dark:border-white/10">
          <div className="text-lg font-bold">📝 프로젝트 설명</div>
          <div className="pt-1">
            Fitnessu는 스포츠 플레이어와 코치의 레슨 매칭 플랫폼 서비스입니다.
          </div>
        </div>
        <div className="border-b border-gray-950/5 py-6 dark:border-white/10">
          <div className="text-lg font-bold">🔗 프로젝트 링크</div>
          <div className="pt-1">
            <div className="flex items-center gap-2">
              <div className="font-bold">Deploy</div>
              <Link className="underline" href="https://fitnessu.netlify.app">
                https://fitnessu.netlify.app
              </Link>
              <div className="text-sm text-gray-400">
                (API 지원종료로 정상적으로 동작하지 않습니다.)
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="font-bold">Github Repo</div>
              <Link
                className="underline"
                href="https://github.com/sooooooongyi/fitnessu"
              >
                https://github.com/sooooooongyi/fitnessu
              </Link>
            </div>
          </div>
        </div>
        <div className="border-b border-gray-950/5 py-6 dark:border-white/10">
          <div className="text-lg font-bold">🕐 프로젝트 기간</div>
          <div className="pt-1">2022.04~2022.06</div>
        </div>
        <div className="border-b border-gray-950/5 py-6 dark:border-white/10">
          <div className="text-lg font-bold">👬 프로젝트 인원</div>
          <div className="pt-1">5명(FE 1명, BE 3명)</div>
        </div>
        <div className="border-b border-gray-950/5 py-6 dark:border-white/10">
          <div className="text-lg font-bold">⚒️ 기술 스택</div>
          <div className="pt-1">
            JavaScript, React, SCSS, Context API, stompjs, sockjs-client, git
          </div>
        </div>
        <div className="border-b border-gray-950/5 py-6 dark:border-white/10">
          <div className="text-lg font-bold">🖥️ 상세 내용</div>
          <ul className="list-inside list-disc pt-1">
            <li>Fitnessu 서비스 화면 개발</li>
            <li>공통 컴포넌트 개발</li>
            <li>로그인, 로그아웃, 회원 가입 구현</li>
            <li>게시글 조회, 생성, 수정, 삭제 구현</li>
            <li>검색 기능 구현</li>
            <li>채팅 기능 구현</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
