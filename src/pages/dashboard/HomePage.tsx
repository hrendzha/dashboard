import { Link } from 'react-router-dom'
import { SvgIcon } from '../../components/sprite/SvgIcon'

interface IHomePage { }

export const HomePage = (props: IHomePage) => {
  return (
    <div className="homepage">
      <h2>Home page</h2>
      <SvgIcon name="home" width={32} height={32} />

      <Link className="icon-home" to="/second-page">Second page</Link>
    </div>
  )
}
