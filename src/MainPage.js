
import { Link } from "react-router-dom";
import Shelfs from "./Shelfs";
/* import CreateCard from "./CreateCard" */

const MainPage = ({allBooks, UpdateHandle}) => {
  const shelfs = [ 
    {name: "Want To Read", value:"wantToRead"}, 
    {name: "Currently Reading", value:"currentlyReading"},
    {name: "Read", value:"read"} 
  ];

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>

      {shelfs.filter( f => f.name!=="None" ).map( (shelf) => 
        <Shelfs key={shelf.value} allBooks={allBooks} Shelf={shelf} UpdateHandle={UpdateHandle} /> 
      ) }

      <div className="open-search">
        <Link to="/SearchPage" >Add a book</Link>
      </div>
    </div>
  )
};

export default MainPage;
