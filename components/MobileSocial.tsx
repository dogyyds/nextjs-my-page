"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SocialLink {
  name: string;
  icon: ReactNode;
  url: string;
  username: string;
}

interface MobileSocialProps {
  socialLinks: SocialLink[];
}

const MobileSocial = ({ socialLinks }: MobileSocialProps) => {
  return (
    <div className="md:hidden flex justify-center my-4">
      <div className="flex gap-3 p-2 rounded-full bg-white dark:bg-gray-800 shadow-md">
        {socialLinks.map((link, i) => (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            whileHover={{ scale: 1.1 }}
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
  );
};

export default MobileSocial;
