"use client";

import Image from "next/image";
import { ReactNode, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";

interface SocialLink {
  name: string;
  icon: ReactNode;
  url: string;
  username: string;
}

interface MobileProfileProps {
  socialLinks: SocialLink[];
}

const MobileProfile = ({ socialLinks }: MobileProfileProps) => {
  const { t } = useTranslation();
  const [isAvatarHovered, setIsAvatarHovered] = useState(false);

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 mb-4"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center">
        {/* 头像区域 */}
        <div className="flex flex-col items-center mb-4">
          <div
            className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-white dark:border-gray-700 shadow-md mb-3"
            onTouchStart={() => setIsAvatarHovered(true)}
            onTouchEnd={() => setIsAvatarHovered(false)}
          >
            <Image
              src="https://avatars.githubusercontent.com/u/106546046"
              //src="http://q.qlogo.cn/headimg_dl?dst_uin=1706328818&spec=640&img_type=jpg"
              alt="Dogxi's profile picture"
              fill
              className={`object-cover transition-all duration-500 ${
                isAvatarHovered ? "scale-110" : ""
              }`}
              unoptimized
              priority
            />
          </div>

          <h1 className="text-xl font-bold mb-1">
            {t("profile", "greeting")} Dogxi
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
            {t("profile", "description")}
          </p>
        </div>

        {/* 社交图标区域 */}
        <div className="w-full pt-3 border-t border-gray-100 dark:border-gray-700">
          <div className="flex justify-center gap-3">
            {socialLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                title={link.name}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MobileProfile;
