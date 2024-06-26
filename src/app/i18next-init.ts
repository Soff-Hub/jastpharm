// next-i18next.config.ts
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend'; // Backend modulini import qiling
import LanguageDetector from 'i18next-browser-languagedetector';

const initI18next = () => {
    i18next
        .use(Backend) // Backend modulini ishlatish
        .use(LanguageDetector)
        .use(initReactI18next)
        .init({
            fallbackLng: 'ru',
            supportedLngs: ['ru', 'en', 'uz'],
            backend: {
                // Fayllarni qayerdan olishni belgilash
                loadPath: '/locales/{{lng}}.json',
                // Fayllarni yuklashda qo'lini tiklash
                allowMultiLoading: false,
            },
            detection: {
                // Tilni aniqlash tartibini belgilash
                order: ['localStorage'],
                caches: ['localStorage'], // Tanlangan tilni saqlash uchun cache turlari
            },
            react: {
                useSuspense: false,
            },
        });
};

export default initI18next;
