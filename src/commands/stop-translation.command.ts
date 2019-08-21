import { Middleware, ContextMessageUpdate } from 'telegraf';
import { isAdmin } from '../utils/is-admin';
import { messageHandler } from '../handlers/message.handler';

export const stopTranslationCommand: Middleware<ContextMessageUpdate> = async (ctx, next) => {
    if (!isAdmin(ctx.update.message!.from)) {
        await ctx.reply('Voce nao tem permissão para fazer isso!');
        next && next();
        return;
    }

    Reflect.set(messageHandler, 'shouldTranslate', false);
    await ctx.reply('Agora o bot não irá mais traduzir o Ariel :(');

    next && next();
}