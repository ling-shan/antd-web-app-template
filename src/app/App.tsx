import React, { useEffect, useMemo, useState } from 'react'

import LoadingState from '@x-poppy/web-sdk/dist/react/components/LoadingState';
import ErrorState from '@x-poppy/web-sdk/dist/react/components/ErrorState';
import Application from '@x-poppy/web-sdk/dist/react/components/Application'

// import { PageRender, PageEditor } from '@x-poppy/page-editor'
import { boostrap } from './boostrap';

import styles from './App.module.css'

export function App() {
  const [appState, setAppState] = useState({
    ready: false,
    error: false,
  });

  useEffect(() => {
    (async () => {
      try {
        await boostrap();
        setAppState({
          ready: true,
          error: false,
        });

      } catch (err) {
        setAppState({
          ready: true,
          error: true,
        });
      }
    })();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // we need caceh here just only for the init logics.
  const content = useMemo(() => {
    if (appState.error) {
      return <ErrorState/>
    }

    if (appState.ready) {
      return (
        <Application>
          Hello
        </Application>
      )
    }

    return <LoadingState />
  }, [appState.error, appState.ready])

  return (
    <main className={styles.main}>
      { content }
    </main>
  )
}
