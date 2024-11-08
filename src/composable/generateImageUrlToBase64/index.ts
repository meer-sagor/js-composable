interface Index {
    url: string,
    parseType?: 'base64' | 'svg'
}

export const generateImageUrlToBase64 =
    async ({parseType = 'base64', url}: Index): Promise<string> => {
        try {
            const response = await fetch(url, {
                headers: {'Cache-Control': 'no-cache'},
            });
            const blob = await response.blob();
            return new Promise<string>((resolve, reject) => {
                const reader = new FileReader();
                reader.onloadend = () => {
                    if (typeof reader.result === 'string') {
                        if (parseType == "svg") {
                            resolve(reader.result);
                        } else {
                            resolve(reader.result);
                        }
                    } else {
                        reject(new Error('Failed to convert image to base64.'));
                    }
                };
                reader.onerror = reject;
                if (parseType === 'base64') {
                    reader.readAsDataURL(blob);
                } else if (parseType === 'svg' && blob.type === 'image/svg+xml') {
                    reader.readAsText(blob);
                } else {
                    reject(new Error('Invalid parseType or SVG format.'));
                }
            });
        } catch (error) {
            console.error('Error converting image to base64:', error);
            throw error;
        }
    };