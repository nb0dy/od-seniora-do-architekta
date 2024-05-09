import { devicePermissions } from './device';
import { roomPermissions } from './room';

export type TPermission = keyof typeof devicePermissions | keyof typeof roomPermissions;
