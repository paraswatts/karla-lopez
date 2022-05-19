# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install | yarn`

Runs the app in the development mode.

### `npm start | yarn start`

Create a production build

### `npm run build | yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

To deploy web app code to firebase hosting.

```sh
$ npm install -g firebase-tools (If not installed already)
$ firebase login
$ firebase projects:list
$ firebase use your-project-name
$ npm run build | yarn build
$ firebase deploy
```
