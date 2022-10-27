import { Link } from 'react-router-dom';
import { useBase } from '../../app/hooks/useBase';
import { SvgIcon } from '../sprite/SvgIcon';
import ShortContactsList from './ShortContactList';

interface IHomeContacts {
}

export default function HomeContacts(props: IHomeContacts) {
  const { t } = useBase();
  return (
    <section className="col section section-contacts">
      <div className="in-col bg-gray3 p-32">
        <div className="section-header cols-sb">
          <div className="col header-left">
            <h3 className="left-title">{t('contacts')}</h3>
            <p className="text-regular-2" dangerouslySetInnerHTML={{ __html: t('you-have-N-contacts', { count: 123 }) }}></p>
          </div>
          <div className="col header-right">
            <a href="#" className="link-btn square-btn bg-blue right-link">
              <SvgIcon name="plus_16x16" fillClassName="fill-white" size={48} />
            </a>
          </div>
        </div>
        <div className="section-content">
          <ShortContactsList />
        </div>
        <div className="section-footer">
          <Link className="link-btn btn-block btn-sm bg-gray2 text-semibold-1" to="/contacts">{t('view-more')}</Link>
        </div>
      </div>
    </section>
  )
}
