import { Metadata } from "next";
import ProfileSection from "@/components/ProfileSection";
import MobileProfile from "@/components/MobileProfile";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import MiniProjectsSection from "@/components/MiniProjectsSection";
import ClientOnly from "@/components/ClientOnly";
import { FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { FaBlog } from "react-icons/fa6";
import { SiBilibili } from "react-icons/si";
import {
  PersonJsonLd,
  WebsiteJsonLd,
  ProjectJsonLd,
} from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Dogxi - 个人主页",
  description: "👋 Hey there, I'm Dogxi.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub className="text-2xl" aria-hidden="true" />,
      url: "https://github.com/dogyyds",
      username: "@Dogyyds",
    },
    {
      name: "V2EX",
      icon: <BiWorld className="text-2xl" aria-hidden="true" />,
      url: "https://www.v2ex.com/",
      username: "@Dogxi",
    },
    {
      name: "Bilibili",
      icon: <SiBilibili className="text-2xl" aria-hidden="true" />,
      url: "https://space.bilibili.com/524190453",
      username: "@Dogxi_",
    },
    {
      name: "xLog",
      icon: <FaBlog className="text-2xl" aria-hidden="true" />,
      url: "https://xlog.dogxi.me",
      username: "@Dogxi",
    },
    {
      name: "Email",
      icon: <MdEmail className="text-2xl" aria-hidden="true" />,
      url: "mailto:hi@dogxi.me",
      username: "hi@dogxi.me",
    },
  ];

  const projects = [
    {
      title: "KiviBot Docs",
      description: "First Awesome Doc by Nextra",
      url: "https://kivi.dogxi.me",
      image: "/images/kividoc-preview.jpg",
      status: "online" as const,
    },
    {
      title: "📦 我超 盒！",
      description: "First Next.js Project",
      url: "https://zzuli.dogxi.me",
      image: "/images/zzuli-preview.png",
      status: "online" as const,
    },
    {
      title: "GameJam 看板",
      description: "Find the best gamejam",
      url: "https://gamejam.dogxi.me",
      image: "/images/gamejam-preview.jpg",
      status: "online" as const,
    },
    {
      title: "API Service",
      description: "First API serviece by Deno Deploy",
      url: "https://deno.dogxi.top",
      image: "/images/api-preview.png",
      status: "building" as const,
    },
  ];

  const miniProjects = [
    {
      name: "Next.js 学习",
      url: "https://github.com/dogyyds",
      description: "Next.js 框架学习笔记",
    },
    {
      name: "Node.js 实验室",
      url: "https://github.com/dogyyds",
      description: "Node.js 实验项目",
    },
    { name: "TypeScript 笔记", url: "#", description: "TypeScript 学习记录" },
    { name: "Godot 入门", url: "#", description: "Godot 游戏引擎学习" },
    { name: "博客系统", url: "#", description: "个人博客系统" },
    { name: "AI 助手", url: "#", description: "个人AI助手项目" },
    { name: "这里都是占位的", url: "#", description: "以后再补充QWQ" },
  ];

  // 为结构化数据准备的项目数据
  const projectsForJsonLd = projects.map((project) => ({
    name: project.title,
    description: project.description,
    url: project.url,
    image: `https://dogxi.me${project.image}`,
    datePublished: "2024-02-28", // 可以根据实际情况设置发布日期
  }));

  return (
    <>
      {/* 添加结构化数据 */}
      <PersonJsonLd
        name="Dogxi"
        url="https://dogxi.me"
        image="https://avatars.githubusercontent.com/u/106546046"
        description="A rookie dog who loves web development and game development."
        sameAs={[
          "https://github.com/dogyyds",
          "https://www.v2ex.com/member/Dogxi",
          "https://space.bilibili.com/524190453",
          "https://xlog.dogxi.me",
        ]}
      />

      <WebsiteJsonLd
        name="Dogxi - 个人主页"
        url="https://dogxi.me"
        description=" 🐶 一个热爱 Web 开发和游戏开发的菜鸟狗狗。"
        author="Dogxi"
      />

      <ProjectJsonLd projects={projectsForJsonLd} />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        <ClientOnly>
          {/* 移动版头部 - 只在移动端显示，使用新的卡片组件 */}
          <div className="md:hidden px-4 pt-4">
            <MobileProfile socialLinks={socialLinks} />
          </div>

          <main className="max-w-screen-2xl mx-auto px-4 py-6 sm:py-10">
            {/* 固定的侧边栏 - 只在桌面端显示 */}
            <ProfileSection socialLinks={socialLinks} />

            {/* 主内容区 - 在桌面端右侧，移动端全宽 */}
            <div className="md:ml-[calc(25%+1rem)]">
              {/* 项目展示 */}
              <section aria-labelledby="projects-heading">
                <h1 id="projects-heading" className="sr-only">
                  我的项目
                </h1>
                <ProjectsSection projects={projects} />
              </section>

              {/* 底部区域：关于我和小项目 */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                {/* 左侧：关于我 (2/3宽度) */}
                <section
                  aria-labelledby="about-heading"
                  className="md:col-span-2"
                >
                  <h2 id="about-heading" className="sr-only">
                    关于我
                  </h2>
                  <AboutSection />
                </section>

                {/* 右侧：小项目列表 (1/3宽度) */}
                <section
                  aria-labelledby="mini-projects-heading"
                  className="md:col-span-1"
                >
                  <h2 id="mini-projects-heading" className="sr-only">
                    小项目
                  </h2>
                  <MiniProjectsSection projects={miniProjects} />
                </section>
              </div>
            </div>
          </main>
        </ClientOnly>
      </div>
    </>
  );
}
