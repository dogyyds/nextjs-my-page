"use client";

import { useTranslation } from "@/hooks/useTranslation";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaCheck, FaClock } from "react-icons/fa6";

interface Project {
  title: string;
  description: string;
  url: string;
  image?: string;
  status: "online" | "building";
}

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  const { t } = useTranslation();
  const [loadedImages, setLoadedImages] = useState<{ [key: string]: string }>(
    {}
  );

  // 自动获取项目截图
  useEffect(() => {
    const fetchImages = async () => {
      const images: { [key: string]: string } = {};

      for (const project of projects) {
        if (!project.image) {
          try {
            // 尝试获取截图
            const screenshotUrl = `https://api.microlink.io/?url=${encodeURIComponent(
              project.url
            )}&screenshot=true&meta=false&embed=screenshot.url`;
            const response = await fetch(screenshotUrl);
            const data = await response.json();

            if (
              data.status === "success" &&
              data.data &&
              data.data.screenshot &&
              data.data.screenshot.url
            ) {
              images[project.url] = data.data.screenshot.url;
            } else if (project.url.includes("github.com")) {
              // 尝试从GitHub获取仓库图片
              const repoPath = project.url.replace("https://github.com/", "");
              images[
                project.url
              ] = `https://opengraph.githubassets.com/1/${repoPath}`;
            } else {
              // 使用默认图片服务
              images[
                project.url
              ] = `https://image.thum.io/get/width/1200/crop/800/viewportWidth/1200/png/${project.url}`;
            }
          } catch (error) {
            console.error(
              "Error fetching image for project:",
              project.url,
              error
            );
            // 使用默认图片服务作为备份
            images[
              project.url
            ] = `https://image.thum.io/get/width/1200/crop/800/viewportWidth/1200/png/${project.url}`;
          }
        }
      }

      setLoadedImages(images);
    };

    fetchImages();
  }, [projects]);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 transform transition-all duration-300 hover:shadow-md mt-4 md:mt-0">
      <h2 className="text-xl font-bold mb-3">{t("projects", "title")}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project, index) => {
          // 确定要使用的图片URL
          const imageUrl =
            project.image ||
            loadedImages[project.url] ||
            `/images/placeholder.jpg`;

          return (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-50 dark:bg-gray-700/50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 transform hover:-translate-y-1"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="aspect-[16/9] relative overflow-hidden">
                <Image
                  src={imageUrl}
                  alt={project.title}
                  fill
                  unoptimized={!project.image} // 对于动态加载的图片，禁用优化
                  className="object-cover transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium text-sm px-3 py-1.5 rounded-full bg-black bg-opacity-50 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    View Project
                  </span>
                </div>
              </div>
              <div className="p-3">
                <div className="flex justify-between items-start">
                  <h3 className="text-base font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div
                    className={`flex items-center text-xs ${
                      project.status === "online"
                        ? "text-green-500"
                        : "text-amber-500"
                    }`}
                  >
                    {project.status === "online" ? (
                      <>
                        <FaCheck className="mr-1" />
                        {t("projects", "online")}
                      </>
                    ) : (
                      <>
                        <FaClock className="mr-1" />
                        {t("projects", "building")}
                      </>
                    )}
                  </div>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">
                  {project.description}
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsSection;
