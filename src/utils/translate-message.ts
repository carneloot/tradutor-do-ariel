import moment from 'moment-timezone';

export const translateMessage = (timestamp: number, message: string): string => {

    let translator = (string: string) => 'mi'.repeat(Math.max(string.length / 2, 1))

    if (timestamp) {
        let hourOfMessage = moment(timestamp).tz('America/Sao_Paulo').hour();
        if (hourOfMessage >= 0 && hourOfMessage <= 8
            || hourOfMessage >= 18 && hourOfMessage <= 23) {
            translator = (string: string) => 
                string.split(' ').map((value, index) => (index % 2 ? 'nite' : 'Fort')).join(' ');
        }
    }

    return message.replace(/[0-9a-záàâãéèêíïóôõöúçñ]+/gi, translator);
}