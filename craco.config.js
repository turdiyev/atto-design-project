const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#27AE60",
              "@font-family": `"Manrope", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
              'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
              'Noto Color Emoji'`,
              "@page-header-heading-title": "28px",
              "@border-radius-base": "8px",
              "@statistic-title-font-size": "@font-size-sm",
              "@statistic-content-font-size": "@font-size-lg",
              "@table-header-bg": "#F0F0F0",
              "@table-header-cell-split-color": "none",
              "@table-header-color":"#7A7A7A",
              "@btn-shadow": "0 2px 4px -2px rgba(0, 0, 0, 0.2)",
              "@btn-font-weight": "600",
              "@border-color-base": "#E6E6E6",
              "@height-base": "36px",
              "@height-lg": "44px",
              "@height-sm": "28px",

            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
