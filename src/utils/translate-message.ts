export const translateMessage = (message: string): string => {
    return message.replace(/[0-9a-záàâãéèêíïóôõöúçñ]+/gi,
        (string) => 'mi'.repeat(
            Math.max(string.length / 2, 1)));
}