## Around the World Searchbar - PoC

This project is a testing app, aiming to implement, test and create a preliminary feature that will be later integrated into the Liferay 7 widget "Liferay Around the World": https://github.com/alffox/liferay-around-the-world-widget

This repo is necessary for two main reasons:

- Working on a small, minimal, clean project helps to identify what exactly fails, without the noise of a larger project
- A Liferay react-based widget doesn't completely behave like a create-react-app, there are differences in the code and behavior

## How does this work?

The app should output a list of flags, generated from a JSON object and a search field underneath them. While typing into the search field, the list of flags should be filtered according to the text typed. This will make easier to search for a desired location and will help the app to be usable as the number of added locations grows.

## Technical details

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). 

The starting code used to implement the search bar is at: https://www.jondjones.com/frontend/react/components/how-to-build-a-filterable-search-bar-in-react