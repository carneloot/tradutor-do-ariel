import * as dotenv from 'dotenv';
dotenv.config({ path: `${__dirname}/../.env` })

import { Telegraf, ContextMessageUpdate } from 'telegraf';
import { messageHandler } from './handlers/message.handler';
import { startTranslationCommand } from './commands/start-translation.command';
import { stopTranslationCommand } from './commands/stop-translation.command';

const telegraf = require('telegraf')

class Bot {
    bot: Telegraf<ContextMessageUpdate>

    constructor() {
        this.bot = new telegraf(process.env.BOT_TOKEN as string);

        Reflect.set(messageHandler, 'shouldTranslate', false);

        this.bot.on('message', messageHandler);
        this.bot.command('start_translate', startTranslationCommand);
        this.bot.command('stop_translate', stopTranslationCommand);
    }

    run() {
        this.bot.startPolling();
        console.log('Rodando! O Ariel não será traduzido até eu ser habilitado.');
    }

}
new Bot().run();
