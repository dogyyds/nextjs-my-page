# 🌟 Dogxi 个人主页

一个现代化、响应式的个人网站，使用 Next.js 15+ 和 React 19 构建，具有多语言支持、暗色模式和流畅动画效果。

![网站预览](public/images/site-preview.png)

## ✨ 特性

- 🖥️ 响应式设计，适配桌面和移动设备
- 🌙 自动暗色模式 (基于系统偏好)
- 🌐 多语言支持 (英文/中文)
- 🖼️ 自动获取项目截图
- 💫 流畅的动画和交互效果
- ⚡ 使用 Next.js 15+ 和 React 19 构建

## 🛠️ 技术栈

- **Next.js 15+**: React 框架
- **React 19**: UI 库
- **Framer Motion**: 动画库
- **Tailwind CSS**: 实用优先的 CSS 框架
- **TypeScript**: 静态类型检查

## 📦 组件使用指南

### 核心组件

#### ProfileSection 个人资料组件

`/components/ProfileSection.tsx` - 显示固定在桌面端左侧的个人资料卡片。

```tsx
import ProfileSection from "@/components/ProfileSection";

// 使用示例
<ProfileSection socialLinks={socialLinks} />;
```

**Props**:

- `socialLinks`: 社交媒体链接数组，每项包含 name, icon, url, username

#### MobileProfile 移动端个人资料组件

`/components/MobileProfile.tsx` - 移动设备上的个人资料卡片，带有动画效果。

```tsx
import MobileProfile from "@/components/MobileProfile";

// 使用示例
<MobileProfile socialLinks={socialLinks} />;
```

**Props**:

- `socialLinks`: 与 ProfileSection 相同

#### ProjectsSection 项目展示组件

`/components/ProjectsSection.tsx` - 展示项目的卡片网格，支持自动获取项目截图。

```tsx
import ProjectsSection from "@/components/ProjectsSection";

// 使用示例
<ProjectsSection projects={projects} />;
```

**Props**:

- `projects`: 项目数组，每项包含 title, description, url, image(可选), status

#### AboutSection 关于我组件

`/components/AboutSection.tsx` - 展示个人介绍、兴趣和标签。

```tsx
import AboutSection from "@/components/AboutSection";

// 使用示例
<AboutSection />;
```

#### MiniProjectsSection 小项目组件

`/components/MiniProjectsSection.tsx` - 以文件夹风格展示小项目。

```tsx
import MiniProjectsSection from "@/components/MiniProjectsSection";

// 使用示例
<MiniProjectsSection projects={miniProjects} />;
```

**Props**:

- `projects`: 小项目数组，每项包含 name, url, description(可选)

### 辅助组件

#### ClientOnly 客户端渲染组件

`/components/ClientOnly.tsx` - 确保组件仅在客户端渲染，避免水合错误。

```tsx
import ClientOnly from "@/components/ClientOnly";

// 使用示例
<ClientOnly>{/* 客户端渲染的内容 */}</ClientOnly>;
```

### 国际化和翻译

#### LanguageContext 语言上下文

`/contexts/LanguageContext.tsx` - 提供语言切换功能。

```tsx
// 在 _app.tsx 或 layout.tsx 中包裹应用
<LanguageProvider>{children}</LanguageProvider>;

// 在组件中使用
const { language, setLanguage } = useLanguage();
```

#### useTranslation 翻译钩子

`/hooks/useTranslation.ts` - 提供多语言翻译函数。

```tsx
import { useTranslation } from "@/hooks/useTranslation";

// 在组件中使用
const { t, language, setLanguage } = useTranslation();
console.log(t("profile", "greeting")); // 获取翻译
```

## 🔧 自定义指南

### 添加新项目

编辑 `app/page.tsx` 并更新 `projects` 数组:

```tsx
const projects = [
  {
    title: "新项目名称",
    description: "项目描述",
    url: "https://project-url.com",
    image: "/images/project-preview.png", // 可选，省略将自动获取截图
    status: "online", // 或 "building"
  },
  // ...更多项目
];
```

### 添加新的社交媒体链接

编辑 `app/page.tsx` 并更新 `socialLinks` 数组:

```tsx
const socialLinks = [
  {
    name: "平台名称",
    icon: <FaIcon className="text-2xl" />, // 从 react-icons 导入图标
    url: "https://platform.com/username",
    username: "@用户名",
  },
  // ...更多社交媒体
];
```

### 添加新语言

1. 编辑 `/lib/translations.ts` 文件
2. 在 `translations` 对象中添加新的语言键值对
3. 更新 `LanguageContext.tsx` 中的 `Language` 类型

## 🚀 开始使用

1. 克隆仓库:

   ```bash
   git clone https://github.com/dogyyds/nextjs-my-page.git
   cd nextjs-my-page
   ```

2. 安装依赖:

   ```bash
   npm install
   # 或
   yarn install
   ```

3. 运行开发服务器:

   ```bash
   npm run dev
   # 或
   yarn dev
   ```

4. 构建生产版:
   ```bash
   npm run build
   npm start
   # 或
   yarn build
   yarn start
   ```

## 📝 License

MIT © [Dogxi]
