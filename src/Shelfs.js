
import CreateCard from "./CreateCard"

const Shelfs = ({allBooks, Shelf, UpdateHandle})=> {
  
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{Shelf.name}</h2>

      <div className="bookshelf-books">
        <ol className="books-grid">
          { allBooks.filter( (b) => b.shelf === Shelf.value).map( (book) =>
            <CreateCard key={book.id} Book={book} UpdateHandle={UpdateHandle} /> 
          )}
        </ol>
      </div>
    </div>
  )
};

export default Shelfs ;