# Inside Cover
An application to keep track of all your notes & quotes from books you read.

Later revisions will tie into Good Reads, Audible & Google Books to integrate with particular pages, lines and book quotes.

## Technologies
- React
- Node.js
- Express
- MongoDB

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Getting Started
`NODE_ENV=development nodemon index.js`


## Feature Todo
1. Update webpack to use stylus
1. Sync with GoodReads reading list
  - cron --> to grab books from good reads on login
  - https://github.com/jaredhanson/passport-goodreads
  - pull in books based on your user first then integrate other users into the models
  - using passport with authentication
  - pull books from goodReads - create a new book, check book based on ISB number
2. Sync search with Google Books (for quotes)
  - integrate with the front end
  - elastic search
3. Sync with Audible to pull in reading list
  - pull in notes from Audible Books API
4. Add a fuzzy search ability to add quotes instead of through book shelf or already reading book section

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).