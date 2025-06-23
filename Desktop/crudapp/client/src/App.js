import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import User from './components/getuser/User';
import Add from './components/adduser/add'
import Update from './components/updateuser/update';
function App() {
const route = createBrowserRouter([
  {
    path : "/",
    element : <User/>
  },
  {
    path : "/add",
    element : <Add/>
  },
  {
    path : "/update/:id",
    element : <Update/>
  },
])
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}
export default App;
