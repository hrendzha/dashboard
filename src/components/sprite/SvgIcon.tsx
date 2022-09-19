import { cls } from '../../helpers/misc';

interface ISvgIcon {
  name: string;
  width?: number;
  height?: number;
  className?: string;
}

export const SvgIcon = (props: ISvgIcon) => {
  return (
    <span className={ cls('icon', `icon-${props.name}`) }>
      <svg aria-hidden="true" className={ props.className } focusable="false" { ...{ width: props.width, height: props.height } } >
        <use xlinkHref={ `#${props.name}` } />
      </svg>
    </span>
  );
};
