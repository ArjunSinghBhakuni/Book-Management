 import React from 'react'
 
 const BookCard = ({bookdata}) => {
   return (
     <div>
      <div>
       <img src={bookdata.cover_photo} alt="" />
       <div>{bookdata.book_name}</div>
       <div>{bookdata.release_year}</div>
       <div>{bookdata.category}</div>
      </div>
     </div>
   )
 }
 
 export default BookCard