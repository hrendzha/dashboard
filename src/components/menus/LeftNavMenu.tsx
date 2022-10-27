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
              <SvgIcon name="home" fillClassName="fill-blue" />
              { t('menu.dashboard') }
            </>
          </NavLink>
        </li>
        <li>
          <NavLink className="text-semibold-1 f-c" to="/email">
            <>
              <SvgIcon name="email" fillClassName="fill-blue" />
              { t('menu.email') }
            </>
          </NavLink>
        </li>
        <li>
          <NavLink className="text-semibold-1 f-c" to="/contacts">
            <>
            <SvgIcon name="contacts" fillClassName="fill-blue" />
              { t('menu.contact') }
            </>
          </NavLink>
        </li>
        <li>
          <NavLink className="text-semibold-1 f-c" to="/crypto">
            <>
              <SvgIcon name="crypto" fillClassName="fill-blue" />
              {t('menu.crypto')}
            </>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
