import { MessageType } from '../enum/message-type.enum';
import { IActionRecord } from './action-record.interface';

export interface IMessage extends IActionRecord {
  channelCode: string;
  content: string;
  messageType: MessageType;
  isDeleted?: boolean;
}

export interface IGroupMessage {
  date: string;
  messages: IMessage[];
}
