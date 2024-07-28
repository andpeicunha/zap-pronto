import { getLogger } from '@/utils/logger/serverSideLogger'
import axios from 'axios'

export async function getUserStatus() {
  const logger = await getLogger()

  try {
    const URL = `https://app.whatsgw.com.br/api/WhatsGw/GetProfile`

    const options = {
      method: 'GET',
      url: URL,
      headers: {
        accept: 'application/json',
      },
      params: {
        apikey: '63c5872a-4395-418f-8e69-71eadec5c3c1',
        phone_number: '5511977373258',
      },
    }

    logger.info(`GET USER STATUS >> STARTING REQUEST`)

    const req = await axios.request(options)

    logger.info(`GET USER STATUS >> FINISH REQUEST`)

    return req.data
  } catch (err) {
    logger.info(`GET USER STATUS >> ERROR: ${err}`)

    throw err
  }
}

//   const myHeaders = new Headers();
//   myHeaders.append('Content-Type', 'application/json');

//   const raw = JSON.stringify({
//     apikey: '63c5872a-4395-418f-8e69-71eadec5c3c1',
//     phone_number: '5511977373258',
//   });

//   const requestOptions = {
//     method: 'POST',
//     headers: myHeaders,
//     body: raw,
//     redirect: 'follow',
//   };

//   axios
//     .request('https://app.whatsgw.com.br/api/WhatsGw/GetProfile', raw, { headers: myHeaders })
//     .then((response) => console.log(response.data))
//     .catch((error) => console.log('error', error));
// }
