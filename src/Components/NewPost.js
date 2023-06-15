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
     <label>Author</label>
    <input type="text"
        label={'name'}
        name={'name'}
        onChange={props.onChange}
        value={props.name}
    />
    <label>Title</label>
    <input type="text"
        label={'title'}
        title={'title'}
        onChange={props.onChange}
        value={props.title}
    />

    <button onClick={props.addButtonClicked}>Change Name </button>
</div>
  )
}

export default NewPost