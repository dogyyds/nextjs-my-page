import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://dogxi.me';

    // 主要页面
    const routes = [
        '',
        '/projects',
        '/about',
        '/contact',
    ];

    const sitemap: MetadataRoute.Sitemap = routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : 0.8,
    }));

    // 添加项目详情页
    const projects = ['kivi', 'zzuli', 'icon', 'api'];
    const projectSitemap = projects.map((project) => ({
        url: `${baseUrl}/projects/${project}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [...sitemap, ...projectSitemap];
}
