import { IActionRecord } from './action-record.interface';

export interface IChannelSettings extends IActionRecord {
    channelCode: string;
    channelAdmins: string[];
    currentTheme: string;
    deleteChannelAfter: number;
    displayMessageWithin: number;
}