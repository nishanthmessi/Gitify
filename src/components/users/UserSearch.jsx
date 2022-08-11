import { useState, useContext } from "react"
import GithubContext from '../../context/github/GithubContext'
import AlertContext from "../../context/alert/AlertContext"
import { searchUsers } from '../../context/github/GithubAction'

const UserSearch = () => {
  const [text, setText] = useState('')

  const {users, dispatch} = useContext(GithubContext)

  const {setAlert} = useContext(AlertContext)

  const handleChange = (e) => setText(e.target.value)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if(text === '') {
      setAlert('Please type something', 'error')
    } else {
      dispatch({type: 'SET_LOADING'})

      const users = await searchUsers(text)
      dispatch({type: 'GET_USERS', payload: users})

      setText('')
    }
  }

  return (
    <div className='grid place-items-center grid-cols-1 xl:grid-cols-1 lg:grid-cols-1 md:grid-cols-1 mb-8 gap-8'>
      <div>
      <h1 className= 'text-7xl text-center font-bold mb-16'>Gitify.</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-control ">
          <h1 className= 'text-4xl font-bold mb-4'>Search for github users</h1>
            <div className="relative">      
              <input type="text" className="w-full pr-40 bg-purple-300 input input-md text-black" placeholder='Search' value={text} onChange={handleChange}/>
              <button type="submit" className="absolute top-0 right-0 rounded-l-none w-36 btn btn-md">Search</button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
        <button onClick={() => dispatch({type: 'CLEAR_USERS'})} className='btn btn-ghost btn-md'>Clear</button>
      </div>
      )} 
    </div>
  )
}

export default UserSearch