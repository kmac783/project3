# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

<<<<<<< HEAD
## Available Scripts
=======
Find Me is a platform for collecting news & research articles, books, and videos. People use Find Me to discover content, build collections, and grow their knowledge.

![Application Screenshot](project3/client/public/Project3Screenshot.png)
>>>>>>> 81a35f537a04597dfa963c50c372e85997633c1c

In the project directory, you can run:

### `npm start`

<<<<<<< HEAD
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
=======
## Project

- [Github Repo](https://github.com/kmac783/project3)
- [Production App](https://radiant-bastion-34806.herokuapp.com/)

## Wireframes
>>>>>>> 81a35f537a04597dfa963c50c372e85997633c1c

The page will reload if you make edits.\
You will also see any lint errors in the console.

<<<<<<< HEAD
### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======
- [React Architecture](www.google.com)

## User Stories

- MVP

1. As a user I want to be able to search for any of the three: videos, books, news so that I can create collections using a good variety of content.
2. As a user, I want to be able to search for articles by News or Research so that I can hone in on the type of article I want to read.
3. As a user I want to see videos associated with my article search so that I can explore readily available audiovisual content to enhance the text content of my search. I do not want videos to be displayed with my book searches because I am not searching about current events or research topics which are enhanced by audiovisual content.
4. As a user I want to see an informational message if there are no results for my search so that I can be aware that I need to try using different search terms.
5. As a user I want to see a spinner for loading while my search is being performed so that I am aware that progress is being made if the search is taking a long time to complete.

- Post MVP

6. As a user I want to be able to register and login so that I can save my search results to collections.
7. As a user I want the fonts and colors I see to be consistent so that I am not distracted.
8. As a user I want the menus I want the design of my search applicaiton be stylish so that I am able to enjoy navigating the application and engaging with the content returned by search.
9. As a user I want to be shown a message indicating that I have not selected a search type if I run a search before selecting what type of content I want returned so that I am aware why no results appear and am able to quickly resolve the issue by selecting a return type.

## Installation/Setup

1. Clone this repository
2. Start mongoDB server locally
3. Run npm install
4. To run locally, use command npm run dev

## Features

- React Hooks to make the code cleaner and easier to read. <https://reactjs.org/docs/hooks-intro.html>
- React Context for passing properties required by many different components. <https://reactjs.org/docs/context.html>
- App.js using Context:

```
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import BooksState from "./context/Books/BooksState";
import ArticlesState from "./context/Articles/ArticlesState";
import AuthState from "./context/Auth/AuthState";
import AlertState from "./context/Alert/AlertState";
import CollectionsState from "./context/Collections/CollectionsState";
import VideosState from "./context/videos/VideosState";
import Collections from "./Components/Collections";
import Navbar from "./Components/Navbar";
import BookSearch from "./Components/BookSearch";
import Login from "../src/Components/Auth/Login";
import Register from "../src/Components/Auth/Register";
import setToken from "./utils/setToken";
import Alerts from "./Components/Alerts/alerts";
import About from "./Components/About";
import "./App.css";

if (localStorage.token) {
  setToken(localStorage.token);
}
function App() {
  return (
    <AuthState>
      <CollectionsState>
        <AlertState>
          <VideosState>
            <BooksState>
              <ArticlesState>
                <Router>
                  <Navbar />
                  <div className="container-fluid">
                    <Alerts />
                    <Switch>
                      <Route exact path="/" component={BookSearch} />
                      <Route
                        exact
                        path="/collections"
                        component={Collections}
                      />
                      <Route exact path="/login" component={Login} />
                      <Route exact path="/register" component={Register} />
                      <Route exact path="/about" component={About} />
                    </Switch>
                  </div>
                </Router>
              </ArticlesState>
            </BooksState>
          </VideosState>
        </AlertState>
      </CollectionsState>
    </AuthState>
  );
}

export default App;
```

### Components

- App
  - SearchBar Books/Articles COMPONENT
  - Books Toggle (Author, Title) COMPONENT
    - AuthorResults List (Name, Titles, Image) COMPONENT
      - AuthorItem COMPONENT
      - AssociatedArticleItem COMPONENT
    - TitleResults List (Titles) COMPONENT
      - TitleItem COMPONENT
  - Articles COMPONENT
    - ArticlesResults List (Articles, Videos) COMPONENT
      - Item COMPONENT
  - Login/Register COMPONENT
    - Save Collection

## Technologies

### Frontend

- [React](https://reactjs.org/)
- [Material Design](https://materializecss.com/about.html)

### NPM

- [Axios](https://www.npmjs.com/package/axios)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [xml-js](https://www.npmjs.com/package/xml-js)
- [express=validator](https://www.npmjs.com/package/express-validator)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [config](https://www.npmjs.com/package/config)

### Database

- [MongoDB](https://docs.mongodb.com/manual/)
- [Mongoose](https://www.npmjs.com/package/mongoose)

### Backend

- [Express](https://expressjs.com/)

### Version Control / Deployment

- [Git](https://git-scm.com/doc)
- [Heroku](https://devcenter.heroku.com/categories/reference)

### Approach

| Time    |                                      Task                                      |
| ------- | :----------------------------------------------------------------------------: |
| 1 Day   | Discuss project ideas, create wireframes, develop outline of project structure |
| 2 Days  |                     Initial UX design and front end setup                      |
| 2 Days  |                     Back end set up and complete UX design                     |
| 1 Day   |            Testing, troubleshooting, refining styling of components            |
| 1/2 Day |                                Final polishing                                 |
| 1/2 Day |                                   Deployment                                   |

## Challenges

### Authentication

- When a user attempts to log in, our login function is called. It is a global function from auth context.
- The Login function makes a post request to an authentication API. On the backend this will check if username and password exists. If either username or password is incorrect an alert is triggered. Alerts are handled by our Alert Context.
- After successful authentication a JSON Web Token is put in local-storage so the user can stay logged in as they navigate and use the application.

- Authentication Challenge Code Snippet

```
const [state, dispatch] = useReducer(AuthReducer, initialState);

  // Load User

  const loadUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try {
      const res = await axios.get("/api/auth");
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    } catch (error) {
      dispatch({ type: AUTH_ERROR });
    }
  };
```

### Git Workflow

- During the first 3 days of working on the project as we built the application structure and were making significant changes as we finalized our design, we ran into merge conflicts using Git. We resolved these conflicts by screensharing and communicating changes in Slack so that we were sure our repository held the correct code, and that all group members were working off the same version. Slack communication when making pull requests was particularly useful in ensuring that all members knew when to pull the latest version.

## Possibilities for Future

- Paid subscription that allows research articles to be returned by subscription scholarly article services
- Ability to publish collections for other users to explore
- Greater personalization of profile -- avatar, email address, content preferences, etc...

##Credits
[Love Nosa-Omorogiuwa](https://github.com/lnosaomok)
[Kimberly Diehl](https://github.com/kmac783)
[Graham Squires](https://github.com/GDS83192)
>>>>>>> 81a35f537a04597dfa963c50c372e85997633c1c
