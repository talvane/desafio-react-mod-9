export const config = {
  spotify: {
    authorizationURL: 'https://accounts.spotify.com/authorize',
    clientId: '3229e7bd626247c881fb919b3019f26c',
    redirectUrl: `${window.location.origin}/authorize`,
    webAPI: 'https://api.spotify.com/v1',
    scopes: ['user-read-email', 'user-read-private', 'streaming'],
  },
};
