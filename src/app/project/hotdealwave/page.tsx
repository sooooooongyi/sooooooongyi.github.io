import Link from "next/link";

const DetailPage = () => {
  return (
    <div className="mx-auto min-h-screen w-full max-w-[70%] pt-14 max-sm:max-w-[90%]">
      <div className="pt-12">
        <div className="border-l-[6px] border-[#7a9b57] pl-4 text-4xl font-bold max-sm:text-3xl">
          Hot Deal Wave
        </div>
        {/* <div className="relative mb-6 mt-12 aspect-[16/9] w-full">
          <Image
            src="/images/image-sauceclip-admin.png"
            alt="image-sauceclip-admin"
            fill
            className="object-cover"
          />
        </div> */}
        <div className="border-b border-gray-950/5 py-6 dark:border-white/10">
          <div className="text-lg font-bold">📝 프로젝트 설명</div>
          <div className="pt-1">
            대규모 트래픽을 견딜 수 있는 안정성을 갖춘 핫딜 이커머스 플랫폼
            서비스입니다.
          </div>
        </div>
        <div className="border-b border-gray-950/5 py-6 dark:border-white/10">
          <div className="text-lg font-bold">🔗 프로젝트 링크</div>
          <div className="pt-1">
            <div className="flex items-center gap-2">
              <div className="font-bold">Github Repo</div>
              <Link
                className="underline"
                href="https://github.com/sparta-final-12th-9700/HotDealWave"
              >
                https://github.com/sparta-final-12th-9700/HotDealWave
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <div className="font-bold">Swagger</div>
              <Link
                className="underline"
                href="https://api.spartahotdealwave.store/swagger-ui/index.html"
              >
                https://api.spartahotdealwave.store/swagger-ui/index.html
              </Link>
              <div className="text-sm text-gray-400">
                (API 지원종료로 정상적으로 동작하지 않습니다.)
              </div>
            </div>
          </div>
        </div>
        <div className="border-b border-gray-950/5 py-6 dark:border-white/10">
          <div className="text-lg font-bold">🕐 프로젝트 기간</div>
          <div className="pt-1">2024.12~2025.01</div>
        </div>
        <div className="border-b border-gray-950/5 py-6 dark:border-white/10">
          <div className="text-lg font-bold">👬 프로젝트 인원</div>
          <div className="pt-1">5명(Back-End)</div>
        </div>
        <div className="border-b border-gray-950/5 py-6 dark:border-white/10">
          <div className="text-lg font-bold">⚒️ 기술 스택</div>
          <div className="pt-1">
            Java, Spring Boot(3.4.2), Spring Data JPA, Spring Security, Spring
            Cloud, Eureka, MySQL8, Docker, Docker Compose, Swagger, Kafka, Redis
          </div>
        </div>
        <div className="border-b border-gray-950/5 py-6 dark:border-white/10">
          <div className="text-lg font-bold">🖥️ 상세 내용</div>
          <ul className="list-inside list-disc pt-1">
            <li>업체 도메인 조회, 등록, 수정, 삭제 기능 개발</li>
            <li>리뷰 도메인 조회, 등록, 수정, 삭제 기능 개발</li>
            <li>파일 도메인 조회, 등록, 수정, 삭제 기능 개발</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
