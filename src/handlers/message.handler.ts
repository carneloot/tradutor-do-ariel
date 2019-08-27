import { ContextMessageUpdate, Middleware } from 'telegraf';
import { translateMessage } from '../utils/translate-message';

export const messageHandler: Middleware<ContextMessageUpdate> = (ctx, next) => {
    const update = ctx.update;
    const message = update.message!.text!;
    const timestamp = update.message!.date!;

    const translated = translateMessage(timestamp, message);

    ctx.reply(translated);

    next && next();
}
