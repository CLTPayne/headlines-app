# Headlines

A web application to display the latest news headlines.

### Quickstart:
#### How to install the code:
1. Clone this project ```git clone https://github.com/CLTPayne/headlines-app.git```
2. Change into the directory ```cd headlines-app```
3. Run ```npm install``` to add module dependencies

#### How to use the website:
1. Launch development server with ```npm start``` and visit ```localhost:3000```
2. When finished with the application, close the server with ```^c```

#### How to use the website:
1. Feature tests via Cypress CLI tool:<br/>
  a. Ensure development server is running with ```npm start```<br/>
  b. ```$(npm bin)/cypress run --browser chrome```<br/>
2. Unit tests via Jasmine in the browser with ```open SpecRunner.html```

#### Test coverage:
1. Cypress final test suite for feature tests:
![cypress]()

2. Jasmine final test coverage:
![jasmine]()

### User Stories:
```
As an avid news follower
So that I know what is going on in the world  
I want to see a list the latest news headlines

As an avid news follower
So that have the information I need
I want to see headlines relating to a specific search word

As an avid news follower
So that I'm not overwhelmed with a never ending stream of content
I want to see 20 headlines per page

As an avid news follower on-the-go
So that I have information on demand
I want to have a great experience on mobile devices
```

### Mockup:
Web (full screen) optimised:
![web](./readme_images/Financial_Headlines_Web_Mock_Up.png)

Mobile optimised:
[Interactive version](https://xd.adobe.com/view/0ca788f3-1297-493d-68fa-76e119915efd-7a96/)

### Diagram:
![diagram]()

### Code Style:
JavaScript and node.js

### Code Example:
```
function Headline(headline) {
  this.headline = headline;
}

Headline.prototype.text = function() {
  return this.headline.title.title;
};

Headline.prototype.subheading = function() {
  return this.headline.editorial.subheading;
};
```

### Approach to solving the challenge:
1. Investigate the FT Developer APIs using Postman to test a range of endpoints and see the full scope of data available via the various aspects and curations.
2. Explore feature test options and selected Cypress over Nightwatch as have used it previously. Deeper dive into the pros and cons of stubbing network requests (as this is crucial to the page content). Decided to stub as they are faster and the FT headlines library is external and assumed to be reliably tested, Cypress also advises that stubs are perfect for JSON APIs.
3. Research server side rendering (vs client side which have previously used)- good for SEO purposes as search engines can see a rendered page without having to run JavaScript.
4. Focused on the BDD cycle so drafted user stories as per the project requirements.
5. Set up Express app to serve the application.
6. Research the FT style and layout and created a mockup design to fit the user stories using Adobe XD (as shown above).
7. Create basic HTML page to fit the mockup and user stories, and served via the Express app.
8. Decide on MVC model in order to keep code as clean as possible and easier to test in isolation. Also keep presentation logic separate from business logic.
9. Explore template engine options for node.js. Not previously used a template engine so reviewed pug (due to recommendation in Express docs), mustache as understand it is especially suited for manipulating JSON in Javascript applications, and ejs. Decided on ejs due to considerably wider usage (2.1m weekly npm downloads) and volume of documentation.
10. Explore FT Origami component library and understand how best to bundle the code for serving. Potentially use: colours, fonts, grid (as includes responsive features), footer, buttons, header, forms, social icons, image-service (for resizing images).
11. Set up basic ejs framework with range of origami components and basic css styling to check functionality. Split elements out into partial views that can be reused and incorporated in a page as needed (inspired by the logic of libraries like React that give you components as reusable building blocks)
12. Install eslint and run with ```./node_modules/.bin/eslint [file name]```
13. Install Jasmine test runner for unit tests.
14. TDD business logic for the headlines and list of headlines models.


### Status at the point of push:
1.

### Intended next steps:
1. Use the lifecyle info for each news story headline to display if a story was published in the last 12 hours - to give the user info as to whether a story is breaking news.
