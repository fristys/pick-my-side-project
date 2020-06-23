const sass = require('node-sass');
const sveltePreprocess = require('svelte-preprocess');

module.exports = {
  preprocess: {
    ...sveltePreprocess({}),

    // related: https://github.com/UnwrittenFun/svelte-vscode/issues/1
    style: async ({ content, attributes }) => {
      if (
        !['text/sass', 'text/scss'].some(attributes.type) &&
        !['sass', 'scss'].some(attributes.lang)
      )
        return;

      return new Promise((resolve, reject) => {
        sass.render(
          {
            data: content,
            sourceMap: true,
            outFile: 'x' // this is necessary, but is ignored
          },
          (err, result) => {
            if (err) return reject(err);

            resolve({
              code: result.css.toString(),
              map: result.map.toString()
            });
          }
        );
      });
    }
  }
};
