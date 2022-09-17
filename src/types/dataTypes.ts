
export type guid = string;

export type date = string; //2022-08-19T16:27:11.838Z

export type NullableString = string | null | undefined;

export interface IApiResponse<T> {
  statusCode: number;
  data: T;
}
