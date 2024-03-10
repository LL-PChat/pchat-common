import { Maybe } from '../types';

export interface IActionRecord {
  createdDate: Maybe<Date>;
  modifiedDate: Maybe<Date>;
  createdBy: Maybe<string>;
  modifiedBy: Maybe<string>;
}
