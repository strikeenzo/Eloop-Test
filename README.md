# Eloop

This is a Eloop Test Project.

## Summary

Scraped all of the infomation on the Medium, and displayed it on our web apps.

We used selenium for scrapping data and fast api for backend server,
so we can easily scrapped the articles and followers from the Medium

## Frontend

### How to run

- Install `node_modules`

  `cd frontend`

  `yarn`

- In the project directory, you can run:

  `cd frontend`

  `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Technical Stacks

- React ^18.2.0
- TypeScript ^4.4.2
- TailwindCSS ^3.3.2
- redux/toolkit ^1.9.5
- axios ^1.4.0

## Backend

### How to run

- Install

  `cd backend`

  `pip install -r requirements.txt`

  `uvicorn server:app --reload`

Runs the app in the development mode.\
Open [http://localhost:8000/docs](http://localhost:8000/docs) to view it in the browser with Swagger API docs.

### Technical Stacks

- Fast API
- Selenium
