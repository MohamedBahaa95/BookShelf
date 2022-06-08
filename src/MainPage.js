
import { Link } from "react-router-dom";
import Shelfs from "./Shelfs";

const MainPage = ({allBooks, UpdateHandle}) => {
  const shelfNames = [ "Want To Read", "Currently Reading", "Read", "None" ] ;

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>

      <div className="list-books-content">
        { shelfNames.map( shelf => <Shelfs allBooks={allBooks} Shelf={shelf} /> ) }
      </div>

      <div className="open-search">
        <Link to="/SearchPage" >Add a book</Link>
      </div>
    </div>
  )
};

export default MainPage;
