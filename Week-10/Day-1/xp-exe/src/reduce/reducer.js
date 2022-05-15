let initState={
  counter:0
}


export const reducer =(state=initState,action={})=>{
  switch(action.type){
    case 'INCREASE':
    return{...state,state+1}
    default:
  return{...state}
  }


}
