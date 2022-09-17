import { Link, NavLink } from 'react-router-dom';

interface ISecondPage { }

export const SecondPage = (props: ISecondPage) => {
  return (
    <div>
      <h2>Second page</h2>

      <Link to="/">Home page</Link>
      <NavLink to="/" title="Go to HomePage">NavLink</NavLink>
    </div>
  )
}
