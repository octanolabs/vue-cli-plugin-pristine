/** @type {import('inquirer').Questions} */
module.exports = [
  // Prompts
  // https://cli.vuejs.org/dev-guide/plugin-dev.html#prompts
  {
    name: 'useCircleCI',
    type: 'confirm',
    message: 'Use CircleCI ?',
    default: true
  }
]
