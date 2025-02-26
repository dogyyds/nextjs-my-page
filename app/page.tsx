//import Image from "next/image";
import ProfileSection from "@/components/ProfileSection";
import MobileProfile from "@/components/MobileProfile"; // 新增移动端卡片组件
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import MiniProjectsSection from "@/components/MiniProjectsSection";
import ClientOnly from "@/components/ClientOnly";
import { FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { FaBlog } from "react-icons/fa6";
import { SiBilibili } from "react-icons/si";

export default function HomePage() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub className="text-2xl" />,
      url: "https://github.com/dogyyds",
      username: "@Dogyyds",
    },
    {
      name: "V2EX",
      icon: <BiWorld className="text-2xl" />,
      url: "https://www.v2ex.com/",
      username: "@Dogxi",
    },
    {
      name: "Bilibili",
      icon: <SiBilibili className="text-2xl" />,
      url: "https://space.bilibili.com/524190453",
      username: "@Dogxi_",
    },
    {
      name: "xLog",
      icon: <FaBlog className="text-2xl" />,
      url: "https://xlog.dogxi.me",
      username: "@Dogxi",
    },
    {
      name: "Email",
      icon: <MdEmail className="text-2xl" />,
      url: "mailto:hi@dogxi.me",
      username: "hi@dogxi.me",
    },
  ];

  const projects = [
    // {
    //   title: "Dogxi's xLog",
    //   description: "Personal Blog",
    //   url: "https://xlog.dogxi.me",
    //   image: "/images/xlog-preview.png",
    //   status: "online" as const,
    // },
    {
      title: "KiviBot Docs",
      description: "First Awesome Doc by Nextra",
      url: "https://kivi.dogxi.me",
      image: "/images/kividoc-preview.png",
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
      title: "AppIcon Forge",
      description: "Create & Customize Stunning App Icons Online",
      url: "https://icon.dogxi.top",
      image: "/images/icon-preview.png",
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
      url: "https://github.com/dogyyds/nextjs-learn",
      description: "Next.js 框架学习笔记",
    },
    {
      name: "Node.js 实验室",
      url: "https://github.com/dogyyds/nodejs-lab",
      description: "Node.js 实验项目",
    },
    { name: "TypeScript 笔记", url: "#", description: "TypeScript 学习记录" },
    { name: "Godot 入门", url: "#", description: "Godot 游戏引擎学习" },
    { name: "博客系统", url: "#", description: "个人博客系统" },
    { name: "AI 助手", url: "#", description: "个人AI助手项目" },
    { name: "这里都是占位的", url: "#", description: "以后再补充QWQ" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <ClientOnly>
        {/* 移动版头部 - 只在移动端显示，使用新的卡片组件 */}
        <div className="md:hidden px-4 pt-4">
          <MobileProfile socialLinks={socialLinks} />
        </div>

        <div className="max-w-screen-2xl mx-auto px-4 py-6 sm:py-10">
          {/* 固定的侧边栏 - 只在桌面端显示 */}
          <ProfileSection socialLinks={socialLinks} />

          {/* 主内容区 - 在桌面端右侧，移动端全宽 */}
          <div className="md:ml-[calc(25%+1rem)]">
            {/* 项目展示 */}
            <ProjectsSection projects={projects} />

            {/* 底部区域：关于我和小项目 */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {/* 左侧：关于我 (2/3宽度) */}
              <div className="md:col-span-2">
                <AboutSection />
              </div>

              {/* 右侧：小项目列表 (1/3宽度) */}
              <div className="md:col-span-1">
                <MiniProjectsSection projects={miniProjects} />
              </div>
            </div>
          </div>
        </div>
      </ClientOnly>
    </div>
  );
}
