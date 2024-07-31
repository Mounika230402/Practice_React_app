import React, { useContext } from "react"
import { ContextVariable } from "./index.js";


const Home = () => {
    const {theme,color,ChangeColor}=useContext(ContextVariable)
    
  return (
    <div style={{backgroundColor:theme}}>
      <h1 style={{color:color}}>Welcome To Home</h1>
      <button onClick={()=>{ChangeColor()}} style={{backgroundColor:color,color:theme}}>Mode</button>
      <p style={{color:color}}>
      Context provides a way to pass data through the component tree without having to pass props down manually at every level.

In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.

When to Use Context
Before You Use Context
API

React.createContext
Context.Provider
Class.contextType
Context.Consumer
Context.displayName
Examples

Dynamic Context
Updating Context from a Nested Component
Consuming Multiple Contexts
Caveats
Legacy API
When to Use Context
Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language. For example, in the code below we manually thread through a “theme” prop in order to style the Button component:
      </p>
    </div>
  )
};

export default Home;
