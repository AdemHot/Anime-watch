import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.anime.star',  // غيّر هذا إلى معرف تطبيقك الخاص (مثل com.yourname.anime)
  appName: 'أنمي ستار',
  webDir: '.',  // يشير إلى مجلد الملفات الويب (index.html)
  bundledWebRuntime: false,
  server: {
    androidScheme: 'https'
  }
};

export default config;
