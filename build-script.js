const fs = require('fs-extra');
const concat = require('concat');

(async function build() {

    const files = [
        './dist/elements/runtime-es2015.js',
        './dist/elements/polyfills-es2015.js',
        './dist/elements/main-es2015.js'
    ]

    await fs.ensureDir('dist/ngx-framework');

    await concat(files, 'dist/ngx-framework/ngx-framework.js');
    console.info('Web Components created successfully!');

})()