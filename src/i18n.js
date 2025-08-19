import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './locales/eng/translation.json'
import ru from './locales/ru/translation.json'

i18n.use(initReactI18next).init({
    resources: {
        en: {translation: en},
        ru: {translation: ru},
    }, 
    lng: 'en',
    fallbacking: 'ru',
})

export default i18n;
