import * as React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

export default function SEO ({ title, description }) {
  const { site } = useStaticQuery(query)

  const {
    defaultTitle,
    defaultDescription,
    siteUrl,
    twitterUsername,
  } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: siteUrl,
  }

  return (
    <Helmet title={seo.title}>
      <meta name="description" content={seo.description}/>

      {seo.url && <meta property="og:url" content={seo.url}/>}

      <meta property="og:title" content={seo.title}/>
      <meta property="og:description" content={seo.description}/>

      {seo.image && <meta property="og:image" content={seo.image}/>}

      <meta name="twitter:card" content="summary_large_image"/>

      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername}/>
      )}

      <meta name="twitter:title" content={seo.title}/>

      {seo.description && (
        <meta name="twitter:description" content={seo.description}/>
      )}

      {seo.image && <meta name="twitter:image" content={seo.image}/>}
    </Helmet>
  )
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl
        twitterUsername
      }
    }
  }
`
