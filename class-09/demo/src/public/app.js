const authorizeUrl = 'https://github.com/login/oauth/authorize';
const options = {
    client_id: 'f99cc8c339968475c82d',
    scope: 'read:user',
    state: 'some_random_string'
};

const queryString = Object.keys(options)
    .map((key) => {
        return `${key}=${encodeURIComponent(options[key])}`
        // client_id=f99cc8c339968475c82d&scope=readEncodeColon&state=some_randome_string
    }).join('&');

console.log('query string: ', queryString);

const authUrl = `${authorizeUrl}?${queryString}`;
const a = document.getElementById('oauth');
a.setAttribute('href', authUrl);