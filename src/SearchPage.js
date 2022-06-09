
import { useState } from "react";
import { Link } from "react-router-dom";
import CreateCard from "./CreateCard";
import * as BooksApi from "./BooksAPI"

const SearchPage = ({allBooks, UpdateHandle})=> {  
  const [results, setResults] =useState([]);
  const [searchValue, setSearchValue] = useState("");

  const findBooks = async(value) => {
    let res = await BooksApi.search(value, "2");

    if(res.error === "empty query") { setResults([]); }
    else{ 
      let filteredRes = res.filter( (f) =>  f.imageLinks !== undefined );

      for(let b of allBooks) {
        filteredRes.map( (book)=> {
          if(b.id === book.id) { book.shelf = b.shelf; }
          return ;
        } )
      };

      setResults(filteredRes);
    }
  };

  const changeHandler = (event)=> {
    const {value} = event.target ;
    setSearchValue(value);

    if(value !== "") {
      findBooks(value);
    }
    else { setResults([]); }   
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search" >
          Close
        </Link>

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
          {searchValue && results.map( (book) => {
            return (
              <CreateCard key={book.id} Book={book} UpdateHandle={UpdateHandle} />
            )
          } )}
        </ol>
      </div>
    </div>
    )
}

export default SearchPage;