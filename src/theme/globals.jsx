import normalizeCSS from 'normalize.css';
import { typography } from './index';

export default `
    ${normalizeCSS}
    
    html {
        font-size: 100%;
    }
    
    body {
        font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    }

    .wf-active body {
        font-family: ${typography.body};
    }
`;
