const routes = [
  {
    path: '/static/{param*}',
    method: 'GET',
    handler: {
      directory: {
        path: './dist',
      },
    },
    config: {
      cache: {
        expiresIn: 7 * 24 * 60 * 60 * 1000,
      },
    },
  },
  {
    path: '/',
    method: 'GET',
    handler: require('../handlers/homepage'),
  },
  {
    path: '/about',
    method: 'GET',
    handler: require('../handlers/about'),
  },
];

module.exports = routes;