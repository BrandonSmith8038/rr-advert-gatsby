module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Alfa+Slab+One`,
          `Biryani\:300,400`, // you can also specify font weights and styles
        ],
      },
    },
  ],
}
