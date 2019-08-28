import { Middleware, ContextMessageUpdate } from 'telegraf';
import { isAdmin } from '../utils/is-admin';

export const adminFilterHandler: Middleware<ContextMessageUpdate> = async (ctx, next) => {
    if (!isAdmin(ctx.update.message!.from)) {
        await ctx.reply('Voce nao tem permissão para fazer isso!');
        return;
    }

    next && next();
}