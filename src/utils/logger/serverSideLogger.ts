import winston from 'winston'

// import { getTraceIdFromHeaders } from '../headers/serverSideHeaders';
const { combine, timestamp, json, errors } = winston.format

const _logger = winston.createLogger({
  format: combine(timestamp(), json(), errors({ stack: true })),
  transports: [new winston.transports.Console()],
})

export const getLogger = async () => {
  // const { traceId } =  await getTraceIdFromHeaders();
  const childLogger = _logger.child({ traceId: 'traceId' })

  return childLogger
}
