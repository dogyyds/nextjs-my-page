export type Language = 'en' | 'zh';

export interface Dictionary {
    profile: {
        greeting: string;
        description: string;
        languages: {
            chinese: string;
            english: string;
        };
    };
    project: {
        online: string;
        building: string;
    };
    about: {
        title: string;
        intro: string;
        lifeInterests: string;
        tags: string;
        motto: string;
    };
    miniProjects: {
        title: string;
        seeAll: string;
    };
}

export const translations: Record<Language, Dictionary> = {
    en: {
        profile: {
            greeting: "Hey there! I'm",
            description: "👋 Hey there! I'm a university student interested in Web Dev, Game Dev, and more.",
            languages: {
                chinese: "Chinese",
                english: "English"
            }
        },
        project: {
            online: "Online",
            building: "Building"
        },
        about: {
            title: "About Me",
            intro: "👋 Hey there! I'm Dogxi. A fresh-faced university student 📖, interested in all things unknown 💭. Currently learning Web front-end Node.js and TypeScript, game engine Godot 🧑‍💻, and frequently active on communities like GitHub and V2EX. I hope to meet more interesting people and do more interesting things 🥳",
            lifeInterests: "🚴‍♂️ Life & Interests",
            tags: "🏷️ Tags",
            motto: "Because we love it, we love it, let's keep going together! 🥰"
        },
        miniProjects: {
            title: "More Projects",
            seeAll: "See all on GitHub →"
        }
    },
    zh: {
        profile: {
            greeting: "你好！我是",
            description: "👋 嗨！我是一名大学生，对网页开发、游戏开发等领域感兴趣。",
            languages: {
                chinese: "中文",
                english: "英文"
            }
        },
        project: {
            online: "已上线",
            building: "构建中"
        },
        about: {
            title: "关于我",
            intro: "👋 嗨！我是 Dogxi。一名初出茅庐的大学生 📖，对未知事物充满好奇 💭。目前正在学习 Web 前端 Node.js 和 TypeScript，游戏引擎 Godot 🧑‍💻，经常活跃在 GitHub 和 V2EX 等社区。希望能认识更多有趣的人，做更多有趣的事 🥳",
            lifeInterests: "🚴‍♂️ 生活与兴趣",
            tags: "🏷️ 标签",
            motto: "因为热爱，所以热爱，让我们一起继续前进吧！🥰"
        },
        miniProjects: {
            title: "更多项目",
            seeAll: "在 GitHub 上查看全部 →"
        }
    }
};
