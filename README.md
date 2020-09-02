This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

After cloning, run `yarn install` in the directory, and then `yarn schema` to generate types for the Apollo Client fort GraphQL 


## Coding Assessment

For this code assessment, we want to see you build a simple, single page web app that integrates React, GraphQL and Django. 

Provided is a basic project bootstrapped with Create React App and linked to the provided Django through Graphene/Apollo GraphQL.

### Overview

- There are 8 jobs in a database, each associated with 1-2 lists. There is one user. There are a total of 4 lists. Spreadsheet for lists and jobs here: https://airtable.com/invite/l?inviteId=invdR5VkhyhUVs1LB&inviteToken=bea5c2b57e501834ecfa77007d5559229c2727b7d8847e928a46449da211fe1c. 
- Each list title should appear in a sidebox, with a checkbox next to the title. All the lists should be hidden at first, and there should be no check boxes checked. When a user clicks on the checkbox and toggles it on, the jobs that are associated to that list should appear in the center of the page. When a user toggles the check box off, the jobs should disappear again.
- If a job has two lists associated with it, and one list is hidden, the job should still be shown.

NOTE: There's no need to worry about making it pretty at all. The key is that the front end communicates with the backend.

### Specs and Requirements 
- Utilise hooks and state where suitable.
- All communication between the React frontend and Django backend should ideally occur through Graphene/Apollo GraphQL.
- The front end should be written using Typescript.


## Generating Types From Apollo for GraphQL

### `yarn schema`

Running this will sync the Apollo client's types with the GraphQL endpoint (Django Backend)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
