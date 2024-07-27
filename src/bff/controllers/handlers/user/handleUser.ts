import { listUsers } from '@/bff/services/user/productsPerformance';
import { getLogger } from '@/utils/logger/serverSideLogger';
import { NextResponse } from 'next/server';

const BFF_NAME_PREFIX = 'BFF-LIST-USER';

export const handleListUsers = async () => {
  const logger = await getLogger();

  try {
    logger.info(`${BFF_NAME_PREFIX} >> STARTING`);

    const body = await listUsers();

    logger.info(`${BFF_NAME_PREFIX} >> FINISHED`);
    return NextResponse.json(body);
  } catch (err) {
    logger.info(`${BFF_NAME_PREFIX} >> ERROR: `, err);
    throw err;
  }
};
