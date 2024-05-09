import { devicePermissions } from '../../permissions/device';
import { roomPermissions } from '../../permissions/room';
import { roles } from '../roles';

export class RoomAdminPermissionGroup {
  public static role = roles.ROOM_ADMIN;

  public getPermissions(): string[] {
    return [
      devicePermissions.SHOW_DEVICE_DETAILS_PAGE,
      devicePermissions.SHOW_DEVICE_DETAILS_PAGE,
      roomPermissions.SHOW_REMOVE_ROOM_USER_BUTTON,
    ];
  }
}
