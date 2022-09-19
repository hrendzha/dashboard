import { useBase } from "../../app/hooks/useBase";
import { SvgIcon } from "../sprite/SvgIcon";

interface ISubMenuItem {
  iconName: string;
  titleKey: string;
  count: number;
  iconFill: string;
}

export default function SubMenuItem(props: ISubMenuItem) {
  const { t } = useBase();
  return (
    <div className="col item">
      <div className="in-col">
        <div className="col">
          <SvgIcon name={ props.iconName } className={ props.iconFill } />
        </div>

        <div className="col cols item-bottom ta-c">
          <span className="col item-title text-regular-2">{ t(props.titleKey) }</span>
          <span className="col h4 jc-c">{ props.count }</span>
        </div>
      </div>
    </div>
  );
}
