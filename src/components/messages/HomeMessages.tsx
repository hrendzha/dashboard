import { Link } from 'react-router-dom';
import { useBase } from '../../app/hooks/useBase';
import { SvgIcon } from '../sprite/SvgIcon';
import ShortMessageList from './ShortMessageList';

interface IHomeMessages {
}

export default function HomeMessages(props: IHomeMessages) {
  const { t } = useBase();

  return (
    <section className="col section section-contacts">
      <div className="in-col bg-gray3 p-32">
        <div className="section-header cols-sb">
          <div className="col header-left">
            <h3 className="left-title">{t('messages')}</h3>
            <p dangerouslySetInnerHTML={{ __html: t('you-have-N-messages', { count: 321 }) }}></p>
          </div>
          <div className="col header-right">
            <a href="#" className="link-btn right-link">
              <SvgIcon name="plus_16x16" fillClassName="fill-white" />
            </a>
          </div>
        </div>
        <div className="section-content">
          <ShortMessageList />
        </div>
        <div className="section-footer">
          <Link className="link-btn btn-block btn-sm bg-gray2 text-semibold-1" to="/messages">View all messages</Link>
        </div>
      </div>
    </section>
  )
}
