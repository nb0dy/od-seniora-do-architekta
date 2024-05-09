import { devicePermissions } from '../../permissions/device';
import { roomPermissions } from '../../permissions/room';
import { roles } from '../roles';

export class RoomOwnerPermissionGroup {
  public static role = roles.ROOM_OWNER;

  public getPermissions(): string[] {
    return [
      devicePermissions.SHOW_DEVICE_DETAILS_PAGE,
      devicePermissions.SHOW_DEVICE_DETAILS_PAGE,
      roomPermissions.SHOW_REMOVE_ROOM_ADMIN_BUTTON,
      roomPermissions.SHOW_REMOVE_ROOM_USER_BUTTON,
    ];
  }
}
