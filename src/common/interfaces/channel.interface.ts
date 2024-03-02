import { IActionRecord } from './action-record.interface';
import { IChannelSettings } from './channel-settings.interface';

export interface IChannel extends IActionRecord {
    code: string;
    name: string;
    avatarUrl?: string;
    secret: string;
    isDeleted?: boolean;
    settings: IChannelSettings;
}
