import I18n from 'react-native-i18n';

I18n.fallbacks = true;

I18n.translations = {
  en: require('./res/en.json')
};

I18n.locale = 'en';

export default I18n;
