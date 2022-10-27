import { cls } from '../../helpers/misc';
import { SvgIcon } from '../sprite/SvgIcon';
import { SpriteName } from '../sprite/SvgSprite';

interface IAggregateBalanceItem {
  iconName: SpriteName;
  iconFillClassName: string;
  iconBgClassName: string;
  leftComponent: JSX.Element;
  rightComponent: JSX.Element;
}

export default function AggregateBalanceItem(props: IAggregateBalanceItem) {
  return (
    <div className="in-col cols-sb ai-c aggregateBalance-item">
      <div className="col item-left">
        <div className={cls('left-icon', props.iconBgClassName)}>
          <SvgIcon fillClassName={props.iconFillClassName} name={props.iconName} />
        </div>
        <div className="fc-sa left-descr">
          {props.leftComponent}
        </div>
      </div>
      <div className="col fc-se item-right">
        {props.rightComponent}
      </div>
    </div>
  )
}
