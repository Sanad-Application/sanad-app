# Sanad - Application

## Overview

This repo is for our mobile app version of Sanad.

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

- **@react-navigation/native**: `^6.1.18`  
  Handles navigation between screens.
  
- **@react-navigation/native-stack**: `^6.11.0`  
  Stack-based navigation for screens.
  
- **axios**: `^1.7.7`  
  HTTP client for making API requests.
  
- **react**: `18.3.1`  
  Core React library for building UI components.

- **react-native**: `0.75.3`  
  Framework for building native apps using React.
  
- **react-native-safe-area-context**: `^4.11.0`  
  Ensures the app respects safe areas in iOS and Android.

- **react-native-screens**: `^3.34.0`  
  Manages and optimizes navigation transitions.

### Development Dependencies

- **@babel/core**: `^7.20.0`  
  Babel compiler core.
  
- **@babel/preset-env**: `^7.20.0`  
  Babel preset for compiling ES6+ JavaScript.
  
- **@react-native/babel-preset**: `0.75.3`  
  Babel preset for React Native.
  
- **@react-native/eslint-config**: `0.75.3`  
  ESLint configuration for React Native.

- **@types/react**: `^18.2.6`  
  TypeScript definitions for React.

- **jest**: `^29.6.3`  
  Testing framework for JavaScript.
  
- **eslint**: `^8.19.0`  
  Linter for JavaScript/TypeScript code quality.

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
