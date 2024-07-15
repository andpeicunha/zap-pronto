import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  console.log('request: ', request);
  try {
    const data = await request.json();
    console.log('data : ', data);
    const { email, name } = data;
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
      },
    });
    return NextResponse.json(newUser);
  } catch (error) {
    return NextResponse.error();
  }
}

export async function GET() {
  const users = await prisma.user.findMany();
  console.log('users: ', users);

  return NextResponse.json({
    users: users,
  });
}
