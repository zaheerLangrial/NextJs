import Header from '@/components/AdminHeader'
import React from 'react'

function AdminLayout({children}) {
  return (
    <div>
        <Header />
        {children}
    </div>
  )
}

export default AdminLayout