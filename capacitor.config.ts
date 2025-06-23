
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.f4022a7f8e4c40d9a20c29a8cd922bd3',
  appName: 'Telugu Raithu Sahayakudu',
  webDir: 'dist',
  server: {
    url: 'https://f4022a7f-8e4c-40d9-a20c-29a8cd922bd3.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: "#16a34a",
      showSpinner: false
    },
    StatusBar: {
      style: "dark",
      backgroundColor: "#16a34a"
    }
  }
};

export default config;
