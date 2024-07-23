export async function POST() {
	const apiKey = process.env.WHATSGW_APIKEY
	const url = 'https://app.whatsgw.com.br/api/WhatsGw/Send'

	const headers = {
		'Content-Type': 'application/json',
	}

	const body = {
		apiKey: apiKey,
		phone_number: '5511977373258',
		contact_phone_number: '5511992583805',
		message_custom_id: '1923821',
		message_type: 'text',
		message_body:
			'Teste de Msg\n_Italico_ \n*negrito*\n~tachado~\n```Monoespaçado```\n😜',
		time: new Date().toISOString(),
	}

	const res = await fetch(url, {
		method: 'POST',
		headers: headers,
		body: JSON.stringify(body),
	})

	const data = await res.json()
	return Response.json(data)
}
