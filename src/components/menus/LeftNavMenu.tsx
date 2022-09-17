import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SvgIcon } from '../sprite/SvgIcon';

interface ILeftNavMenu { }

export default function LeftNavMenu(props: ILeftNavMenu) {
  const { t } = useTranslation();
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link className="icon-home" to="/">
              <SvgIcon name="home" width={32} height={32} />
              {t('menu.dashboard')}
            </Link>
          </li>
          <li>
            <Link className="icon icon-home" to="/">
              <SvgIcon name="email" width={32} height={32} />
              {t('menu.email')}
            </Link>
          </li>
          <li>
            <Link className="icon icon-home" to="/">
              <SvgIcon name="contacts" width={32} height={32} />
              {t('menu.contact')}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
