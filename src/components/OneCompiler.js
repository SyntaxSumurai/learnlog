import React, { useEffect } from 'react';

const OneCompiler = ({ url }) => {
  return <iframe src={url} width="100%" height="550" scrolling="no" seamless="seamless"></iframe>;
};

export default OneCompiler;