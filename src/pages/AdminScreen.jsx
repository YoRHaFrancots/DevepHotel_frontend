import React from 'react'
import AdminRoomForm from '../components/AdminRoomForm'
import AdminUser from '../components/AdminUser'
import AdminLoginForm from '../components/AdminLoginForm'

const AdminScreen = () => {
  return (
    
    <div>
        <h1>Panel del Administrador</h1>
        <AdminRoomForm/>
        <AdminUser/>
    </div>
  )
}

export default AdminScreen