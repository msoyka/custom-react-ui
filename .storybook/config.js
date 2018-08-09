import { configure } from '@storybook/react';
import WebFont from 'webfontloader';
import { injectGlobal } from 'styled-components';
import styles from 'theme/globals';
import { webFontConfig } from 'theme/fonts';

const req = require.context('components', true, /stories\.js$/);

function loadStories() {
  req.keys().forEach(req);
}

WebFont.load(webFontConfig);
injectGlobal`${styles}`;
configure(loadStories, module);
