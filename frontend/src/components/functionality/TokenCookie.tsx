const TokenCookie = (cookieName: string) => {
    const name = `${cookieName}=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const newCookieName = decodedCookie.split(';');
    for (let i = 0; i < newCookieName.length; i++) {
        let finalCookie = newCookieName[i];
        while (finalCookie.charAt(0) === ' ') {
            finalCookie = finalCookie.substring(1);
        }
        if (finalCookie.indexOf(name) === 0) {
            return finalCookie.substring(name.length, finalCookie.length);
        }
    }
    return 'False';
};

export default TokenCookie
