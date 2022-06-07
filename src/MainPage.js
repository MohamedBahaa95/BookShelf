
import { useState, useEffect } from "react";
import CreateCard from "./CreateCard"
import * as BooksApi from "./BooksAPI"

const MainPage = () => {
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
    <div className="list-books-content">
      <div className="bookshelf">
        <h2 className="bookshelf-title">Want To Read</h2>
        
        <div className="bookshelf-books">
          <ol className="books-grid">
            {allBooks.filter( (b) => b.shelf === "wantToRead").map( (book) => {
              return (
                <CreateCard key={book.id} Book={book} UpdateHandle={bookUpdateHandle} />
              )
            } )}
          </ol>
        </div>
      </div>

      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        
        <div className="bookshelf-books">
          <ol className="books-grid">
            {allBooks.filter( (b) => b.shelf === "currentlyReading").map( (book) => {
              return (
                <CreateCard key={book.id} Book={book} UpdateHandle={bookUpdateHandle} />
              )
              })
            }
          </ol>
        </div>
      </div>

      <div className="bookshelf">
        <h2 className="bookshelf-title">Read</h2>
        
        <div className="bookshelf-books">
          <ol className="books-grid">
            {allBooks.filter( (b) => b.shelf === "read").map( (book) => {
              return (
                <CreateCard key={book.id} Book={book} UpdateHandle={bookUpdateHandle} />
              )
            } )}
          </ol>
        </div>
      </div>
    </div>
  )
};

export default MainPage;


    {/* {allBooks.map((book) => {
      return (
        <li key={book.id}>
          <div className="book">
            <div className="book-top">
              <div className="book-cover"
                style={{
                width: 128,
                height: 193,
                backgroundImage:`url(${book.imageLinks.smallThumbnail})`,
              }}
              ></div>
            <div className="book-shelf-changer">
                <select>
                  <option value="none" disabled> Move to... </option>
                  <option value="currentlyReading" > Currently Reading </option>
                  <option value="wantToRead" > Want To Read </option>
                  <option value="read" > Read </option>
                  <option value="none" > None </option>
                </select>
              </div>
            </div>

            <div className="book-title">{book.title}</div>

            <div className="book-authors">{book.authors}</div>
          </div>
        </li>
      )}
      )} */}