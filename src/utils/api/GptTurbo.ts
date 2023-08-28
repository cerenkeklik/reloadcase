export async function GptTurbo(reqBody: any) {

    try {
        const val = await fetch(`https://api.openai.com/v1/chat/completions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                "Authorization": `Bearer ${process.env.REACT_APP_API_KEY}`
            },
            body: JSON.stringify(reqBody)
        })
        return val.json()
    } catch (error) {
        return error
    }
}