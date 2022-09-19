import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SvgIcon } from '../sprite/SvgIcon';

interface ILeftNavMenu { }

export default function LeftNavMenu(props: ILeftNavMenu) {
  const { t } = useTranslation();
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink className="text-semibold-1 f-c" to="/">
            <>
              <SvgIcon name="home" className="fill-blue" />
              { t('menu.dashboard') }
            </>
          </NavLink>
        </li>
        <li>
          <NavLink className="text-semibold-1 f-c" to="/email">
            <>
              <SvgIcon name="email" className="fill-blue" />
              { t('menu.email') }
            </>
          </NavLink>
        </li>
        <li>
          <NavLink className="text-semibold-1 f-c" to="/contacts">
            <>
            <SvgIcon name="contacts" className="fill-blue" />
              { t('menu.contact') }
            </>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
