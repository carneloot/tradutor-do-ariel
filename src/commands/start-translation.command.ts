import { Middleware, ContextMessageUpdate } from 'telegraf';
import { isAdmin } from '../utils/is-admin';
import { messageHandler } from '../handlers/message.handler';

export const startTranslationCommand: Middleware<ContextMessageUpdate> = (ctx, next) => {
    if (!isAdmin(ctx.update.message!.from!.username)) {
        ctx.reply('Voce nao tem permissão para fazer isso!');
        next && next();
        return;
    }

    Reflect.set(messageHandler, 'shouldTranslate', true);
    ctx.reply('Agora o bot irá traduzir o Ariel :D');

    next && next();
}