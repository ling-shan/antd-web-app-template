import appAPI from '@x-poppy/web-sdk/dist/apis/app'
import React from 'react'
import ReactDOM from 'react-dom'

import pkg from '../../package.json';

function init() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const globlaNamespace: Record<string, any> = window;
  globlaNamespace.React = React;
  globlaNamespace.ReactDOM = ReactDOM;

  console.log('---------------------------------------------------');
  console.log (`${pkg.name}: ${pkg.version}`);
  console.log('---------------------------------------------------');
}

init();

export async function boostrap() {
  const appInfo = await appAPI.getByDomainWithCache();
  const appFaviconUrl = appInfo.favicon ?? '/favicon-default.ico';
  // set the favicon
  const faviconEle = document.head.querySelector('link[rel="icon"]');
  if (faviconEle) {
    faviconEle.setAttribute("href", appFaviconUrl);
  }

  // await new Promise((res) => {
  //   setTimeout(res, 5000)
  // })

  // TODO load the target page payload
}
