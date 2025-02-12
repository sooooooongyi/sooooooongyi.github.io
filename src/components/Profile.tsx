import Image from "next/image";
import Link from "next/link";

const Profile = () => {
  return (
    <div className="pt-10">
      <div className="border-l-[6px] border-[#628B35] pl-4 text-4xl font-bold">
        박송이
      </div>
      <div className="flex items-center justify-center gap-10 pt-12 max-sm:flex-col">
        <Image
          src="/images/image-profile.png"
          alt="image-profile"
          width={240}
          height={240}
        />
        <div>
          <div className="text-2xl font-bold">
            긍정적인 생각으로
            <br /> 함께 성장을 위해 노력하고, <br />
            즐겁게 배우길 좋아하는 <br />
            개발자 박송이입니다.
          </div>
          <div className="pt-4">
            <div className="text-2xl font-bold text-[#628B35]">Contact</div>
            <div className="flex">
              <div className="text-md pr-2 font-bold">Email</div>
              <div className="underline">sooooooongyi@gmail.com</div>
            </div>
            <div className="flex">
              <div className="text-md pr-2 font-bold">Github</div>
              <Link
                className="underline"
                href="https://github.com/sooooooongyi"
              >
                https://github.com/sooooooongyi
              </Link>
            </div>
            <div className="flex">
              <div className="text-md pr-2 font-bold">Blog</div>
              <Link
                className="underline"
                href="https://sooooooongyi.tistory.com"
              >
                https://sooooooongyi.tistory.com
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
