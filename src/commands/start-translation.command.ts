import { ContextMessageUpdate, Middleware } from 'telegraf';
import { messageFilterHandler } from '../handlers/message-filter.handler';
import { isAdmin } from '../utils/is-admin';

export const startTranslationCommand: Middleware<ContextMessageUpdate> = async (ctx, next) => {
    if (!isAdmin(ctx.update.message!.from)) {
        await ctx.reply('Voce nao tem permissão para fazer isso!');
        next && next();
        return;
    }

    Reflect.set(messageFilterHandler, 'shouldTranslate', true);
    await ctx.reply('Agora o bot irá traduzir o Ariel :D');

    next && next();
}