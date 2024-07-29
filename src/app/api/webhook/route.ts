import { NextRequest, NextResponse } from 'next/server'

type EventData = {
  event: string
  w_instancia_id: number
  qrcode: string
}

export async function POST(req: NextRequest) {
  // const qrcodeData = await (req?.body as { qrcode?: string })?.qrcode

  const eventData = req?.body as unknown as EventData

  const qrcodeData = eventData.qrcode
  console.log(qrcodeData)

  return new NextResponse(qrcodeData)
}
