import { listUsers } from '@/bff/services/user/userRegistry';
import { NextResponse } from 'next/server';

export const handleListUsers = async () => {
  try {
    const body = await listUsers();
    return NextResponse.json(body);
  } catch (err) {
    throw err;
  }
};
