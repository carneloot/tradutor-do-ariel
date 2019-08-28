import { ContextMessageUpdate, Middleware } from 'telegraf';
import { messageFilterHandler } from '../handlers/message-filter.handler';

export const startTranslationCommand: Middleware<ContextMessageUpdate> = async (ctx, next) => {
    Reflect.set(messageFilterHandler, 'shouldTranslate', true);
    ctx.telegram.sendMessage(ctx.chat!.id, 'Agora eu vou traduzir o Ariel :D');
    // await ctx.reply('Agora eu vou traduzir o Ariel :D');
}