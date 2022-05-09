import React from 'react';

const user = {
    first_name: 'Jhon',
    last_name: 'Dohe',
    favAnimals : ['Horse','Turtle','Elephant','Monkey']
  };



 const User=()=>{
   return(
<div>
<h3>{user.first_name}</h3>
<h3>{user.last_name}</h3>
{user.favAnimals.map(elem=>{
  return <h1>{elem}</h1>;
})}

</div>)}


export default User
