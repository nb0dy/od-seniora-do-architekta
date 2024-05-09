import { devicePermissions } from '../../permissions/device';
import { roles } from '../roles';

export class RoomUserPermissionGroup {
  public static role = roles.ROOM_USER;

  public getPermissions(): string[] {
    return [devicePermissions.SHOW_DEVICE_DETAILS_PAGE, devicePermissions.SHOW_DEVICE_DETAILS_PAGE];
  }
}
