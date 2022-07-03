import * as types from './action-types'

const intialState ={
 isAuth:false,
 token:'',
 isLoading:false,
 isError:false,
}

const reducer = (state=intialState,{type,payload})=>{

 switch(type){

  case types.USER_LOGIN_REQUEST :{

   return {
    ...state,
    isLoading:true,
   }
  }

  case types.USER_LOGIN_SUCCESS :{

   return {
    ...state,
    isLoading:false,
    isAuth:true,
   token:payload,
   }
  }
  case types.USER_LOGIN_ERROR :{

   return {
    ...state,
    isLoading:false,
    isError:true,
    token:'',
    isAuth:false,
   }
  }
  default :{
   return state
  }
 }

}



export {reducer}

