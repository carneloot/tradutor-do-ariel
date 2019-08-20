export const isAdmin = (username?: string): boolean => {
    if (!username) {
        return false;
    }
    const admins = process.env.ADMINS!.split(',');
    return !!admins.find(admin => username === admin);
}