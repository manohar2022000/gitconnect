
import React from 'react';
import './App.css';



 class Api extends React.Component{
    constructor(props){
        super(props);
        this.state={
          items:[],
          isLoaded:false,
        }
      }

      componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then(json => {
          this.setState({
            isLoaded:true,
            items:json,
          })
        })  ;
      }
    
    
    render(){
        let { isLoaded , items}=this.state;
        
        
          if({isLoaded}){
              return(
            <div className="cardspot">
          
              {items.map(item=>(
                
                <a href=""><div className="card" >{item.id}.{item.title}</div></a>
                
              ))}
            
          </div>)}
           else{
           return(
        <p>loading..</p>)}
           
    }
} 
export default Api;