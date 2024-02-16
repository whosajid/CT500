# CT500

CT500 is a weather app that displays the current temperature and time of major cities around the world. The App displays a few major cities by default, but users can add or remove cities as well.

I used vanilla JavaScript to build this App. Stack overflow and ChatGPT helped a lot. For Autocomplete a find a github repo. That helped me build this feature.

This was my first JavaScript project, so I learned a lot of JavaScript concepts while building this app.I started with creating some arrays for cities, countries and timezones on python. I got the data from Natural Earth Data, and then passed that to a python script. Selecting cities was a real pain. Because I didn’t want to miss any major cities. After some thinking, I decided to filter the cities by their area and population.

To fetch the real time weather I am using OpenWeatherAPI. and local storage to save the user generated cities.

The responsive card layout is achieved in CSS using flexbox. I added some hover and active state in the design to keep the App visually interactive.
