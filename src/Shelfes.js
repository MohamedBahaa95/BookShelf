

import CreateCard from "./CreateCard"

const Shelfs = ({allBooks, Shelf})=> {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{Shelf}</h2>

      <div className="bookshelf-books">
        <ol className="books-grid">
          { allBooks.filter( (b) => b.shelf === Shelf).map( (book) => {
            return (
              <CreateCard key={book.id} Book={book} UpdateHandle={UpdateHandle} />
            )} 
          )}
        </ol>
      </div>
    </div>
  )
};

export default Shelfs ;