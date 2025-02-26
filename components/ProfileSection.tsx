"use client";

import Image from "next/image";
import { ReactNode, useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";

interface SocialLink {
  name: string;
  icon: ReactNode;
  url: string;
  username: string;
}

interface ProfileSectionProps {
  socialLinks: SocialLink[];
}

const ProfileSection = ({ socialLinks }: ProfileSectionProps) => {
  const { t, language, setLanguage } = useTranslation();
  const [isAvatarHovered, setIsAvatarHovered] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md fixed top-4 w-[calc(25%-1rem)] max-w-xs z-10 hidden md:block">
      <div className="flex flex-col items-center">
        {/* 头像 - 添加动效 */}
        <div
          className="relative w-28 h-28 mb-4 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-md transition-transform duration-500 ease-in-out transform hover:scale-105"
          onMouseEnter={() => setIsAvatarHovered(true)}
          onMouseLeave={() => setIsAvatarHovered(false)}
        >
          <Image
            //src="http://q.qlogo.cn/headimg_dl?dst_uin=1706328818&spec=640&img_type=jpg"
            src="https://avatars.githubusercontent.com/u/106546046?v=4"
            alt="Dogxi's profile picture"
            fill
            className={`object-cover transition-all duration-500 ${
              isAvatarHovered ? "scale-110 rotate-6" : ""
            }`}
            unoptimized
            priority
          />
        </div>

        {/* 名字 - 添加渐入动画 */}
        <h1 className="text-xl font-bold mb-2 animate-fadeIn">
          {t("profile", "greeting")} Dogxi
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-center text-sm animate-fadeIn animation-delay-100">
          {t("profile", "description")}
        </p>

        {/* 社交链接 - 添加悬停动效 */}
        <div className="w-full space-y-2 animate-fadeIn animation-delay-300">
          {socialLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 hover:translate-x-1"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="text-gray-700 dark:text-gray-300 transition-transform duration-300 group-hover:scale-110">
                {link.icon}
              </div>
              <div>
                <div className="font-medium">{link.name}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {link.username}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* 语言选择 - 优化样式 */}
        <div className="mt-4 flex items-center gap-2 text-sm animate-fadeIn animation-delay-500">
          <button
            onClick={() => setLanguage("zh")}
            className={`transition-all duration-300 px-2 py-1 rounded ${
              language === "zh"
                ? "font-bold bg-gray-200 dark:bg-gray-700"
                : "text-gray-600 dark:text-gray-300 hover:underline"
            }`}
          >
            {t("profile", "languages", "chinese")}
          </button>
          <span className="text-gray-400">|</span>
          <button
            onClick={() => setLanguage("en")}
            className={`transition-all duration-300 px-2 py-1 rounded ${
              language === "en"
                ? "font-bold bg-gray-200 dark:bg-gray-700"
                : "text-gray-600 dark:text-gray-300 hover:underline"
            }`}
          >
            {t("profile", "languages", "english")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
