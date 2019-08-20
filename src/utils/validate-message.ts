import { ContextMessageUpdate } from 'telegraf';

export const validateMessage = (ctx: ContextMessageUpdate): boolean => {
    if (ctx.updateType !== 'message') {
        return false;
    }

    const update = ctx.update;

    if (!update.message) {
        return false;
    }

    if (update.message.chat.type !== 'group') {
        return false;
    }

    if (!update.message.from) {
        return false;
    }

    return true;
}