export async function POST() {
	const apiKey = process.env.WHATSGW_APIKEY
	const url = 'https://app.whatsgw.com.br/api/WhatsGw/NewInstance'

	const headers = {
		'Content-Type': 'application/json',
	}

	const body = {
		apiKey: apiKey,
		type: 1,
	}

	const res = await fetch(url, {
		method: 'POST',
		headers: headers,
		body: JSON.stringify(body),
	})

	const data = await res.json()
	return Response.json(data)
}
