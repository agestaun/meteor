# METEOR GAME

Destroy the meteor to save the earth! The fate of the planet is in your hands.

## How to run it

#### Install the dependencies
    npm run install

#### Run the project
    npm run start

Press "i" to run iOS or "a" to run Android on the terminal.

## Run the tests
    npm run test

## TODOs
You can see them on the [GitHub Repository](https://github.com/agestaun/meteor/issues?q=is%3Aissue).

## About the project
Here are the most important technical decisions for the project.

### Navigation
Uses React Navigation to navigate through the screens. Although I am more familiar with React Native Navigation, I find React Navigation to be better structured and more user-friendly.

### Storage
Uses AsyncStorage to persist data. Good an easy option to save storage in a safe way.

### State Management
Uses MobX-State-Tree. I decided to use it into because it provides essential structure and some tools for scaling applications. In my opinion, MST offers enhanced readability compared to Redux, and due to my familiarity with it, I made the decision to utilize MST. Additionally, MST relies on MobX, which offers observable values, a valuable feature for medium to large-scale projects.

### Animation
Uses Reanimated to make animations. Another option would be react-spring, but I am not very familiar. It could also use the animation module provided by React Native.

### Testing
Uses jest. However, in my opinion Vitest is a better option, because it's really fast. On the other hand, it takes time to be configured, and this project was already very time-consuming.

### Others
I don't rely too much on comments as I believe that well-named functions, variables, and other elements in code make them redundant. A good code is the one that doesn't require the use of comments.
However, in certain situations, comments can be valuable for enhancing clarity and providing context.


