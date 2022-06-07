
import SearchPage from "./SearchPage";
import MainPage from "./MainPage";
import "./App.css";
import { Routes, Route } from "react-router-dom";


const App = ()=> {

  return (
    <Routes>
      <Route path="/SearchPage" element={ <SearchPage/> } />
      <Route path="/" element={ <MainPage/> } />
    </Routes>
  );
}

export default App;