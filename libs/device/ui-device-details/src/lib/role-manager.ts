import { roomPermissions, TRole } from '@od-seniora-do-architekta/shared/utils/role-to-permission';

interface IBuildingPermissionService {
  getPermission(roleToCheck: TRole): string[];
}

class RoomAdminService implements IBuildingPermissionService {
  getPermission = (roleToCheck: TRole): string[] => {
    switch (roleToCheck) {
      case 'ROOM_OWNER': {
        return [roomPermissions.SHOW_REMOVE_ROOM_USER_BUTTON, roomPermissions.SHOW_REMOVE_ROOM_USER_BUTTON];
      }

      case 'SYSTEM_ADMIN': {
        return [roomPermissions.SHOW_REMOVE_ROOM_USER_BUTTON];
      }

      default: {
        return [];
      }
    }
  };
}

class RoomUserService {
  getPermission = (roleToCheck: TRole) => {
    switch (roleToCheck) {
      default: {
        return [];
      }
    }
  };
}

export class RoleManager {
  getPermissions = (myRole: TRole, roleToCheck: TRole): string[] => {
    switch (myRole) {
      case 'SYSTEM_ADMIN':
      case 'ROOM_OWNER':
      case 'ROOM_ADMIN': {
        return new RoomAdminService().getPermission(roleToCheck);
      }

      case 'ROOM_USER': {
        return new RoomUserService().getPermission(roleToCheck);
      }

      default: {
        return [];
      }
    }
  };
}
