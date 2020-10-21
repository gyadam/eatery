# eatery

This project is a simple restaurant search app where users can:
* view a paginated list of restaurants fetched from an API
* filter the restaurants by State and Genre
* search for restaurants using a searchbox

The application is live at:

#### https://eatery-restaurants.herokuapp.com/

You should see something like this:

<kbd>
  <img src="/images/eatery-screenshot.png" alt-text="Screenshot of the Eatery app" width=600>
</kbd>

### Tech:
* React for the frontend UI
* Heroku for deploying the app

The project was bootstrapped with create-react-app. No third-party libraries were used for the filter/search/pagination features. Heroku was used to set up automatic deploys, which run every time a commit is pushed to the master branch of this repo.

### Running the development server
To run the application in your local environment, clone the repo and install dependencies:

```
npm install
```

Then, start the local development server:
```
npm start
```
