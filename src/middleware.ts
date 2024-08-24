import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'az', 'ru'],

  defaultLocale: 'en'
});

export const config = {
  matcher: ['/', '/(en|az|ru)/:path*']
};