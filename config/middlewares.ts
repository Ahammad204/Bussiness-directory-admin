export default [
  'strapi::logger',
  'strapi::errors',
   {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'ik.imagekit.io', // Add ImageKit domain for images
            // Add your custom domain if you use one with ImageKit:
            // 'images.yourdomain.com',
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'ik.imagekit.io', // Add ImageKit domain for videos/audio
            // Add your custom domain if you use one:
            // 'media.yourdomain.com',
          ],
          'frame-src': [
            "'self'",
            'data:',
            'blob:',
            'eml.imagekit.io', // For ImageKit UI components
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
 {
    name: 'strapi::cors',
    config: {
      origin: [
        'http://localhost:8081',
        'http://localhost:19006',
        'https://businessdirectorys.netlify.app',
        'https://bussiness-directory-one.vercel.app'
      ],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      headers: '*',
      credentials: true
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
