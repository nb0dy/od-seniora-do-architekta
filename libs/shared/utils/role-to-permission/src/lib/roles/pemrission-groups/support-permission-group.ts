import { devicePermissions } from '../../permissions/device';
import { roomPermissions } from '../../permissions/room';
import { roles } from '../roles';

export class SupportPermissionGroup {
  public static role = roles.SUPPORT;

  public getPermissions(): string[] {
    return [
      devicePermissions.SHOW_DEVICE_DETAILS_PAGE,
      devicePermissions.SHOW_DEVICE_DETAILS_PAGE,
      roomPermissions.SHOW_REMOVE_ROOM_ADMIN_BUTTON,
      roomPermissions.SHOW_REMOVE_ROOM_USER_BUTTON,
    ];
  }
}
