import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import NavbarComponent from './Components/NavbarComponent';
import FeedPage from './Pages/FeedPage';
import Layouts from './Layouts';
import PostDetails from './Pages/PostDetails';

const router = createBrowserRouter([
  {
    path:'',element:<Layouts/>,children:[
      {index:true,element:<FeedPage/>},
      {path:'post-details/:id',element:<PostDetails/>}
    ]
  }
])
function App() {

  return <>
  <RouterProvider router={router}>

      <Layouts />

  </RouterProvider>
  </>
}

export default App
