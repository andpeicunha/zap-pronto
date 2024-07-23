export async function fetchApi(url: string): Promise<any> {
	try {
		const res = await fetch(`api/${url}`)
		return res.json()
	} catch (error) {
		throw error
	}
}
