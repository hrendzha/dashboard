import { NullableString } from '../types/dataTypes';

export const sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const cls = (...args: NullableString[]) => {
  return args.filter(x => x).join(' ');
}
