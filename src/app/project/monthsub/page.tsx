import Link from "next/link";
import Image from "next/image";

const DetailPage = () => {
  return (
    <div className="mx-auto min-h-screen w-full max-w-[70%] pt-14 max-sm:max-w-[90%]">
      <div className="pt-12">
        <div className="border-l-[6px] border-[#7a9b57] pl-4 text-4xl font-bold max-sm:text-3xl">
          MonthSub
        </div>
        <div className="relative mb-6 mt-12 aspect-[16/9] w-full">
          <Image
            src="/images/image-monthsub.png"
            alt="image-monthsub"
            fill
            className="object-cover"
          />
        </div>
        <div className="border-b border-gray-950/5 py-6 dark:border-white/10">
          <div className="text-lg font-bold">📝 프로젝트 설명</div>
          <div className="pt-1">
            Monthsub은 월 단위 구독을 통해 작가와 독자를 연결하는 월간 구독
            플랫폼 서비스입니다.
          </div>
        </div>
        <div className="border-b border-gray-950/5 py-6 dark:border-white/10">
          <div className="text-lg font-bold">🔗 프로젝트 링크</div>
          <div className="pt-1">
            <div className="flex items-center gap-2">
              <div className="font-bold">Deploy</div>
              <Link className="underline" href="https://monthsub.netlify.app">
                https://monthsub.netlify.app
              </Link>
              <div className="text-sm text-gray-400">
                (API 지원종료로 정상적으로 동작하지 않습니다.)
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="font-bold">Github Repo</div>
              <Link
                className="underline"
                href="https://github.com/prgrms-web-devcourse/Team_Sagack_MonthSub_FE"
              >
                https://github.com/prgrms-web-devcourse/Team_Sagack_MonthSub_FE
              </Link>
            </div>
          </div>
        </div>
        <div className="border-b border-gray-950/5 py-6 dark:border-white/10">
          <div className="text-lg font-bold">🕐 프로젝트 기간</div>
          <div className="pt-1">2021.11~2021.12</div>
        </div>
        <div className="border-b border-gray-950/5 py-6 dark:border-white/10">
          <div className="text-lg font-bold">👬 프로젝트 인원</div>
          <div className="pt-1">6명(FE 3명, BE 3명)</div>
        </div>
        <div className="border-b border-gray-950/5 py-6 dark:border-white/10">
          <div className="text-lg font-bold">⚒️ 기술 스택</div>
          <div className="pt-1">
            JavaScript, React, styled-components, Context API, storybook, git
          </div>
        </div>
        <div className="border-b border-gray-950/5 py-6 dark:border-white/10">
          <div className="text-lg font-bold">🖥️ 상세 내용</div>
          <ul className="list-inside list-disc pt-1">
            <li>로그인, 로그아웃, 회원 가입 구현</li>
            <li>
              사용자 관련 페이지 (내 정보 수정, 결제 내역, 좋아요 내역, 연재
              내역)
            </li>
            <li>결제 기능 구현</li>
            <li>팔로우 구현</li>
            <li>무한 스크롤링 구현</li>
            <li>Axios 추상화</li>
          </ul>
        </div>
        <div className="border-b border-gray-950/5 py-6 dark:border-white/10">
          <div className="text-lg font-bold">🔥 트러블 슈팅</div>
          <div className="pt-1">
            파일과 JSON 데이터를 함께 POST하는 도중 Bad Request 이슈
          </div>
          <ul className="list-inside list-disc">
            <li>Blob 객체를 이용해 데이터를 감싸 보냄으로써 해결</li>
          </ul>
          <div className="pt-1">
            ContextAPI로 로그인 상태를 관리하던 도중, 비효율적으로 로그인 상태
            변경이 발생하는 이슈
          </div>
          <ul className="list-inside list-disc">
            <li>useMemo를 통한 메모이제이션으로 해결</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
