import React from 'react'
import { useReducer,  } from 'react'

export const initialState={
    todos: []
  }
  
  export const reducer = (state =initialState, action) => {
    switch(action.type) {
      case 'A':
      return {
        ...state,
    todos: [...state.todos, action.payload],
      }
      default:
        return state
        
    }
  }
const User = () => {
    const [state ,dispatch] =useReducer(reducer, initialState)
const creatuser = (e) => {
  dispatch({type:'A', payload: e.target.value})
}

  return (
    <div>
        <input type='text' onChange={creatuser}/>
    </div>
  )
}

export default User