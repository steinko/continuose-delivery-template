const scanner = require('sonarqube-scanner');

scanner(
  {
    serverUrl : 'https://sonarcloud.io/',
    token : "730e95d52b7508b871eed7bcc07299b806b9ba83",
    options: {
      'sonar.projectName': 'frontend-gitlab-ci-cd',
      'sonar.projectDescription': 'Frontend framwork of CI/CD implemenetd in gitlab',
      'sonar.sources': 'src',
      'sonar.tests': 'src'
    }
  },
  () => process.exit()
)