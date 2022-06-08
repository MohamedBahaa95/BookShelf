
import { useState, useEffect } from "react";
import * as BooksApi from "./BooksAPI"
import SearchPage from "./SearchPage";
import MainPage from "./MainPage";
import "./App.css";
import { Routes, Route } from "react-router-dom";


const App = ()=> {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {  
    const getAllBooks = async() => {
      let res = await BooksApi.getAll()

      setAllBooks(res);
    };

    getAllBooks();    

  },[]);
  
  const bookUpdateHandle = (updatedBook)=> {
    let updatedlist = allBooks.filter( (f)=>  f !== updatedBook );
    
    setAllBooks([...updatedlist, updatedBook]);
  };

  return (
    <Routes>
      <Route path="/SearchPage" element={ <SearchPage allBooks={allBooks} UpdateHandle={bookUpdateHandle} /> } />
      <Route path="/" element={ <MainPage allBooks={allBooks} UpdateHandle={bookUpdateHandle} /> } />
    </Routes>
  );
}

export default App;