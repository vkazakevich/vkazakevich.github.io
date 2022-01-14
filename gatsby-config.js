module.exports = {
  siteMetadata: {
    siteUrl: 'https://vkazakevich.github.io',
    title: 'Vitaliy Kazakevich – Software Developer',
    description: 'Vitaliy Kazakevich – Software Developer',
    twitterUsername: "@vkazakevich_",
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    'gatsby-plugin-react-helmet'
  ],
}
