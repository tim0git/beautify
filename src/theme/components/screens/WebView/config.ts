export const config = {
  WebViewProps: {
    cacheEnabled: true,
    contentMode: 'mobile', // IOS ONLY
    originWhitelist: ['https://*'], //Only allow traffic to SSL websites
  },
};
