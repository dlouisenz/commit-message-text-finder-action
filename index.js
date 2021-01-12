const core = require('@actions/core');
const github = require('@actions/github');

try {
  const textToFind = core.getInput('textToFind');

  core.setOutput(
    'textFound',
    github.context.payload.commits[0].message.includes(textToFind).toString(),
  );
} catch (error) {
  core.setFailed(error.message);
}
