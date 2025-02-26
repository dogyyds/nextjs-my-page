'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/i18n/dictionaries';

type Language = 'zh' | 'en';

export function useTranslation() {
    // 将默认语言修改为英文
    let language: Language = 'en';
    let setLanguage = (newLang: Language) => {
        console.warn(`Language context not available, using default implementation. Tried to set language to: ${newLang}`);
    };

    try {
        // 尝试使用LanguageContext
        const context = useLanguage();
        language = context.language;
        setLanguage = context.setLanguage;
    } catch (error) {
        console.error('Error using language context:', error);
    }

    // 根据路径获取翻译
    const t = (section: string, ...path: string[]): string => {
        try {
            let result = translations[language][section as keyof typeof translations[typeof language]];
            for (const key of path) {
                if (result && typeof result === 'object' && key in result) {
                    result = result[key as keyof typeof result];
                } else {
                    return `${section}.${path.join('.')}`;
                }
            }
            return result as unknown as string || `${section}.${path.join('.')}`;
        } catch (error) {
            console.error('Translation error:', error);
            return `${section}.${path.join('.')}`;
        }
    };

    return { t, language, setLanguage };
}
