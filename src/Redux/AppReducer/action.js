import axios from "axios";
import { useNavigate } from "react-router-dom";


import * as types from "./action-types";


const getBooks = (params) => (dispatch) => {
  dispatch({ type: types.GET_BOOKS_REQUEST });
  axios
    .get("/books", params)
    .then((r) => dispatch({ type: types.GET_BOOKS_SUCCESS, payload: r.data }))
    .catch((e) => dispatch({ type: types.GET_BOOKS_FAILURE }));
};
export { getBooks };

const editBook = (id,params) => (dispatch) => {
   
  //console.log(params)

 // dispatch({ type: types.EDIT_BOOKS_REQUEST });

  return axios.patch(`/books/${id}`, {
    book_name: params.author,
  })
    .then((r) => {
     
     /// console.log(r.data);
     getBooks()
    
    })
    .catch((e) => {
     
      // dispatch({ type: types.EDIT_BOOKS_FAILURE });
    });
};
export { editBook };
