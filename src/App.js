import React from 'react';

import RouteAdmin from "./router/post/router";
import Login from "./page/post/user/login";
import Register from './page/post/user/register';

import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return ( <Routes>
    <Route path="/*" element={ <RouteAdmin />  } />
    <Route path="/login" element={ <Login />  } />
    <Route path="/register" element={ <Register />  } />
</Routes>)
}

export default App;

