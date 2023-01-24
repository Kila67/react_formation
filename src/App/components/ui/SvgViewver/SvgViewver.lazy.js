import React, { lazy, Suspense } from 'react';

const LazySvgViewver = lazy(() => import('./SvgViewver'));

const SvgViewver = props => (
  <Suspense fallback={null}>
    <LazySvgViewver {...props} />
  </Suspense>
);

export default SvgViewver;
