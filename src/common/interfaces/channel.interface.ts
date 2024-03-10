import { Maybe } from '../types';
import { IActionRecord } from './action-record.interface';
import { IChannelSettings } from './channel-settings.interface';

export interface IChannel extends IActionRecord {
    code: string;
    name: string;
    displayName?: string;
    avatarUrl?: string;
    secret: string;
    free?: boolean;
    isDeleted?: boolean;
    settings: Maybe<IChannelSettings>;
}
