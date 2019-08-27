import { Middleware, ContextMessageUpdate } from 'telegraf';
import { validateMessage } from '../utils/validate-message';

export const messageFilterHandler: Middleware<ContextMessageUpdate> = (ctx, next) => {
    const shouldTranslate: boolean = Reflect.get(messageFilterHandler, 'shouldTranslate');
    if (!shouldTranslate) {
        return;
    }

    if (!validateMessage(ctx)) {
        return;
    }
    
    const update = ctx.update;
    
    if (update.message!.from!.username !== process.env.PERSON_USERNAME) {
        return;
    }

    if (!update.message!.text) {
        return;
    }

    next && next();
}
