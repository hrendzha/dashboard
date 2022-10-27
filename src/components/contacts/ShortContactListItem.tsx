import { SvgIcon } from '../sprite/SvgIcon';

interface IShortContactsListItem {
  name: string;
  position: string;
}

export default function ShortContactsListItem(props: IShortContactsListItem) {
  return (
    <div className="cols-sb contact-item">
      <div className="col f-r item-left">
        <div className="left-icon mr-16">
        </div>
        <div className="fc-sa left-descr">
          <p><strong className="text-semibold-2">{props.name}</strong></p>
          <p>{props.position}</p>
        </div>
      </div>
      <div className="col">
        <a href="#" className="link-btn square-btn bg-gray2 mr-16">
          <SvgIcon name="phone_32x32" fillClassName="fill-blue" size={48} />
        </a>
        <a href="#" className="link-btn square-btn bg-gray2">
          <SvgIcon name="email" fillClassName="fill-blue" size={48} />
        </a>
      </div>
    </div>
  )
}
