import { gql, useMutation } from '@apollo/client';
import axios from "axios";
import { useEffect } from 'react';
import { useState } from 'react';



function Test() {
const [list, setlist] = useState()

  const baseURL = "http://localhost:4000/users";
  useEffect(() => {
    axios.get(baseURL,
      {withCredentials: true,
        headers: {'Access-Control-Allow-Origin': 'http://localhost:3000', 'Content-Type': 'application/json'}
      }).then((response) => {
     console.log("the response is ",response)
     if(response.data.length>0){
       setlist(response.data)
     }
    });
  }, []);


return (
 <div>
     <button
     onClick={()=>{
      console.log("subbing...")
      addTodo({ variables: { title:"inca morah" } })
       .then(e=>console.log("then  ",e))
       .catch(e=>console.log("error mutating  ",e))
       
       }}
     >fetch</button>

     {list&&list.map(item=>{
       return<div>{item.username}</div>
     })
     }

 </div>     
  )

}

export default Test