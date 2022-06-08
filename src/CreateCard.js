
import * as BooksApi from "./BooksAPI"

const CreateCard = ({Book, UpdateHandle})=> {
  const shelfNames = [ "Want To Read", "Currently Reading", "Read", "None" ] ;
  const shelfValues = ["wantToRead", "currentlyReading", "read"];

  const shelfChangeHandler = (event) => {
    event.preventDefault();
    const updateBookState = async ()=> {
    let res = await BooksApi.update(Book, event.target.value);
    
    let updatedBook = Book ;
    updatedBook.shelf = event.target.value;

    UpdateHandle(updatedBook); 
  }
  updateBookState()

  console.log(`book ${Book.title} state changed from ${Book.shelf} to ${event.target.value}`);
  };

  return (
    <li key={Book.id}>
      <div className="book">
        <div className="book-top">
          <div className="book-cover"
            style={{
            width: 128,
            height: 193,
            backgroundImage:`url(${Book.imageLinks.smallThumbnail})`,
            }}
          ></div>

          <div className="book-shelf-changer">
            <select defaultValue={Book.shelf !== undefined? Book.shelf : "None" } onChange={shelfChangeHandler} >
              <option value="none" disabled> Move to... </option>
              { shelfNames.map( (name,i)=> {
                return (
                  <option 
                    value={shelfValues[i]}
                    key={name}
                  >
                      {name}
                  </option>
                )} 
              )}
            </select>
          </div>
        </div>

        <div className="book-title">{Book.title}</div>

        <div className="book-authors">{Book.authors}</div>
      </div>
    </li>
  )
}


export default CreateCard ;