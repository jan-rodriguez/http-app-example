import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from "./Home";
import Item from "./Item";
import './App.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/item/:itemId",
    element: <Item/>
  }
]);


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <RouterProvider router={router} />
      </header>
    </div>
  );
}

export default App;
