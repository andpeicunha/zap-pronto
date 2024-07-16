export async function POST() {
  const apiKey = process.env.WHATSGW_APIKEY;
  console.log('apiKey: ', apiKey);
  const url = 'https://app.whatsgw.com.br/api/WhatsGw/NewInstance';

  const headers = {
    'Content-Type': 'application/json',
  };

  const body = {
    apiKey: apiKey,
    phone_number: 5511977373258,
    w_instancia_id: 0,
  };

  const res = await fetch(url, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(body),
  });

  const data = await res.json();
  return Response.json(data);
}
