import { ContextMessageUpdate, Middleware } from 'telegraf';
import { translateMessage } from '../utils/translate-message';
import { validateMessage } from '../utils/validate-message';

export const messageHandler: Middleware<ContextMessageUpdate> = (ctx, next) => {
    const shouldTranslate: boolean = Reflect.get(messageHandler, 'shouldTranslate');
    if (!shouldTranslate) {
        next && next();
        return;
    }

    if (!validateMessage(ctx)) {
        next && next();
        return;
    }
    
    const update = ctx.update;
    
    if (update.message!.from!.username !== process.env.PERSON_USERNAME) {
        next && next();
        return;
    }
    
    if (!update.message!.text) {
        next && next();
        return;
    }

    const message = update.message!.text!;

    const translated = translateMessage(message);

    ctx.reply(translated);

    next && next();
}
