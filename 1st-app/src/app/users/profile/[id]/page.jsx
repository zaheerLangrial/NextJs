import React from 'react'

function MyProfile({params}) {
  console.log(params)
  return (
    <div>MyProfile {params.id}</div>
  )
}

export default MyProfile