import { cls } from '../../helpers/misc';

interface ISvgIcon {
  name: string;
  width?: number;
  height?: number;
  className?: string;
}

export const SvgIcon = (props: ISvgIcon) => {
  return (
    <svg aria-hidden="true" focusable="false" className={cls('icon', `icon-${props.name}`, props.className)} {...{ width: props.width, height: props.height }} >
      <use xlinkHref={`#${props.name}`} />
    </svg>
  )
}
