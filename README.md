# Sanad

Sanad is a React Native mobile application built with modern technologies to provide a seamless and performant experience. The app leverages React Native for cross-platform development, Redux Toolkit for state management, and Firebase for backend services like authentication and push notifications. It includes various libraries such as Axios for handling API requests, React Navigation for smooth navigation, and Gifted Chat for implementing chat features. Additionally, it incorporates TypeScript for type safety and Reanimated for advanced animations, making the app robust and scalable.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Installation](#installation)
4. [Running the App](#running-the-app)
5. [Project Structure](#project-structure)
6. [Dependencies](#dependencies)

## Project Overview

Sanad is a law service application powered with AI models. Our goal is to facilitate the whole process of finding a suitable lawyer, going to the court, finishing legal papers, asking for legal advice, and more.

## Tech Stack

- **React Native**: 0.75.3
- **React**: 18.3.1
- **Redux Toolkit**: ^2.2.7
- **Firebase**: ^20.5.0 (for app and messaging functionalities)
- **Axios**: ^1.7.7 (for network requests)
- **TypeScript**: 5.0.4 (used for static type checking)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/sanad.git
   cd sanad
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Setup Firebase:
   - Add your Firebase config files as described in the Firebase documentation.

## Running the App

To run the app on Android:

```bash
yarn android
```

To run the app on iOS:

```bash
yarn ios
```

## Project Structure

```
Sanad/
│
├── android/                # Native Android-specific files
├── ios/                    # Native iOS-specific files
├── src/                    # Main source folder for the app
│   ├── components/         # Reusable UI components
│   ├── helpers/            # Utility functions and helpers
│   ├── hooks/              # Custom React hooks
│   ├── navigation/         # Navigation configuration and screens
│   ├── screens/            # App screens
│   ├── services/           # API services and external interactions
│   ├── store/              # Redux store (if applicable)
│   ├── theme/              # Theme and styling-related files
│   ├── types/              # TypeScript types definitions
│   ├── utils/              # Miscellaneous utility functions
│   │   └── Root.tsx        # Entry point for the app
├── assets/                 # Static assets (images, fonts, etc.)
├── .eslintrc.js            # ESLint configuration
├── .prettierrc.js          # Prettier configuration
├── app.json                # Application configuration
├── babel.config.js         # Babel configuration
├── index.js                # Main entry point for the app
└── package.json            # Project dependencies
```

## Dependencies

Below is a list of core dependencies used in the Sanad app:

### Main Dependencies

- **@react-native-async-storage/async-storage**: ^2.0.0 - Storage solution for React Native.
- **@react-native-firebase/app**: ^20.5.0 - Firebase integration.
- **@react-native-firebase/messaging**: ^20.5.0 - Firebase cloud messaging.
- **@react-navigation/bottom-tabs**: ^6.6.1 - Navigation with bottom tabs.
- **@react-navigation/native**: ^6.1.18 - Core utilities for React Navigation.
- **@react-navigation/native-stack**: ^6.11.0 - Stack navigator for React Navigation.
- **@reduxjs/toolkit**: ^2.2.7 - For state management using Redux.
- **axios**: ^1.7.7 - Promise-based HTTP client for API calls.
- **react-native-bootsplash**: ^6.1.3 - Splash screen for React Native.
- **react-native-confirmation-code-field**: ^7.4.0 - For OTP input fields.
- **react-native-document-picker**: ^9.3.1 - To pick documents in the app.
- **react-native-gifted-chat**: ^2.6.3 - Chat UI implementation.
- **react-native-reanimated**: ^3.15.2 - For animations in React Native.
- **react-native-reanimated-carousel**: ^3.5.1 - Carousel implementation.
- **react-native-restart**: ^0.0.27 - Restarts the React Native app programmatically.
- **react-native-safe-area-context**: ^4.11.0 - Handles safe area issues in React Native.
- **react-redux**: ^9.1.2 - Official bindings for Redux in React.
- **redux-persist**: ^6.0.0 - To persist Redux state across sessions.

### Development Dependencies

- **@babel/core**: ^7.20.0 - Babel transpiler for modern JavaScript.
- **@babel/preset-env**: ^7.20.0 - Preset for compiling ES2015+ syntax.
- **eslint**: ^8.19.0 - Linting tool for JavaScript.
- **jest**: ^29.6.3 - JavaScript testing framework.
- **typescript**: 5.0.4 - Superset of JavaScript with static types.
- **babel-plugin-module-resolver**: ^5.0.2 - Simplifies import paths with custom module resolution.
