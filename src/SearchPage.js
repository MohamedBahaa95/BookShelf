
import { useState, useEffect } from "react";
import CreateCard from "./CreateCard";
import * as BooksApi from "./BooksAPI"

const SearchPage = ({SearchPageHandle})=> {  
  const [results, setResults] =useState([]);
  const [searchValue, setSearchValue] = useState("");

  const findBooks = async(value) => {
    let res = await BooksApi.search(value);

    if(res.error !== "empty query") { setResults(res); }
    else{ setResults([]); }
    console.log("results",res);
  };

  const changeHandler = (event)=> {
    const {value} = event.target ;
    setSearchValue(value);

    findBooks(value);
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <a
          className="close-search"
          onClick={SearchPageHandle}
        >
          Close
        </a>

        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={searchValue}
            onChange={changeHandler}
          />
        </div>

      </div>

      <div className="search-books-results">
        <ol className="books-grid">
          {results.map( (book) => {
            return (
              <CreateCard key={book.id} Book={book} UpdateHandle={false} />
            )
          } )}
        </ol>
      </div>
    </div>
    )
}

export default SearchPage;