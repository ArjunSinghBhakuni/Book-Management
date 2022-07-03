import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ReqireAuth from '../component/ReqireAuth'
 
import Books from './Books'
import EditBook from './EditBook'
import Login from './Login'
import SingleBook from './SingleBook'

const MainRoute = () => {
  return (
    <Routes>
     <Route path='/' element={<Books/>}/>
     <Route path='books/:id' element={<SingleBook/>}/>
     <Route path='books/:id/edit' element={
     <ReqireAuth>

       <EditBook/>  
     </ReqireAuth>
     } />
     <Route path='/login' element={<Login/>}/>
     <Route path='*' element={<h1>Page is not found</h1>}/>
    </Routes>
  )
}

export default MainRoute