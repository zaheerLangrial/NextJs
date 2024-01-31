import Header from '@/components/AdminHeader'
import Users from '@/components/Users'
import React from 'react'

function AdminLayout({children}) {
  return (
    <div>
        <Header />
        <Users />
        {/* {children} */}
    </div>
  )
}

export default AdminLayout