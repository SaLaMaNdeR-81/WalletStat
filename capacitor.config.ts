import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'WalletState',
  
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },

};

export default config;

