export async function generateResponse(inputQuery, llmModel) {
    const { modelName, baseLink, apiKey, maxTokens, temperature } = llmModel

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

        const data = await response.json();
        return data?.choices[0].text.trim();
    } catch (error) {
        console.error("Error:", error);
        return error;
    }

};

