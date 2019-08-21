import { User } from 'telegram-typings';

export const isAdmin = (user?: User): boolean => {
    if (!user) {
        return false;
    }
    const admins = process.env.ADMINS!.split(',').map(Number);
    return !!admins.find(admin => user.id === admin);
}