import Image from "next/image";

const Profile = () => {
  return (
    <div className="pt-10">
      <div className="border-l-[6px] border-[#7a9b57] pl-4 text-4xl font-bold">
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
          <div className="whitespace-nowrap text-2xl font-bold">
            긍정적인 생각으로
            <br /> 함께 성장을 위해 노력하고, <br />
            즐겁게 배우길 좋아하는 <br />
            개발자 박송이입니다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
