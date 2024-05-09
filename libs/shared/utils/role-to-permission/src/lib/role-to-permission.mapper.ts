import { DefaultPermissionGroup } from './roles/pemrission-groups/default-permission-group';
import { RoomAdminPermissionGroup } from './roles/pemrission-groups/room-admin-permission-group';
import { RoomOwnerPermissionGroup } from './roles/pemrission-groups/room-owner-permission-group';
import { SupportPermissionGroup } from './roles/pemrission-groups/support-permission-group';
import { SystemAdminPermissionGroup } from './roles/pemrission-groups/system-admin-permission-group';
import { TRole } from './roles/roles';

export class RoleToPermissionMapper {
  public mapTo(role: TRole) {
    switch (role) {
      case 'SYSTEM_ADMIN': {
        return new SystemAdminPermissionGroup().getPermissions();
      }

      case 'SUPPORT': {
        return new SupportPermissionGroup().getPermissions();
      }

      case 'ROOM_OWNER': {
        return new RoomOwnerPermissionGroup().getPermissions();
      }

      case 'ROOM_ADMIN': {
        return new RoomAdminPermissionGroup().getPermissions();
      }

      case 'DEFAULT': {
        return new DefaultPermissionGroup().getPermissions();
      }

      default: {
        return [];
      }
    }
  }
}
