import React, { useEffect } from 'react';
import { useHistory } from '@docusaurus/router';

export default function Home() {
  const history = useHistory();

  useEffect(() => {
    history.push('/docs/intro'); // o simplemente '/docs' si querés que se abra el índice principal
  }, [history]);

  return null; // No muestra nada porque redirige
}