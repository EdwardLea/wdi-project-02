# General Assembly WDI Project 2: React.js Hackathon

## Goal: To develop a React.js frontend web application that consumes publicly availably API data.
### Timeframe
2 days

## Technologies used

* HTML5 & JavaScript (ES6)
* React.js
* Webpack, Babel & Axios
* CSS3, CSS Animation, SCSS & Bulma
* Food Standards Agency & Zomato APIs
* Git & GitHub
* Heroku

## Application - Health & Tasty

A hosted version of the application can be found here ----> [react-health-and-tasty.herokuapp.com](https:/react-health-and-tasty.herokuapp.com)

### Application overview
Heath & Tasty is an application where users can discover food establishments in their local area and see the associated food hygiene rating as scored by the Food Standards Agency.

### Application Instructions
1. From the home page a user can see their current location and commence a search for local food Establishments in the surrounding area.

![screenshot - Home Page](https://user-images.githubusercontent.com/39096986/54819408-b01b6680-4c93-11e9-808c-555b32a18e17.png)

2. The search returns a list of Establishments in the local area, displaying the user rating from Zomato and also the food hygiene rating from the Food Standards Agency. A user can select an Establishment for more information.

![screenshot - Restaurant Index](https://user-images.githubusercontent.com/39096986/54819529-13a59400-4c94-11e9-93fa-2d2ca12bbabd.png)

3. The Establishment show page displays more detailed information on the Establishment including links to the restaurant menu and a map displaying Establishment's and user's location.

![Screenshot - Club Index](https://user-images.githubusercontent.com/39096986/54692484-02864700-4b1d-11e9-8435-dbe8b779a8d4.png)

## Process

This project was a paired coded with one other developer. We used a Kanban Board in the form of Trello to plan and manage our tasks. We regularly reviewed progress against our plan and 'timeboxed' tasks to ensure we were able to deliver a working product within the timeframe of the project.

Wireframes were produced at the start of the project to capture the purpose and layout of the application prior to any development taking place.

The application was heavily reliant on external API data. The first stage of our development was to throughly test the external API endpoints using Insomnia. The API documentation was used to gain an understanding of how data could be accessed and consumed. This process confirmed the data we were able to retrieve from both the Zomato and Food Standards Agency APIs.

Once we had confirmed the APIs provided a suitable dataset we began building the React components and functionality that matched the two datasets. This functionality was critical to the overall purpose of the application and ensured a suitable amount fo data was available to the application.

A map feature was added to the show page which displayed the location of the Establishment and user.

Simple styling was added to the application using Sass to provide improved usability.

### Challenges
Combining two API datasets provided challenges around matching Establishments from both datasets. For example the FSA API may name 'The Red Lion' pub instead of 'Red Lion' which caused issues when the data was combined to display on the index page. From an initial data set of 100 establishments we were only able to match around 20% with the Food Standards Agency dataset. This drastically reduced the number of Establishments we were able to display on the application. To improve our dataset we built a function which removed common naming inconsistencies, for example using '&' instead of 'and'. This increased our data matching between APIs to over 50% for a sample request. A screenshot of the code is shown below:

![Screenshot - Code Snipit 1](https://user-images.githubusercontent.com/39096986/54820834-5ec1a600-4c98-11e9-9563-ab6386d6be46.png)


### Wins

The first iteration of the application loaded slowly due to the size of data coming from the FSA API which all had to be matched against the Zomato dataset. To reduce the required processing time we were able to refine out API call to only return restaurants within a more specific category with a much small search radius. This was a great exercise in understanding and interpreting external API documentation. This change to the FSA AJAX request reduced a sample load time from approximately 10 seconds to less than 2 seconds.

## Future features
1. The application only works based on the user's current location, a location search functionality would be a useful.

2. Further improvements to API data matching between the Zomato and FSA API.
