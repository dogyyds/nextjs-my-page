"use client";

import { FaCode, FaGamepad, FaMusic, FaBook, FaCat } from "react-icons/fa";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { useTranslation } from "@/hooks/useTranslation";

const AboutSection = () => {
  const { t, language } = useTranslation();

  const interests = [
    {
      name: language === "en" ? "Coding" : "编程",
      icon: <FaCode className="text-purple-500" aria-hidden="true" />,
    },
    {
      name: language === "en" ? "Anime" : "动漫",
      icon: (
        <PiTelevisionSimpleBold className="text-blue-500" aria-hidden="true" />
      ),
    },
    {
      name: language === "en" ? "Gaming" : "游戏",
      icon: <FaGamepad className="text-red-500" aria-hidden="true" />,
    },
    {
      name: language === "en" ? "Music" : "音乐",
      icon: <FaMusic className="text-yellow-500" aria-hidden="true" />,
    },
    {
      name: language === "en" ? "Studying" : "学习",
      icon: <FaBook className="text-green-500" aria-hidden="true" />,
    },
    {
      name: language === "en" ? "Want to have a cat" : "想养一只猫",
      icon: <FaCat className="text-orange-500" aria-hidden="true" />,
    },
  ];

  const tagContent =
    language === "en"
      ? "The more noob 🥬 the more playful / Half extrovert half introvert / Chuunibyou / Free-spirited, intermittently motivated / 😐 Not tall / Not heavy / Passable looks, 🍱 Quasi-vegetarian / Loves lettuce / Cilantro, 🎮 Minecraft / ...Multiplayer games / Dead Cells / Slay the Spire / ...Indie games"
      : "越菜 🥬 越爱玩 / 半i向e人 / 中二病 / 随心主义，间歇性上进 / 😐 不高 / 不胖 / 凑合看 / 🍱 素食主义者 / 爱吃生菜 / 香菜，🎮 我的世界 / 多人游戏 / 死亡细胞 / 杀戮尖塔 / 独立游戏";

  return (
    <article className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-sm transform transition-all duration-300 hover:shadow-md">
      <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
        {t("about", "title")}
      </h2>

      <div className="space-y-3 sm:space-y-4">
        <p className="text-sm sm:text-base">{t("about", "intro")}</p>

        <section className="animate-fadeIn">
          <h3 className="text-lg sm:text-xl font-semibold mb-2">
            {t("about", "lifeInterests")}
          </h3>
          <ul
            className="flex flex-wrap gap-2 sm:gap-3"
            aria-label="我的兴趣爱好"
          >
            {interests.map((interest) => (
              <li
                key={interest.name}
                className="flex items-center gap-1 sm:gap-2 bg-gray-100 dark:bg-gray-700 px-2 sm:px-3 py-1 sm:py-2 rounded-lg text-xs sm:text-sm transition-transform duration-300 hover:scale-105 hover:-rotate-2"
              >
                {interest.icon}
                <span>{interest.name}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="animate-fadeIn animation-delay-300">
          <h3 className="text-lg sm:text-xl font-semibold mb-2">
            {t("about", "tags")}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
            {tagContent}
          </p>
        </section>

        <div className="mt-4 text-center text-gray-600 dark:text-gray-300 italic text-sm sm:text-base animate-fadeIn animation-delay-500">
          <blockquote>
            <p>{t("about", "motto")}</p>
          </blockquote>
        </div>
      </div>
    </article>
  );
};

export default AboutSection;
