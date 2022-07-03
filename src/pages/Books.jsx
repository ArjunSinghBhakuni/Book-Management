import React, { useEffect } from 'react'
 
import { useDispatch,useSelector } from 'react-redux/es/exports';
import Filter from '../component/Filter';
import BookList from '../component/BookList';
import styled from 'styled-components';
import {useSearchParams} from 'react-router-dom'

const Books = () => {
 
 
 
 return (
    <div>
     <h1>Books</h1>
     <BookPageWrapper>

<FilterSortWrapper>

     <Filter/>
</FilterSortWrapper>
     <BooklistWrapper >

     <BookList   />
     </BooklistWrapper>
     </BookPageWrapper>
    </div>
  )
}

export default Books

const BookPageWrapper =  styled.div`
display :flex;
`;
const FilterSortWrapper = styled.div`
width:300px;
border: 1px solid red;
`

const BooklistWrapper = styled.div`
width: 100%;
border : 1px solid black ;
display : grid;
grid-template-columns: repeat(auto-fit,minmax(310px, max-content))
grid gap: 16px
justify-content:center:
padding:intial;
`