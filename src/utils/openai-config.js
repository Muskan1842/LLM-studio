export async function generateResponse(inputQuery, llmModel) {
    let { modelName, baseLink, apiKey, maxTokens, temperature } = llmModel


    // model= "gpt-3.5-turbo",
    // baseLink = 'https://api.openai.com/v1/chat/completions'
    // apiKey = ''
    // maxTokens = 5;
    // temperature = 0.5

    const requestBody = {
        messages: [
            { role: "user", content: inputQuery }
        ],
        model: modelName,
        max_tokens: maxTokens,
        temperature: temperature,
    };

    try {
        const response = await fetch(baseLink, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${apiKey}`,
            },
            body: JSON.stringify(requestBody),
        });

        const data = await response?.json();
        return data?.choices?.[0].message?.content?.trim();
    } catch (error) {
        console.error("Error:", error);
        throw Error();
    }

};

