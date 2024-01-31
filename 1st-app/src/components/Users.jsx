import axios from 'axios'
import React from 'react'

// const fetchUsers = async () => {
  
//   return res.data
// }
async function Users() {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
  const posts = res.data
  return (
    <div>
      <h1>Fetch Users</h1>
      <ul>
        {
          posts.map((post) => (
            <li key={post.id}>
              <h1 className=' font-bold text-3xl text-green-600'>{post.title}</h1>
              <hr />
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Users