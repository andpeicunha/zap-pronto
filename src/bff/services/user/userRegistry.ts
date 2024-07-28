import { getUser } from '@/bff/integrations/user/getUsers';

export async function listUsers() {
  const response = await getUser();
  console.log('response: ', response);

  return response;
}
