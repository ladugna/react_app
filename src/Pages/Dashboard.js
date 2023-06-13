import Posts from "../Components/Posts"


const Dashboard = (props) => {

  return (
  <div>
      <div className="dashboard"><Posts/> </div>
      <div>  <input type="text"
                    label={'title'}
                    title={'title'}
                    onChange={props.onChange}
                    value={props.title}
                />
                 <button onClick={props.addButtonClicked}>Change Name </button>
                </div>
  </div>
  )
}

export default Dashboard