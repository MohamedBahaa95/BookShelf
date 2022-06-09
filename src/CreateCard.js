
import * as BooksApi from "./BooksAPI"

const CreateCard = ({Book, UpdateHandle})=> {
  const shelfs = [ 
    {name: "Want To Read", value:"wantToRead"}, 
    {name: "Currently Reading", value:"currentlyReading"},
    {name: "Read", value:"read"} ,
    {name: "None", value:"none"} 
  ];

  const shelfChangeHandler = (event) => {
    event.preventDefault();

    const getUpdatedBook = async ()=> {
      let res = await BooksApi.get(Book.id);
      console.log("get",res);
      UpdateHandle(res);
    };

    const updateBookState = async ()=> {
    let res = await BooksApi.update(Book, event.target.value);
    console.log("update",res);
    };
    updateBookState().then( ()=> getUpdatedBook() );

  console.log(`book ${Book.title} state changed from ${Book.shelf} to ${event.target.value}`);
  };

  return (
    <li>
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
            <select defaultValue={Book.shelf !== undefined? Book.shelf : "none"} onChange={shelfChangeHandler} >
              <option value="None" disabled> Move to... </option>
              { shelfs.map( (shelf, i)=> {
                return (
                  <option 
                    value={shelf.value}
                    key={i}
                  >
                    {shelf.name}
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