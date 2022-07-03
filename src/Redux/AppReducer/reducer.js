import * as types from './action-types'

const intialState = {
 books:[],
 isLoading : false,
 isError : false
}

const reducer =(state = intialState,{type,payload})=>{

 switch(type){

case types.GET_BOOKS_REQUEST:{
 return{
  ...state,
  isLoading:true,
  isLoading:false
 }
}
case types.GET_BOOKS_SUCCESS:{
 return{
  ...state,
  books:payload,
  isLoading:false,
  isLoading:false
 }
}
case types.GET_BOOKS_FAILURE:{
 return{
  ...state,
  isLoading:false,
  isLoading:true
 }
}
 
  default : {
   return state
  }
 }
}

export  {reducer}