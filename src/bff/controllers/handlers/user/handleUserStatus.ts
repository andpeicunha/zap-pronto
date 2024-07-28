import { listUsersStatus } from '@/bff/services/user/userStatus';

export const handleListUsersStatus = async () => {
  const body = await listUsersStatus();

  return body;
};
