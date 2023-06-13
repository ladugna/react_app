import React from 'react'

const NewPost = (props) => {
  return (
    <div className="Content">
         
    <h1>Add Title</h1>

    <label>Id</label>
    <input type="text"
        label={'id'}
        id={'id'}
        onChange={props.onChange}
        value={props.id}
    />
    <label>Title</label>
    <input type="text"
        label={'title'}
        title={'title'}
        onChange={props.onChange}
        value={props.title}
    />
    <label>Author</label>
    <input type="text"
        label={'author'}
        author={'author'}
        onChange={props.onChange}
        value={props.author}
    />


    <button onClick={props.addButtonClicked}>Change Name </button>
</div>
  )
}

export default NewPost