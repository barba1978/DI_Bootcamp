import React from 'react'
import BookCard from './BookCard'
import './Header.css';



class  Header extends React.Component{
constructor(){
    super ()
    this.state={
        q:'',
        searchText:'',
        array:[]
    }
}

 handleChange =(e)=>{
this.setState({q:e.target.value})

    }

 handleSubmit =(e)=>{
     e.preventDefault()
    this.setState({searchText:this.state.q})
    fetch('https://www.googleapis.com/books/v1/volumes?q='+this.state.q)
    .then(elem=>elem.json())
    .then(data=>{this.setState({array:data.items})})}
    
    
handleClick=(e)=>{
    e.preventDefault()
const newArray = this.state.array.sort((a,b)=> parseInt(b.volumeInfo.publishedDate) - parseInt(a.volumeInfo.publishedDate))
this.setState({array:newArray})
console.log(newArray);
}
handleClick2=(e)=>{
    e.preventDefault()
const newArray = this.state.array.sort((a,b)=> parseInt(a.volumeInfo.publishedDate) - parseInt(b.volumeInfo.publishedDate))
this.setState({array:newArray})
console.log(newArray);
}

    render(){
       return(
        <div>
        <h1> Google App  </h1>
            <div className='nav'>
            <form onSubmit={this.handleSubmit}  >
            
             <input className='searchBox' type='text' onChange={this.handleChange} />
            <input className='btn' type='submit'  />
            </form>
          <button onClick={this.handleClick}> Newest </button>
          <button onClick={this.handleClick2}> Oldest </button>
        </div>
            <div>
     {this.state.array.length >=1 ? this.state.array.map(elem=>{return(
         <BookCard 
         key={elem.id} 
         title={elem.volumeInfo.title} 
         author={elem.volumeInfo.authors[0]}  
         img={elem.volumeInfo.imageLinks.thumbnail}
         pub={elem.volumeInfo.publisher}
         year={elem.volumeInfo.publishedDate} /> 
        )}):null}

            </div>
           
            </div>)}
}

export default Header 