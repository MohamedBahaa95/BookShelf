
import { Link } from "react-router-dom";
import CreateCard from "./CreateCard"

const MainPage = ({allBooks, UpdateHandle}) => {

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>

      <div className="list-books-content">
        <div className="bookshelf">
          <h2 className="bookshelf-title">Want To Read</h2>
        
          <div className="bookshelf-books">
            <ol className="books-grid">
              {allBooks.filter( (b) => b.shelf === "wantToRead").map( (book) => {
                return (
                  <CreateCard key={book.id} Book={book} UpdateHandle={UpdateHandle} />
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
                  <CreateCard key={book.id} Book={book} UpdateHandle={UpdateHandle} />
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
                  <CreateCard key={book.id} Book={book} UpdateHandle={UpdateHandle} />
                )
              } )}
            </ol>
          </div>
        </div>
      </div>

      <div className="open-search">
        <Link to="/SearchPage" >Add a book</Link>
      </div>
    </div>
  )
};

export default MainPage;
