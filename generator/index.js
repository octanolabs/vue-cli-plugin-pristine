/** @typedef {import('@vue/cli/lib/GeneratorAPI')} GeneratorAPI */

/**
 * @param {GeneratorAPI} api
 * @param {any} options
 */
module.exports = (api, options) => {
  api.extendPackage({
    vue: {
      pluginOptions: {
        pristinePlugin: {
          useCircleCI: options.useCircleCI
        }
      }
    }
  })

  api.render('./default', {
    useCircleCI: options.useCircleCI
  })

  if (options.useCircleCI) {
    api.render('./circleci', {
      useCircleCI: options.useCircleCI,
    })
  }
}
