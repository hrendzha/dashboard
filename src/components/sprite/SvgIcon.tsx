import { cls } from '../../helpers/misc';
import { SpriteName } from './SvgSprite';

interface ISvgIcon {
  name: SpriteName;
  width?: number;
  height?: number;
  fillClassName?: string;
  size?: 24 | 48 | 60;
}

export const SvgIcon = (props: ISvgIcon) => {
  return (
    <span className={cls('icon', `icon-${props.name}`, `size-${props.size}`)}>
      <svg aria-hidden="true" className={props.fillClassName} focusable="false" {...{ width: props.width, height: props.height }}>
        <use xlinkHref={`#${props.name}`} />
      </svg>
    </span>
  );
}
