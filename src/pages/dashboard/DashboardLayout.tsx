import { Link, Navigate, useOutlet } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks/redux';

interface IHomeLayout {
}

export const DashboardLayout = (props: IHomeLayout) => {
  const { isAuth } = useAppSelector(state => state.auth);
  const outlet = useOutlet();

  if (!isAuth) {
    return <Navigate to="/u" />
  }

  return (
    <div className="homeLayout">
      {outlet}
    </div>
  )
}
