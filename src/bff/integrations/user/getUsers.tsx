import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function getUser() {
  const users = await prisma.user.findMany();
  console.log('users: ', users);

  return NextResponse.json({
    users: users,
  });
}

// export async function getPerformance(userId: string) {
//   const BASE_URL_TOKEN = `${process.env.BRAVIUM_AUTH_TOKEN_BASE_URL}${process.env.BRAVIUM_AUTH_TOKEN_URL_VERSION}`;

//   const options = {
//     method: 'GET',
//     url: `${BASE_URL_TOKEN}product/status-summary/${userId}`,
//     params: { culture: 'pt-BR' },
//     headers: {
//       accept: 'application/json',
//       'x-PRW-Campaign-Id': 'ORBMK',
//     },
//   };
//   const req = await axios.request(options);
//   const responsAPI = req.data;

//   const response = responsAPI as PerformanceResponseType;

//   return response.data;
// }
