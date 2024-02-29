import { IActionRecord } from './action-record.interface';

export interface IMessage extends IActionRecord {
  channelCode: string;
  content: string;
  isDeleted?: boolean;
}

export interface IGroupMessage {
  date: string;
  messages: IMessage[];
}
