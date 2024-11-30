import 'ts-node/register';
import { ExpoConfig } from 'expo/config';

const isProduction = process.env.APP_ENV === 'production';

const appNameSuffix = isProduction ? '' : `(${process.env.APP_ENV})`;
const appIdSuffix = isProduction ? '' : `.${process.env.APP_ENV}`;

const config: ExpoConfig = {
    name: `app-init${appNameSuffix}`,
    slug: 'app-init',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/images/icon.png',
    scheme: 'myapp',
    userInterfaceStyle: 'automatic',
    splash: {
        image: './assets/images/splash.png',
        resizeMode: 'contain',
        backgroundColor: '#ffffff'
    },
    ios: {
        supportsTablet: true,
        bundleIdentifier: `com.test.myapp${appIdSuffix}`
    },
    android: {
        adaptiveIcon: {
            foregroundImage: './assets/images/adaptive-icon.png',
            backgroundColor: '#ffffff'
        },
        package: `com.test.myapp${appIdSuffix}`
    },
    web: {
        bundler: 'metro',
        output: 'static',
        favicon: './assets/images/favicon.png'
    },
    plugins: [
        'expo-router',
        [
            'expo-splash-screen',
            {
                image: './assets/images/splash-icon.png',
                imageWidth: 200,
                resizeMode: 'contain',
                backgroundColor: '#ffffff'
            }
        ]
    ],
    experiments: {
        typedRoutes: true
    },
    updates: {
        // url: 'https://expo-updates-server-nu.vercel.app/api/manifest',
        url: 'http://localhost:3000/api/manifest'
        // url: 'http://10.0.2.2:3000/api/manifest'
    },
    runtimeVersion: {
        policy: 'fingerprint'
    },
    extra: {
        eas: {
            projectId: 'dacdad5d-e420-4156-a28d-392b878b5490'
        }
    }
};

export default config;
