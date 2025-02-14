import Link from "next/link";
import Image from "next/image";

const DetailPage = () => {
  return (
    <div className="mx-auto min-h-screen w-full max-w-[70%] pt-14 max-sm:max-w-[90%]">
      <div className="pt-12">
        <div className="border-l-[6px] border-[#7a9b57] pl-4 text-4xl font-bold max-sm:text-3xl">
          Pet Salon
        </div>
        <div className="relative mb-6 mt-12 aspect-[16/9] w-full">
          <Image
            src="/images/image-petsalon.png"
            alt="image-petsalon"
            fill
            className="object-cover"
          />
        </div>
        <div className="border-b border-gray-950/5 py-6 dark:border-white/10">
          <div className="text-lg font-bold">📝 프로젝트 설명</div>
          <div className="pt-1">
            Pet Salon은 반려동물 미용 후기를 남기고 다른 사용자와 공유할 수 있는
            SNS 서비스입니다.
          </div>
        </div>
        <div className="border-b border-gray-950/5 py-6 dark:border-white/10">
          <div className="text-lg font-bold">🔗 프로젝트 링크</div>
          <div className="pt-1">
            <div className="flex items-center gap-2">
              <div className="font-bold">Github Repo</div>
              <Link
                className="underline"
                href="https://github.com/prgrms-fe-devcourse/FEDC1_PetSalon_Yohan2"
              >
                https://github.com/prgrms-fe-devcourse/FEDC1_PetSalon_Yohan2
              </Link>
            </div>
          </div>
        </div>
        <div className="border-b border-gray-950/5 py-6 dark:border-white/10">
          <div className="text-lg font-bold">🕐 프로젝트 기간</div>
          <div className="pt-1">2021.10~2021.11</div>
        </div>
        <div className="border-b border-gray-950/5 py-6 dark:border-white/10">
          <div className="text-lg font-bold">👬 프로젝트 인원</div>
          <div className="pt-1">3명(FE 3명)</div>
        </div>
        <div className="border-b border-gray-950/5 py-6 dark:border-white/10">
          <div className="text-lg font-bold">⚒️ 기술 스택</div>
          <div className="pt-1">JavaScript, React, styled-components, git</div>
        </div>
        <div className="border-b border-gray-950/5 py-6 dark:border-white/10">
          <div className="text-lg font-bold">🖥️ 상세 내용</div>
          <ul className="list-inside list-disc pt-1">
            <li>게시글 조회, 생성, 수정, 삭제 구현</li>
            <li>댓글 기능 구현</li>
            <li>좋아요 기능 구현</li>
          </ul>
        </div>
        <div className="border-b border-gray-950/5 py-6 dark:border-white/10">
          <div className="text-lg font-bold">🔥 트러블 슈팅</div>
          <div className="pt-1">
            하위 컴포넌트에서 데이터 및 화면 갱신을 할수 없는 이슈
          </div>
          <ul className="list-inside list-disc">
            <li>
              이벤트 함수를 함께 전달하여 하위 컴포넌트에서의 데이터 변화를
              화면에 업데이트
            </li>
          </ul>
          <div className="pt-1">
            컴포넌트 Mounted 시 Data Fetching과 렌더링 사이의 이슈
          </div>
          <ul className="list-inside list-disc">
            <li>
              React Hooks를 이용해 데이터를 비동기적으로 불러옴으로써 해결
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
