import { IActionRecord } from './action-record.interface';
import { IChannelSettings } from './channel-settings.interface';

export interface IChannel extends IActionRecord {
    channelCode: string;
    channelName: string;
    channelPass: string;
    loginedMember?: string;
    channelMembers: string[];
    isDeleted?: boolean;
    settings?: IChannelSettings;
}
