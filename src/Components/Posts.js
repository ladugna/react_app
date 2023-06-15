import Post from "./Post";


const Posts = (props) => {
//     const data =[
//         {id:111, title:"Happiness", name:"john"}, 
//         {id:112, title:"MIU", name:"Dean"},
//         {id:113, title:"Enjoy Life", name:"Jasmine"}
//     ]
// const posts=data.map(entity=>{
//     return <Post key={entity.id} id={entity.id} title={entity.title} author={entity.name}/>
// });

const posts=props.posts.map(entity=>{
    return <Post key={entity.id} id={entity.id} title={entity.title} name={entity.name}/>
})
  return posts;
  
}

export default Posts