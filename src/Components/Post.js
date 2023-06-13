

const Post = (props) => {



  return (
    <div className="Content">
    <h1>Id: {props.id}</h1>
    <h2>Title:{props.title}</h2>
    <h2>Author:{props.author}</h2>
         </div>
  )
}

export default Post