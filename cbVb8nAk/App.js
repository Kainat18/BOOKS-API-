import React from 'react';


export default function App(){
    
    const [books , setBooks] = React.useState([])
    
  

function fetchBooks(){
    fetch("https://www.anapioficeandfire.com/api/books?pageSize=30") 
    .then(res => res.json()) 
    .then(data => setBooks(data))
  
      
  }
  
  
    return (
        <div className="container">
        <h1 className="Head"> Games of Thrones Books </h1>
        <h2 className="head-2">Fetch the data from API and display it</h2>
        <div className="btn">
        <button className="button" onClick={fetchBooks}>Fetch Data</button>
        
        </div>
        
        <div className="item-container">
        {books && books.map((book , index)=>{
            return (  
           <div className="card" key={index}>
           <h3>Book {index +1}</h3>
           <h1>{book.name}</h1>
           <div className="details">
           <p>Author: {book.authors}</p>
           <p>No Of Pages: {book.numberOfPages}</p>
           <p>Publisher: {book.publisher}</p>
           <p>Country: {book.country}</p>
           <p>Released: {book.released}</p>
           </div>
           </div>
            );
        })}
    </div>
    </div>
    )
}