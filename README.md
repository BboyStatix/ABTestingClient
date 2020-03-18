# ABTesting Client
A frontend client with a built-in abstraction mechanism for AB testing. Simply use the loadVariant and loadStyles HOCs and use function composition to combine the two when needed to easily develop multiple variants of your screens. Normally, having multiple variants could result in a high level of complexity that becomes unmaintainable over time, but this repository's structure is built with that in mind to keep it maintainable no matter how many variants of a screen you have.

Link to server: https://github.com/BboyStatix/ABTestingServer

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* [NodeJS](https://nodejs.org/en/)
Please install node version >= 9.3.0. You can try installing with latest node version. If it doesn't work use 9.3.0.
You can use [NVM](https://github.com/nvm-sh/nvm) to set the node version.

### Installing

Install required dependencies:
To install client, navigate to 'client' in your terminal and run:
`npm install`
If installation fails, delete node_modules and package-lock.json and try again

To install server, navigate to 'server' in your terminal and run:
`npm install`
If installation fails, delete node_modules and package-lock.json and try again

## Running application
You must start the server and then the client

To run server:
cd to server and then run:
`npm start`

To run client:
cd to client and then run:
`npm start`
It should then automatically launch your browser in localhost:3000 and you should be able to see it

## Running tests
For both client and server you can run:
`npm run test`

## Using the application
The mechanism for choosing variant is random.
The variant that you are currently on is on the top left corner in the header. Just refresh the page a couple of times when you want to see the other variant. It will appear randomly.

## Built With
* [ReactJS](https://reactjs.org/) - The frontend library used
* [NodeJS](https://nodejs.org/en/) - Server
* [GraphQL](https://graphql.org/) - GraphQL

## Assumptions
1) The variants are screen level rather than having entirely different flows. By screen I mean a route, e.g. /app/1, /app, etc. Similar to how mobile apps have different "pages" that we navigate left and right throughout. In this sense, my assumption is that variants will still have the same UX flow in the sense of the next screen that they navigate to.

If the business requirements however are that different variants will have completely different flows e.g. different checkout flow, this is currently not supported. To support it we would probably need some sort of abstraction on the "UI Flow" level rather than "screen" or "container" level that I did here. The mechanism would be pretty similar though.

2) Function composition can be used if variants require both injection or styles AND loading the correct component. E.g. we can combine the withVariantStyles function with loadVariantComponent

## Advantages of tech stack chosen
With GraphQL we can lower the problem of overfetching. Some variants do not require that much data thus we can let the client decide what they want to query instead of burdening the server with ever-increasing complexity.

Also, normally there will only be one GraphQL schema which is visible to BOTH frontend and backend developers. Therefore frontend developers can easily know how to get the data they want.

## Limitations of current abstraction mechanism
If there are many variants then the bundle js size will become larger because client has to download all variants of a particular screen. If there are 100 variants of a screen client has to download them all even though they will only see one variant.


## Miscellaneous
Some of the tests on client side are not working
