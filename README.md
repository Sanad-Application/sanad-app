# Sanad - Application

## Overview

Sanad is a mobile application built using React Native to provide a seamless cross-platform experience on both Android and iOS. It leverages a modern tech stack, including Redux for state management, Axios for handling API requests, and React Navigation for smooth and efficient screen transitions. The app uses TypeScript to ensure strong type safety and better code quality. Additionally, it integrates libraries like React Native Reanimated for animations.

---

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

---

## Dependencies

The project uses the following major dependencies:

### Main Dependencies

- **@react-native-async-storage/async-storage**: `^2.0.0`  
  Asynchronous storage for React Native.
- **@react-navigation/bottom-tabs**: `^6.6.1`  
  Bottom tab navigation for React Navigation.
- **@react-navigation/native**: `^6.1.18`  
  Handles navigation between screens.
- **@react-navigation/native-stack**: `^6.11.0`  
  Stack-based navigation for screens.
- **@reduxjs/toolkit**: `^2.2.7`  
  Toolkit for efficient Redux development.
- **axios**: `^1.7.7`  
  HTTP client for making API requests.
- **react**: `18.3.1`  
  Core React library for building UI components.
- **react-native**: `0.75.3`  
  Framework for building native apps using React.
- **react-native-confirmation-code-field**: `^7.4.0`  
  Component for confirmation code input.
- **react-native-gesture-handler**: `^2.19.0`  
  Gesture handling for React Native.
- **react-native-logs**: `^5.1.0`  
  Logging utility for React Native.
- **react-native-reanimated**: `^3.15.2`  
  Animation library for React Native.
- **react-native-reanimated-carousel**: `^3.5.1`  
  Carousel component using Reanimated.
- **react-native-restart**: `^0.0.27`  
  Utility to restart React Native app.
- **react-native-safe-area-context**: `^4.11.0`  
  Ensures the app respects safe areas in iOS and Android.
- **react-native-screens**: `^3.34.0`  
  Manages and optimizes navigation transitions.
- **react-redux**: `^9.1.2`  
  Official React bindings for Redux.
- **redux-persist**: `^6.0.0`  
  Persist and rehydrate Redux store.

### Development Dependencies

- **@babel/core**: `^7.20.0`  
  Babel compiler core.
- **@babel/preset-env**: `^7.20.0`  
  Babel preset for compiling ES6+ JavaScript.
- **@babel/runtime**: `^7.20.0`  
  Babel runtime helpers.
- **@react-native/babel-preset**: `0.75.3`  
  Babel preset for React Native.
- **@react-native/eslint-config**: `0.75.3`  
  ESLint configuration for React Native.
- **@react-native/metro-config**: `0.75.3`  
  Metro bundler configuration for React Native.
- **@react-native/typescript-config**: `0.75.3`  
  TypeScript configuration for React Native.
- **@types/react**: `^18.2.6`  
  TypeScript definitions for React.
- **@types/react-test-renderer**: `^18.0.0`  
  TypeScript definitions for react-test-renderer.
- **babel-jest**: `^29.6.3`  
  Jest plugin for Babel.
- **babel-plugin-module-resolver**: `^5.0.2`  
  Babel plugin to resolve modules.
- **eslint**: `^8.19.0`  
  Linter for JavaScript/TypeScript code quality.
- **jest**: `^29.6.3`  
  Testing framework for JavaScript.
- **prettier**: `2.8.8`  
  Code formatter.
- **react-test-renderer**: `18.3.1`  
  Test renderer for React.
- **typescript**: `5.0.4`  
  TypeScript language.

---

## How to Run the Project

1. Install dependencies:

   ```bash
   yarn install
   ```

2. Start the app:

   For Android:

   ```bash
   yarn run android
   ```

   For iOS:

   ```bash
   yarn run ios
   ```

---

## Notes

- Ensure you have [React Native CLI](https://reactnative.dev/docs/environment-setup) set up properly.
