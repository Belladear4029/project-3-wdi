# WDI 34 Project 3
## A MEAN Stack App
###### by Bella Dear, Bianca Jemsten and James Newell

The goal of project 3 was to build a full MEAN stack app in a team. We chose to build an app that allows the user to search for an event they're going to by using [Skiddle's Event API](https://github.com/Skiddle/web-api/wiki/Events-API), and by fetching the coordinates of the event we generated a list of restaurants and bars using [Google Places API](https://developers.google.com/places/web-service/intro). The user can then add other users to the event and calculate the travel time from their current position using the [City Mapper API](https://citymapper.com/api).

Technologies used in the project were Angular, JavaScript, SCSS, HTML, Node.js, MongoDB, Express.js and Webpack.

Our app is deployed on [Heroku](https://fast-plains-52637.herokuapp.com/#!/).


<p align="center"><img src="https://i.imgur.com/achGguo.gif" width="700"></p>

***

#### The planning process
###### Wireframes
<p align="center"><img src="https://i.imgur.com/4FNokmo.png" width="700"></p>

We used [Draw.io](https://www.draw.io/) to plan out the interface of our app. It helped us to envision how the user flow would be as well as to make sure all members of our team were on the same level as to how certain features would look and work.

###### Task planning
<p align="center"><img src="https://i.imgur.com/SjEDjRD.png" width="700"></p>

Before the project started we planned out every task that had to be done and put them into [Trello Cards](https://trello.com/biancajemsten/boards). We used the color labels to indicate if it was a fontend or backend task(blue vs. red) and if it was a task crucial for MVP or an add-on (green vs. yellow). Initially everything was in the backlog. Then as we started building the app we moved cards to the other categories which were Doing (frontend), Doing (backend), To do, Bugs, and Done.

#### The App

###### Displaying a Bundle
<p align="center"><img src="https://imgur.com/m0bFpCD.png" width="700"></p>

We had a page that would display a bundle and depending on whether the current user had created this bundle, certain elements were visible. As seen in the image, the chosen event, restaurant and bar are shown with information about each one. The delete button was only visible if the current user was the creator.

<p align="center"><img src="https://imgur.com/D0VnmbN.png" width="700"></p>

On the same page we added a few more features including a travel time calculator, google maps and an attendee adder.

The user is able to search for their current location, using Google Autocomplete. They then decide whether they would like to go to the bar or restaurant first. Clicking the 'Get Travel Time' button then calculates the driving time from their entered location to either the bar's or restaurant's location depending which is selected. If a bundle only consists of either a restaurant or a bar. The location will automatically be chosen and the radio buttons will not show.


#### Challenges
- Bundle New page needs loading time

#### On the to-do list
- Mobile responsiveness
- Bundle Edit page
- Use directives to clean up the code
