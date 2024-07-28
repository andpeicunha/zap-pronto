import { getUserStatus } from '@/bff/integrations/user/getUsersStatus';

export async function listUsersStatus() {
  const response = await getUserStatus();

  return response;
}
