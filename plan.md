# App Idea

Mid term project - Twootr

# User stories

User Story | Job Story
as a <role> | When I <action>
I want <goal> | I want <goal>
so that <gain> | so that <gain>

## Story 1

As a user,
I want to change my name
So that I can post with my own name

## Story 2

As a user,
I want to read twoots
So that I can see my posts and other people's posts


## Story 3

As a user,
I want to be able to create new twoots.
So that I can write and post my own twoots.

## Story 4

As a user
I want to get twoots from server
So that I can read other people's posts


## Story 5

As i user,
I want to see every twoot saved on a server,
So every time that I refresh the page, the twoots are still there.


## Story 6
As a user
I want my twoots to be validated
So that I will know what to fix before sending a twoot.


## Story 7
As a user,
I want to see the counter updating after every letter typed on the input box for post a twootr.


## Story 8
As a user,
I want to like, save or retwoot each twoot
So that I can interact with it.


## Story 9

As a user,
Every time that I click on to write a new text, it should focus on the input.


## Story 10
Time must show how many days ago was posted the twoots (days)
As a user,
I want to see how many days ago a twoot was posted
So that I can easily know when how old it is.



# Data Structure

```js
{
newTwoot: {
    author:"Henry David Thoreau",
    content:"Many men go fishing all of their lives without knowing that it is not fish they are after.",
    authorSlug:"henry-david-thoreau",
    dateAdded:"2022-07-06”
}
}
```

# HTML Structure

- body
  - header
    - h1 title
  - main
    - section account
      - form new account
    - section transaction
      - form new transaction
        - form new category
    - section account summary
    - section transactions list
      - div filter
      - table

# Component Structure

- App
  - Header
  - Main (accounts, transactions)
    - Account
    - Transaction
      - Category (categories)
    - Account Summary
    - Transactions List
      - Filter
      - Table
        - TableRow

# Data Map
