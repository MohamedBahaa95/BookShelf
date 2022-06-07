# MyReads Project

This is the complete template for the final assessment project for Udacity's React Fundamentals course.

To get started right away:

- install all project dependencies with `npm install`
- start the development server with `npm start`

What You ll find

```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── CreatCard.js # Basic Component that Builds Up Books Card.
    ├── MainPage.js # The Page Where User Can Display his Books within the three main Categories.
    ├── SearchPage.js # The Page Where User Can Search and Add New Books into His Main Page.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

## Backend Server

The Following HTTP routes Have been Implemented..
- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)


```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request


## Important

I am not comfortable with Using Routes, But if it is a must I will gladly do it.

## Details
 The Static Starte Code was Re-Designed to be Dynamic through ...

 1- Creating sub-Pages (MAIN- Search)
  *- Adding the functionilty of Displaying User Books in Categories Categories to MainPage
  -- using hooks to initiate User's BookList and State to control Categories and select Options.

  *- Adding the functionilty of Displaying New Books Based on User Search to SearchPage
  -- using hooks to initiate default search Results and State to control select Options.

  ** using State to Switch Between the two pages.

 2- Creating CreateCard Component to Build the Basic Book Card displayed at both Main/Search Pages
  *- Adding the functionilty of Creating the Basic Book Card.