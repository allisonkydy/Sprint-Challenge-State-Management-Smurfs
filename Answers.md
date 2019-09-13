1. What problem does the context API help solve?

Context API helps to simplify state managemnt and to avoid the problem of prop drilling, or passing props through levels of component tree. It's really useful when you have global data that is shared by many components.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

The `store` is an object that holds global state for the entire app -- it's known as a 'single source of truth' because it's meant to be immutable. You cannot change the store directly, only make copies of it that are updated and replace the original upon certain events in the UI. The `actions` are what get dispatched when those events take place -- they contain an action type and sometimes data needed to update the state. `reducers` are pure functions responsible for copying the current state and making changes as dictated by the `actions`. Because they are pure functions, they behave predictably and prevent problems that could arise as a result of inconsitent state.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is state shared across many components, and managed by systems like Redux or Context API. Component state is only relevant to one or two components, like state in a form component used for controlling inputs. If the state doesn't need to be shared outside one or maybe two components, then it makes more sense for it to be component state. If state needs to be shared across many components, especially components that are deeply nested in different branches of the tree, then it belongs in Application state.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

`redux-thunk` is middleware the intercepts our `action-creators` so that instead of returning an action object, they return a function that takes in a `dispatch` function as an argument. This allows us to handle async actions inside `action-creators` before the actions flow to the reducers, which are synchronous. We can dispatch multiple actions, conditionally dispatch actions depending on the outcome of the async code, or stop the action altogether.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Although it took me a bit to get used to the syntax, I ended up liking Redux the most after trying out the Redux hooks and using the Redux dev tools. The Redux hooks look cleaner and offer a bit more control by revealing the dispatch function, and the Redux dev tools are so intuitive and make keeping track of state really easy. 