import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useParams } from 'react-router-dom'
import { getBooks } from '../Redux/AppReducer/action'

const SingleBook = () => {

  const dispatch = useDispatch()
  const [currentBook,setcurrentBook] = useState({})
  const books = useSelector((state)=>state.AppReducer.books)
const {id} = useParams();
const location = useLocation()
console.log(location)
useEffect(()=>{
  if(books?.length===0){
    dispatch(getBooks())
  }
},[books?.length,dispatch])

useEffect(()=>{
  if(id){

    const temp = books?.find((book)=> book.id===Number(id))
    temp && setcurrentBook(temp)
  }
},[books,id,location])

  return (
    <div>
      <h1>{currentBook.book_name}</h1>
      <p>{currentBook.category}</p>
      <p>{currentBook.release_year}</p> 
      <button> <Link to={`/books/${currentBook.id}/edit`}>Edit </Link> </button>
    </div>
  )
}

export default SingleBook