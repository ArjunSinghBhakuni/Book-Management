import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import styled from 'styled-components'
import { getBooks } from '../Redux/AppReducer/action';
import BookCard from './BookCard'

const BookList = () => {

  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const books = useSelector((state)=>state.AppReducer.books);
 const location = useLocation()
 
 
  useEffect(()=>{
  
 
 if(books.length===0 || location.search ){
     const sortby = searchParams.get("sortby")
     const getBooksParams ={
      params:{
        category: searchParams.getAll("category"),
        _sort: sortby && "release_year",
        _order:sortby
      }
    }
 
    dispatch(getBooks (getBooksParams))
   }
  },[location.search])
// console.log(location.search)
  //console.log(books)
  return (
    <>
     {books.length>0 && books.map((singleBook)=>(
 <BookCardWrapper key={singleBook.id}>
  <Link to={`/books/${singleBook.id}`}>
  <BookCard bookdata={singleBook}/>
  </Link>
 </BookCardWrapper>
     )
     )};
    </>
  )
}

export default BookList

const BookCardWrapper = styled.div`
border: 1px solid blue;
padding : 5px;
width:300px;
`