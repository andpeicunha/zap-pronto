import type { NextRequest, NextResponse } from 'next/server'

// import { LOGGING_TRACE_ID_HEADER } from '@/bff/constants/headers';
const LOGGING_TRACE_ID_HEADER = 'x-trace-id'

export const propagateLoggingTraceThroughHeaders = (req: NextRequest, res: NextResponse) => {
  const requestHeaders = new Headers(req.headers)
  const cssPathPrefix = process.env.JSON_PROJECT_URL

  if (!requestHeaders.get(LOGGING_TRACE_ID_HEADER)) {
    const traceId = Date.now()
    res.headers.set(LOGGING_TRACE_ID_HEADER, traceId.toString())
  }

  res.headers.set('x-url-path-css', cssPathPrefix || '')
  res.headers.set('x-url-query', req.url || '')
  return res
}
