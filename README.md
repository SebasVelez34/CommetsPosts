## Available Scripts

In the project directory, you can run:

### `npm install`
Installing all project dependencies runs without errors.
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Scaffolding of the application:
  - Api: Grouping and configuration of Comments and Posts requests.
  - Components:
      - List: It is the component that renders all the posts obtained.
      - Post: Displays all the posts as cards and when clicked opens a modal.
      - Modal: Shows the content of the selected post and the related comments.
      - Comment: Displays a form with the required data to add a new comment to the selected post.
      - Navbar: Displays the top bar
  - Screens:
      - Home: Renders everything needed for this test and encapsulates the components mentioned above.
  - Store:
      - Redux configuration.
      - Posts and Comments actions and reducers.
  - Styles:
      - Configuration of the scss and styles of components and others.
  - Utils:
      - General use files and commonly used functions.
### Functionalities:
  - Get Posts through request storing the state in redux.
  - Obtain Comments through request storing the state in redux.
  - Relate the Comments with their belonging posts.
  - Show Posts in a list
  - Show related Comments of the Post in a modal window
  - Add new comments to the Post and save them in the redux store.
  - Show notification when saving new comment.

