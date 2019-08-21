import { Middleware, ContextMessageUpdate } from 'telegraf';
import { isAdmin } from '../utils/is-admin';
import { messageHandler } from '../handlers/message.handler';

export const startTranslationCommand: Middleware<ContextMessageUpdate> = async (ctx, next) => {
    if (!isAdmin(ctx.update.message!.from)) {
        await ctx.reply('Voce nao tem permissão para fazer isso!');
        next && next();
        return;
    }

    Reflect.set(messageHandler, 'shouldTranslate', true);
    await ctx.reply('Agora o bot irá traduzir o Ariel :D');

    next && next();
}