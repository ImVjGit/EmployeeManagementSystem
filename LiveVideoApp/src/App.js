import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import { BrowserRouter, Routes, Route, useNavigate, Navigate ,Outlet, MemoryRouter, Link } from 'react-router-dom'
import Navigation from './components/shared/Navigation/Navigation';
import Login from './pages/Login/Login';
import Authenticate from './pages/authenticate/Authenticate';


const isAuth = false;

function App() {

  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="*" exact={true} element={<Home />} />
         <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} /> 
        
         <Route path="/authenticate" element={
         <GuestRoute >
         <Authenticate /></GuestRoute>} />  
         

          {/* <Route  element={<GuestRoute />}>
          <Route path="/authenticate" element={<Authenticate/>}/>
        </Route>   */}
      </Routes>
    </BrowserRouter>
    
  );
}
const GuestRoute = ({ children, ...rest }) => {

  return (

    <Routes>
        <Route
          {...rest}
          render={({ location }) => {
            return isAuth ? (  
              <Navigate  to={{ pathname: '/rooms', state: { from: location },
                }}
              />
            ) : (
              children
            );
          }}
        >

        </Route>
</Routes>

    

  );
}


export default App;
