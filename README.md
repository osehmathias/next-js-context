## Next JS Persistent Global State using Context, Reducers, and LocalStorage

This repository contains my preferred state management set up/

It is extremely lightweight, does not require additional packages like Redux, but still performs efficiently.

This set up uses:

- `useEffect`
- `useReducer`
- `createContext`
- `useContext`
- `useMemo`

In this particular instance, I have adjusted it to persist a shopping cart in State and in LocalStorage; however, it can be adapted for almost any use.

### Core Components

#### `context/AppReducer.js`

Contains the initialState as well as the reducer

#### `context/AppContext.js`

Creates the Context, persists State in localStorage, and updates state from localStorage

#### `pages/_app.tsx`

Wraps the app in a Provider for the global state

### How to use

In any component, throughout the app, you can...

`import { useAppContext } from "context/AppContext";`

`const { state, dispatch } = useAppContext();`

Then, either access the `state` variable...

Or, `dispatch`...

```
<button
          onClick={() =>
            dispatch({
              type: "add_item",
              item: {
                price: {
                  amount: "string",
                  currency: "string",
                },
                subcategory: ["121212"],
                quantity: 1,
                name: "string",
                category: "string",
                sku: "string",
                brand: "string",
              },
            })
          }
        >
          +
</button>
```
