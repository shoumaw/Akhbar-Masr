import snoowrap from 'snoowrap';

export async function signinApi(){
    var code = new URL(window.location.href).searchParams.get('code');
    /*const r = await snoowrap.fromAuthCode({
    code,
    clientId: process.env.REACT_APP_CLIENT_ID,
    redirectUri: 'http://akhbarmasr.com:3000/',
    })
    console.log("New",r)
    return r*/
    return new snoowrap({
        userAgent:"Akhbar Masr",
        clientId:process.env.REACT_APP_CLIENT_ID,
        clientSecret:process.env.REACT_APP_CLIENT_SECRET,
        refreshToken:code,
      })
}

export function redirectApi(){
    var authenticationUrl = snoowrap.getAuthUrl({
    clientId: 'Bw0B15cPRTDvYA',
    scope: ['identity', 'edit', 'read', 'save', 'submit', 'vote', 'history', 'mysubreddits'],
    redirectUri: 'http://akhbarmasr.com:3000/',
    permanent: true,
    state: 'fe211bebc52eb3da9bef8db6e63104d3' // a random string, this could be validated when the user is redirected back
    });
    // --> 'https://www.reddit.com/api/v1/authorize?client_id=foobarbaz&response_type=code&state= ...'

    window.location = authenticationUrl; // send the user to the authentication url
}