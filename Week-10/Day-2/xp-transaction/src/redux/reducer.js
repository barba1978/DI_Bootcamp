

const initState={
first_input:'',
second_input:'',
third_input:'',
fourth_input:'',
result:{}

}


export const reducer=(state=initState,action={})=>{
  switch(action.type){
    case 'CHANGE_FIRST':
    return{...state,first_input:action.payload}

    case 'CHANGE_SECOND':
    return{...state,second_input:action.payload}

    case 'CHANGE_THIRD':
    return{...state,third_input:action.payload}

    case 'CHANGE_FOURTH':
    return{...state,fourth_input:action.payload}

    case 'HANDLE_CLICK':
    return{...state}

    default:
    return{...state}
  }



}
