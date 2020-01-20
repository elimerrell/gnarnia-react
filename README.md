[![Build Status](https://travis-ci.com/elimerrell/gnarnia-react.svg?branch=master)](https://travis-ci.com/elimerrell/gnarnia-react)

A single page application that allows users to get real-time weather for ski resorts around the Western US.

The app is live at the following link: http://gnarrrnia.herokuapp.com/

This app uses a Rails API backend with a PostgreSQL database. The database stores location data for ski resorts using latitude and longitude (decimal degrees).

We used the Mapbox GL API to diplay location data and the Dark Sky API to fetch weather data for each location.