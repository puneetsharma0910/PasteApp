import { createBrowserRouter, Router, RouterProvider } from "react-router";
import './App.css'
import  { Toaster } from 'react-hot-toast';
import Home from "./components/Home";
import ViewPaste from "./components/ViewPaste"
import Navbar from "./components/Navbar";
import Paste from "./components/Paste";
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <div>
        <Navbar/>
        <Home/>
        
      </div>
      
    },
    {
      path: "/pastes",
      element: 
      <div>
        <Navbar/>
        <Paste/>
      </div>
    },
    {
      path:"/pastes/:id",
      element:
      <div>
        <Navbar/>
        <ViewPaste/>
      </div>
    }
  ]
)
function App() {


  return (
   <div className="App">
         <Toaster 
          position="top-right"
          reverseOrder={false}/>
    <RouterProvider  router = {router}/>
   </div>
  )
}

export default App
