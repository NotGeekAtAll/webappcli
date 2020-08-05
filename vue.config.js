const autoprefixer = require('autoprefixer');
const pxtoviewport = require('postcss-px-to-viewport')

// const target = 'https://evp.51job.com'
// const localhost = 'localhost'

module.exports = {
  outputDir: 'dist',
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  // devServer: {
  //   proxy: {
  //     '/51job': {
  //       target,
  //       changeOrigin: true,
  //       cookieDomainRewrite: {
  //         '*': localhost // 把相应的 cookie 域都设置成 localhost
  //       },
  //       withCredentials: true,
  //       headers: {
  //         Referer: target
  //       }
  //     }
  //   }
  // },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtoviewport({
            viewportWidth: 750
          })
        ]
      },
      less: {
        modifyVars: {
          'theme-color': '#01857C'
        }
      }
    }
  }
};