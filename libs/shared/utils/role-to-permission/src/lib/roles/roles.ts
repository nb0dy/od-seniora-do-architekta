export const roles = {
  DEFAULT: 'DEFAULT',
  SYSTEM_ADMIN: 'SYSTEM_ADMIN',
  SUPPORT: 'SUPPORT',
  ROOM_OWNER: 'ROOM_OWNER',
  ROOM_ADMIN: 'ROOM_ADMIN',
  ROOM_USER: 'ROOM_USER',
};

export type TRole = keyof typeof roles;
