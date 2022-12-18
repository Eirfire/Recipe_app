import Head from 'next/head';
import React from 'react';

interface PagesSeo {
  title: string;
  url: string;
  imgUrl: string;
  description: string;
}

export default function PageSEO({ title, url, imgUrl, description }: PagesSeo) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="title" content="Meally — Find your next meal" />
        <meta
          name="description"
          content="Find recipes you love all free and open source, completely powered by the community "
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content="Meally — Find your next meal" />
        <meta
          property="og:description"
          content="Find recipes you love all free and open source, completely powered by the community "
        />
        <meta property="og:image" content={imgUrl} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content="Meally — Find your next meal" />
        <meta
          property="twitter:description"
          content="Find recipes you love all free and open source, completely powered by the community "
        />
        <meta property="twitter:image" content={imgUrl}></meta>

        <link rel="manifest" href="manifest.json" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="favicon.png" />
      </Head>
    </>
  );
}
