import { useState } from "react";
import Posts from "../Components/Posts"
import NewPost from "../Components/NewPost";
import axios from "axios";
import { response } from "express";



export default function Dashboard(){
 let i=4;
  const [posts, setPosts]= useState(
    [
      {id:111, title:"Happiness", name:"john"}, 
        {id:112, title:"MIU", name:"Dean"},
        {id:113, title:"Enjoy Life", name:"Jasmine"}
    ]
  );

  const fetchdata=()=>{
    axios.get('http://localhost:8080/posts')
    .then(response=>{
      setPosts(response.data)
    })
    .catch(error=>{
      console.log(error)
    })
  }
  fetchdata();
const [post, setPost]= useState(
  {
    id: 0,
   title: "", 
   author: "", 
  }
);
const onchange= (events)=>{
  const copy= {...post}
  copy[events.target.id]= events.target.value
  copy[events.target.name]= events.target.value
  copy[events.target.title]= events.target.value
  
  setPost(copy);
}

const addButtonClicked= ()=>{
  const copy= {...post}
  copy.id=i;
  i++;
  const copyPosts=[...posts]
  copyPosts.push(copy);
  setPosts(copyPosts)
 
}
return (
 <div>
  <div className="dashboard">
  <Posts posts={posts}/>
  </div>
  <NewPost
      id={post.id}
      name={post.name}
      title={post.title}
     
      onChange={(event) => { onchange(event) }}
       addButtonClicked={addButtonClicked}
  />
 </div>
)
  
}