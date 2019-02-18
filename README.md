# workshop-react

## Task-0.0

Once you've cloned this repo, you need to do a few more things to get the environment set up. Let's get started with the first task.

### Task-0.1

First thing to do is to install the dependecies required to run the react development environment on your machine. Do this by going to the directory in a console and running `npm install` to install the dependecies required.

### Task-0.2

Second thing to do is to run the server to start the environment. You can do this with `npm start` and after a few seconds, it should state that the project can be viewed in the browser. It updates live, so whenever you make a change within your code and save it, it reloads the page automatically.

## Task-1.0

To start the first actual task, you will need to uncomment a few lines of code within `src/App.js`. Find these by searching (`CTRL/CMD + F`) the keyword: `Task-1.0` and uncomment by using (`CTRL/CMD + /`). Check if you got no errors or warnings, otherwise you should look for more lines to uncomment.

### Task-1.1

Within the `src/components` folder go to the `level1` folder and open `Level1.js`. Uncomment the heading from this component to see the name being used from the input field in `src/App.js`. Change the name on the webpage and see what happens.

### Task-1.2

What is a list of movies without any movies in it? Let's create some Movie components! First, at the top of the file uncomment the `import Movie from "./Movie";` to import the Movie component. Now, let's fill the list. We set you up with an examle component within the `ul`. Uncomment it and edit the title value with your own movie title.

### Task-1.3

Now that you have a single Movie component, you should be able to create some more components to show of the movies that you have seen. Create at least 2 more Movie components to fill the list up to at least 3 seen movies.

## Task-2.0

Good job on completing Task-1! Now let's create a showcase for your 3 favorite movies. The first thing to do is to import the `Level2` component. Go back to `src/App.js` and make the component show up without any errors or warnings. Don't forget to pass down a name to the `Level2` component.

`Tip! Uncomment Task-2.0`

### Task-2.1

Ah, nice! Somebodies favorite movies heading showed up. Maybe add your name to it? Check if you passed a prop called `name` in `src/App.js` to the `Level2` component. Now use the passed prop in the component `Level2` to the start of the heading.

`Tip! Look back in the Level1 component to see how the prop name was included`

### Task-2.2

Now, we know who's favorite movies we are dealing with. Let's actually showcase your favorite movies! Try adding 3 `Card` components with the props `title` and `content` in the `div` with class `row`.

`Tip! Referencing old material is a good way to refresh your mind`

## Task-3.0

Cool to see some of your favorite movies! Now we'd like to know your favorite plots within movies. But first, let's import the `Level3` component and add the prop name to it in `src/App.js` and use it below Task-3.0.

### Task-3.1

Within the `Level3` component, use the prop name in the heading to let everyone know who they're dealing with. 

### Task-3.2

Now create a state within the component. You can uncomment the constructor for now. Maybe edit these objects in this array named list within the state to reflect your favorite plots?

### Task-3.3

Let's uncomment the code below Task-3.3 to dynamically render all the objects in the list array within the state. This `map` function is a JavaScript function to loop through entries within an array and return something.

`Tip! We think you might have imported the same component in Level2.js as you should be using here`

## Task-4.0

Wow! You've come this far! Now, let's start battling the final boss. Firstly import the `Level4.js` component in `src/App.js` and pass the name as a prop to the component.

### Task-4.1

Task-4.1
