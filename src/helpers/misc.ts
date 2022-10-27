import { NullableString } from '../types/dataTypes';

export const sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const cls = (...args: NullableString[]) => {
  return args.filter(x => x).join(' ');
}

export const formatMoney = (money: number) => {
  const formated = new Intl.NumberFormat('en-US', { style: 'decimal' }).format(money);
  return `$${formated}`;
}

export const formatPercent = (percent: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "percent",
    signDisplay: "exceptZero",
  }).format(percent);
}
