import React from 'react';

import RouteAdmin from "./router/post/router";


import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return ( <Routes>
    <Route path="/*" element={ <RouteAdmin />  } />
 
</Routes>)
}

export default App;

