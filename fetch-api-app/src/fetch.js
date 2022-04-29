import React, { useEffect,useState } from 'react'

export const Fetch = () => {

    const[data,setData]=useState([]);

      useEffect(()=>{
          fetch('https://jsonplaceholder.typicode.com/posts').then((posres)=>{
           
            posres.json().then((data)=>{
                setData(data)
            })
     },(error)=>{

         console.log('erroe')
     })
               
                    
                    
          
          
          
        
      })
    


  return (
    <div>{JSON.stringify(data)}</div>
  )
}
