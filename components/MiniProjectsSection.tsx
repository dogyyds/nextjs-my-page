"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { FaFolder, FaFolderOpen, FaGithub } from "react-icons/fa6";
import { useState } from "react";
import Link from "next/link";

interface MiniProject {
  name: string;
  url: string;
  description?: string;
}

interface MiniProjectsSectionProps {
  projects: MiniProject[];
}

const MiniProjectsSection = ({ projects }: MiniProjectsSectionProps) => {
  const { t } = useTranslation();
  const [hoveredFolder, setHoveredFolder] = useState<number | null>(null);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 transform transition-all duration-300 hover:shadow-md">
      <h2 className="text-xl font-bold mb-4 flex items-center">
        {t("miniProjects", "title")}
      </h2>

      <div className="grid grid-cols-2 gap-3">
        {projects.map((project, index) => (
          <Link
            href={project.url}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
            onMouseEnter={() => setHoveredFolder(index)}
            onMouseLeave={() => setHoveredFolder(null)}
          >
            <div className="flex flex-col items-center p-3 rounded-lg transition-all duration-300 bg-gray-50 hover:bg-gray-100 dark:bg-gray-700/50 dark:hover:bg-gray-700 h-full transform hover:-translate-y-1">
              {/* 更改文件夹颜色为灰色 */}
              <div className="text-3xl mb-2 text-gray-600 dark:text-gray-400 transition-transform duration-300 group-hover:scale-110">
                {hoveredFolder === index ? <FaFolderOpen /> : <FaFolder />}
              </div>
              <div className="text-sm font-medium text-center">
                {project.name}
              </div>
              {project.description && (
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 text-center">
                  {project.description}
                </div>
              )}
            </div>
          </Link>
        ))}

        <Link
          href="https://github.com/dog234?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <div className="flex flex-col items-center p-3 rounded-lg transition-all duration-300 bg-gray-50 hover:bg-gray-100 dark:bg-gray-700/50 dark:hover:bg-gray-700 h-full transform hover:-translate-y-1">
            <div className="text-3xl mb-2 text-gray-600 dark:text-gray-400 transition-transform duration-300 group-hover:scale-110">
              <FaGithub />
            </div>
            <div className="text-sm font-medium text-center">
              {t("miniProjects", "seeAll")}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MiniProjectsSection;
