import { Outlet } from 'react-router-dom'
import { Header } from '../../Components/header'

export function DefaultLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}
