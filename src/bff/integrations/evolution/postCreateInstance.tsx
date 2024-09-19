import {
  BASE_URL,
  GLOBAL_API_KEY,
  TOKEN,
  WEBHOOK_URL,
} from '@/bff/constants/evolution'
import { calculateDateDetails } from '@/utils/date/calculateDateDetails'
import { getLogger } from '@/utils/logger/serverSideLogger'
import axios, { AxiosError } from 'axios'

export async function postEvoCreateInstance() {
  const logger = await getLogger()
  const dateVariable = calculateDateDetails(1)
  const URL = `${BASE_URL}/instance/create`

  try {
    const data = JSON.stringify({
      instanceName: `Test 11`,
      token: TOKEN,
      qrcode: true,
      number: '5511977373258',
      webhook: WEBHOOK_URL,
      webhook_by_events: false,
      events: [
        'QRCODE_UPDATED',
        'MESSAGES_UPSERT',
        'MESSAGES_UPDATE',
        'MESSAGES_DELETE',
        'SEND_MESSAGE',
        'CONNECTION_UPDATE',
        'CALL',
      ],
    })

    const options = {
      method: 'post',
      maxBodyLength: Infinity,
      url: URL,
      headers: {
        'Content-Type': 'application/json',
        apikey: GLOBAL_API_KEY,
      },
      data: data,
    }

    const req = await axios.request(options)
    return req.data
  } catch (err) {
    const error = err as AxiosError

    logger.info(`EVO >> CREATE INSTANCE >> ERROR: ${error}`)
    throw error
  }
}
