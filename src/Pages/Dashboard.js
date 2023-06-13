import { useState } from "react";
import Posts from "../Components/Posts"
import NewPost from "../Components/NewPost";



export default function Dashboard(){
 let i=4;
  const [posts, setPosts]= useState(
    [
      {id:111, title:"Happiness", author:"john"}, 
        {id:112, title:"MIU", author:"Dean"},
        {id:113, title:"Enjoy Life", author:"Jasmine"}
    ]
  );
const [post, setPost]= useState(
  {
    id:0,
   title:"", 
  author:""
  }
)
const onchange= (events)=>{
  const copy= {...post}
  copy[events.target.id]= events.target.value
  copy[events.target.title]= events.target.value
  copy[events.target.author]= events.target.value
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
      title={post.title}
      author={post.author}
      onChange={(event) => { onchange(event) }}
        addButtonClicked={addButtonClicked}
  />
 </div>
)
  
}