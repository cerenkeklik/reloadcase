export async function GptTurbo(reqBody: any) {
    console.log(reqBody)
    try {
        const val = await fetch(`https://api.openai.com/v1/chat/completions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                "Authorization": `Bearer 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`
            },
            body: JSON.stringify(reqBody)
        })
        return val.json()
    } catch (error) {
        return error
    }
}