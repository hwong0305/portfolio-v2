/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import Helmet from 'react-helmet';

function SEO() {
  return (
    <Helmet>
      <title>Dev[Dot]Wong</title>
      <link rel="stylesheet" href="assets/css/main.css" />
    </Helmet>
  );
}

export default SEO;
