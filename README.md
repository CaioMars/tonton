# Welcome to Last Buy!

Last Buy is a challenge project, meaning that this project was a requested by a third party and is an opportunity for me to show my React Native coding abilities.

Author: Caio Martins

## Objective

The goal of this project is to create a React Native to mock a shopping app with the following functionality requirements:

- Must container a shopping list
- Must be able to add products to cart
- Must have a clickable cart icon in the navigator header
- Free do add more functionalities

Application must be written in **TypeScript**.

**Bonus points**
Create automated tests for the application.

## App Markup

![App illustration](https://i.postimg.cc/pT1mw8HP/Screenshot-from-2022-02-17-17-37-50.png)

## Installation

Using npm to install all dependencies:

    	npm install

## Automated Tests

Using npm to run automated tests:

    	npm run test

**Note:**
When running the automated tests a warning might appear in the log as such:

      ●  Cannot log after tests are done. Did you forget to wait for something async in your test?
      at Icon (/tonton/node_modules/@expo/vector-icons/build/vendor/react-native-vector-icons/lib/create-icon-set.js:82:36)

This is a known issue between Jest and @expo/vector-icons that has open tickets at GitHub. It can be ignored and more investigation is required.

## Screenshots

### Splash

![Splash](https://i.postimg.cc/Yq894Z0h/Screenshot-1645123008.png)

### Shop

![Shop](https://i.postimg.cc/3wGYZc8j/Screenshot-1645127732.png)

### Product

![Product](https://i.postimg.cc/yWC7pCNm/Screenshot-1645188953.png)

### Cart

![Cart](https://i.postimg.cc/R0hqH9Jh/Screenshot-1645189218.png)
