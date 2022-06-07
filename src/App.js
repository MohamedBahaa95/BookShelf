
import { useState } from "react";
import SearchPage from "./SearchPage";
import MainPage from "./MainPage";
import "./App.css";


const App = ()=> {
  const [showSearchPage, setShowSearchpage] = useState(false);

  const pageDisplayHandle = () => {
    setShowSearchpage(!showSearchPage);
  };

  return (
    <div className="app">
      {showSearchPage ? (
        <SearchPage SearchPageHandle={pageDisplayHandle} />
      ) : (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          
          <MainPage />
          
          <div className="open-search">
            <a onClick={pageDisplayHandle}>Add a book</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
