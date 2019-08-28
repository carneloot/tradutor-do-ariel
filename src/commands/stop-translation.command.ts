import { ContextMessageUpdate, Middleware } from 'telegraf';
import { messageFilterHandler } from '../handlers/message-filter.handler';

export const stopTranslationCommand: Middleware<ContextMessageUpdate> = async (ctx, next) => {
    Reflect.set(messageFilterHandler, 'shouldTranslate', false);
    await ctx.telegram.sendMessage(ctx.chat!.id, 'Agora eu não vou mais traduzir o Ariel :(');
    // await ctx.reply('Agora eu não vou mais traduzir o Ariel :(');
}