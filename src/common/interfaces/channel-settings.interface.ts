import { IActionRecord } from './action-record.interface';

export interface IChannelSettings extends IActionRecord {
    channelCode: string;
    channelAdmins: string[];
    channelMembers: string[];
    currentTheme: string;
    displayMessageWithin: number;
    expiredDate: Date;
    metafileds?: Record<string, any>;
}
