module.exports = {
  transpileDependencies: [
    "vuetify"
  ],
  publicPath: process.env.NODE_ENV === 'production'
    ? 'https://dream-factory.pcitech.com.ph'
    : '/',
  pages: {
    index: {
      entry: './src/components/landing/main.js',
      template: 'public/index.html',
      title: 'Home Page',
      chunks: ['chunk-vendors', 'chunk-common', 'index'],
    },
    teacher: {
      entry: './src/components/teacher/main.js',
      template: 'public/index.html',
      title: 'Teacher Dashboard',
      chunks: ['chunk-vendors', 'chunk-common', 'teacher'],
    },
    404: {
      entry: './src/components/callback/main.js',
      template: 'public/index.html',
      title: '404',
      chunks: ['chunk-vendors', 'chunk-common', '404'],
    },
  },
}