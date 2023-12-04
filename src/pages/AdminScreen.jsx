import React from 'react'
import AdminRoomForm from '../components/AdminRoomForm'
import AdminUser from '../components/AdminUser'

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