import moment from 'moment-timezone';

const WORD_REGEX = /[@#\/]?[0-9a-záàâãéèêíïóôõöúçñ]+/gi;

type ReplaceFunction = (palavra: string, indice: number) => string;

function isSpecialWord(word: string): boolean {
    return word.startsWith('@') || word.startsWith('/') || word.startsWith('#');
}

function replaceWords(message: string, translator: ReplaceFunction): string {
    let index = 0;

    return message.replace(WORD_REGEX, (match) => {
        if (isSpecialWord(match)) {
            return match;
        } else {
            return translator(match, index++);
        }
    });
}

const mimimiReplace: ReplaceFunction = (palavra) =>
    'mi'.repeat(Math.max(palavra.length / 2, 1));

const fortniteReplace: ReplaceFunction = (_, indice) =>
    indice % 2 ? 'nite' : 'Fort';

export const translateMessage = (timestamp: number, message: string): string => {
    let translator: ReplaceFunction = mimimiReplace;

    if (timestamp) {
        const hourOfMessage = moment.unix(timestamp).tz('America/Sao_Paulo').hour();
        if (hourOfMessage >= 0 && hourOfMessage <= 8 ||
            hourOfMessage >= 18 && hourOfMessage <= 23) {
            translator = fortniteReplace;
        }
    }

    return replaceWords(message, translator);
}