import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../pages/Shared/Footer/Footer'
import NavBarTemp from '../pages/Shared/NavBarTemp/NavBarTemp'

const Main = () => {
  const location = useLocation();
  console.log(location)
  const noHeaderFooter = location.pathname.includes('login')
  return (
    <div>
      { noHeaderFooter || <NavBarTemp></NavBarTemp> }
      <Outlet></Outlet>
      { noHeaderFooter || <Footer></Footer> }
    </div>
  )
}

export default Main