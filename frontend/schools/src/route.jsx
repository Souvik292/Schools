import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Addschool from "./addschool";
import Showschool from "./showschool";
import App from "./App";

function Reactroute() {
  return(
       <Router>
      <Routes>
        <Route path="/addschool" element={<Addschool />} />
        <Route path="/" element={<App />} />
        <Route path="/showschool" element={<Showschool />} />
      </Routes>
    </Router>
   
  );
};
export default Reactroute;