import { roles } from '../roles';

export class DefaultPermissionGroup {
  public static role = roles.DEFAULT;

  public getPermissions(): string[] {
    return [];
  }
}
