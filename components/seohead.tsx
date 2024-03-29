import React from 'react'
import Head from 'next/head'
import settings from '../settings/seo'

type Props = {
  title?: string
  description?: string
}

const SEOHead: React.FC<Props> = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

SEOHead.defaultProps = {
  title: settings.meta.title,
  description: settings.meta.description,
}

export default SEOHead
