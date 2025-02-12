import Link from "next/link";

const About = () => {
  return (
    <div className="flex justify-between gap-20 border-b border-gray-950/5 py-12 max-sm:flex-col max-sm:gap-10 max-sm:py-10 dark:border-white/10">
      <div>
        <div className="font-pretendardBold text-4xl font-bold text-[#628B35]">
          Contact
        </div>
        <div className="flex pt-4">
          <div className="text-md pr-2 font-bold">Email</div>
          <div className="underline">sooooooongyi@gmail.com</div>
        </div>
        <div className="flex">
          <div className="text-md pr-2 font-bold">Github</div>
          <Link className="underline" href="https://github.com/sooooooongyi">
            https://github.com/sooooooongyi
          </Link>
        </div>
        <div className="flex">
          <div className="text-md pr-2 font-bold">Blog</div>
          <Link className="underline" href="https://sooooooongyi.tistory.com">
            https://sooooooongyi.tistory.com
          </Link>
        </div>
      </div>
      <div>
        <div className="font-pretendardBold text-4xl font-bold text-[#628B35]">
          Skill
        </div>
        <div className="flex pt-4">
          <div className="text-md pr-2 font-bold">FrontEnd</div>
          <div>JavaScript, TypeScript, React, Nextjs</div>
        </div>
        <div className="flex">
          <div className="text-md pr-2 font-bold">BackEnd</div>
          <div>Java, SpringBoot, MySQL, PostgreSQL</div>
        </div>
        <div className="flex">
          <div className="text-md pr-2 font-bold">Tool</div>
          <div>Git, Notion, Slack, Jira</div>
        </div>
      </div>
    </div>
  );
};

export default About;
