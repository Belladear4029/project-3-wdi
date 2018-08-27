# ![image](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) WDI 34 Project 3
## Evening Angel
###### by Bella Dear, Bianca Jemsten and James Newell

The goal of project 3 was to build a full MEAN stack app in a team. We chose to build an app that would help plan the users evening by generating a list of restaurants and bars near a chosen event, within a given radius. Once all destinations are chosen, they can then invite friends to their evening and also calculate their travel time from a given location.

#### Technologies Used
HTML | SCSS | JavaScript (ES6) | MongoDB | Express | Angular | Node.js | Webpack | Mongoose | [Draw.io](https://www.draw.io) | [Trello](https://trello.com)

#### APIs Used
[Google Maps](https://developers.google.com/maps/documentation/javascript/tutorial) | [Google Place Autocomplete](https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete) | [Google Places](https://developers.google.com/places/web-service/intro) | [Skiddle](https://github.com/Skiddle/web-api/wiki/Events-API) | [Citymapper](https://citymapper.com/api)

Our app is deployed on [Heroku](https://evening-angel.herokuapp.com/).


<p align="center"><img src="https://i.imgur.com/achGguo.gif" width="700"></p>

***

### The Planning Process
#### Wireframes
<p align="center"><img src="https://i.imgur.com/4FNokmo.png" width="700"></p>

We used [Draw.io](https://www.draw.io/) to plan out the interface of our app. It helped us to envisage how the user flow would be as well as to make sure all members of our team were on the same page as to how certain features would look and work.

#### Task planning
<p align="center"><img src="https://i.imgur.com/SjEDjRD.png" width="700"></p>

Before the project started we planned out every task that had to be done and put them into Trello cards. We used the colour labels to indicate if it was a front end or back end task (red vs. blue) and if it was a task crucial for MVP or an add-on (green vs. yellow). Initially everything was in the backlog. Then as we started building the app we moved cards to the other lists which were Doing (Front End), Doing (Back End), To do, Bugs, and Done.

### The App

#### Displaying a Bundle
<p align="center"><img src="https://imgur.com/m0bFpCD.png" width="700"></p>

We had a page that would display a bundle and depending on whether the current user had created this bundle, certain elements were visible. As seen in the image, the chosen event, restaurant and bar are shown with information about each one. The delete button was only visible if the current user was the creator.

<p align="center"><img src="https://imgur.com/D0VnmbN.png" width="700"></p>

On the same page we added a few more features including a travel time calculator, google maps and an attendee adder.

<p align="center"><img src="https://imgur.com/GJCXDFB.gif" width="700"></p>

The user is able to search for their current location, using Google Autocomplete. They then decide whether they would like to go to the bar or restaurant first. Clicking the *Get Travel Time* button then calculates the driving time from their entered location to either the bar's or restaurant's location depending which is selected. If a bundle consists of only one, a restaurant or a bar. The location will automatically be chosen and the radio buttons will not show.

#### Creating a New Bundle

<p align="center"><img src="https://i.imgur.com/n1SoVo2.gif" width="700"></p>

**Searching for the event:**
The user enters the event they are going to into the search bar, which can take both single and multi-word searches. The *Find my Event* button is disabled until the user has indicated both a search word and the preferred radius for restaurants and bars near the event. The button triggers a GET request to the Skiddle API with the user's search word and returns up to 40 results.

**Searching for the restaurant:** After finding the correct event, the user clicks *Pick Event* which saves the event details, and sends a GET request to the Google Places API with the coordinates of the selected event and the chosen radius. This returns a list of restaurants. It also takes the place_id of each response from Google Places and sends a second nested request to Google Place Details. This allows the user to view things such as the opening times and the website of each place.

**Searching for the bar:** At this point, the user can choose if they want to pick one of the restaurants or click *Skip Restaurants* to select only a bar instead. The first option stores the data of the picked restaurant but both options call on the function shown below.

```
$scope.findBars = function(){
  $http({
    method: 'GET',
    url: 'api/findPlaces',
    params: {
      lat: pickedEvent.location.lat,
      lng: pickedEvent.location.lng,
      radius: $scope.radius,
      type: 'bar'
    }
  })
    .then(res => {
      $scope.bars = res.data.results;
      res.data.results.forEach(item => {
        $http({
          method: 'GET',
          url: '/api/findDetails',
          params: { place_id: item.place_id}
        })
          .then(res => {
            item.details= res.data.result;
          });
      });
    });
};
```

**Done:** The initial search bar has now been replaced with a submit button which the user can click when they are happy with their bundle. It sends a POST request with all the data of the bundle and redirects you to the show page of that bundle.


### Challenges

#### Creating a Bundle
One of the main challenges we faced when making this app was a racing issue when creating a new bundle. The process of retrieving data from the Skiddle API and Google Places API, depending on selected parameters, takes some time which meant the results would sometimes be displayed staggered or wouldn't be displayed at all.

#### Citymapper API
The Citymapper API is very limited and only returns the travel time for driving. We would have liked to provide the travel time for more modes of transport and also potentially directions. Learning from this, if we were to do this again we would try to use Google Direction API as this may give more data that we can work with and ultimately give the user a better experience.

### Further Additions

#### Mobile Responsiveness
The application would be perfect for anyone to use on the go especially with our use of Citymapper API with it's travel time calculator. Therefore developing the app so it is available on mobile would be a good addition to improve user experience.

#### Editing Bundles
Currently you are unable to edit a bundle you have created, you would have to delete it and start again. If we had more time we would have loved to add a feature to enable users to edit an existing bundle.

Given the complexities of retrieving the correct information and then having to repopulate the choices onto the page, we initially knew that a bundle edit function would prove problematic. However the user experience is key to us and our app so being able to edit a bundle is something we would have definitely liked to have added given we had more time.

#### Directives
When using cards as directives, they are very helpful to keep the code concise and tidy. We briefly attempted, in the limited time we had left, a 'bundle card' and an 'event card' for the user show page and bundle new page respectively. We had some issues with these as there were buttons within the cards that lost their function when the card directives were used. We couldn't quite figure out how to give each button within each card the correct function according to the specific card that is 'clicked'.

It is always important to keep your code concise and easy to read, especially for other developers as this is good practice for future projects. Therefore this addition is more for the developers rather than the users as it should not change the app itself.
