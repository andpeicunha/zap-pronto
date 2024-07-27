import { productsPerformanceList } from '@/bff/services/performance/productsPerformance';
import { getLogger } from '@/utils/logger/serverSideLogger';
import { NextResponse } from 'next/server';

const BFF_NAME_PREFIX = 'BFF-Performance';

export const handlePerformance = async () => {
  const logger = await getLogger();
  const companyId = '1';

  try {
    logger.info(`${BFF_NAME_PREFIX} >> Starting request`);
    const body = await productsPerformanceList(companyId);
    logger.info(`${BFF_NAME_PREFIX} >> Finished`);
    return NextResponse.json(body);
  } catch (err) {
    logger.info(`${BFF_NAME_PREFIX} >> Error: `, err);
    throw err;
  }
};
