'use-client'




export const fetchQuote = async (category: string): Promise<{quote: string, author: string, category: string}> => {
       try {
            const res = await fetch('https://api.api-ninjas.com/v1/quotes?category=' + category, {
                method: 'GET',
                headers: {
                    'X-Api-Key': '8fQNaqpDwvbIT0r06Ye39w==d2MTbdkmicVekxCu',
                    'content-type': 'application/json'
                }
            });
            const result = await res.json();
            return result[0];
        } catch(error: any) {
            return {quote: `Error: couldn't resolve API response. \nError type: ${error.type}. \nMessage: ${error.message}`, author: `some bug`, category: 'happiness'}
        }
}
