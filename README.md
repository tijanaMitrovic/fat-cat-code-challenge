# FatCat code challenge


## Available components

This app uses, by default, a Random generated JSON for processing which can be found inside the public folder, under the name of "generic.json". 
Component that utilized this functionality is called "GenericListView".

There is also an option to use a specific JSON file, with known fields and properties, which is located in the public folder, under the name of "known.json".
Component that utilized this functionality is called "ConcreteListView".

In case you want to switch between these two options, simply change the index.tsx, by providing the desired component to the ReactDOM.render method.


## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.



