import { IActionRecord } from './action-record.interface';

export interface IChannelSettings extends IActionRecord {
    channelCode: string;
    channelAdmins: string[];
    currentTheme: string;
    displayMessageWithin: number;
    expiredDate: Date;
    deleteChannelAfter: number;
}
