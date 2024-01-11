import scanner from "sonarqube-scanner";

scanner(
  {
    serverUrl: "http://localhost:9000",
    token: "sqp_f4061a8eacde3e6874c87faade855e25e6c46a6c",
    options: {
      "sonar.projectName": "local-test",
      "sonar.projectDescription": "scan locally project",
      "sonar.projectKey": "local-test",
      "sonar.projectVersion": "0.0.1",
      "sonar.exclusions": "**/*.test.js",
      "sonar.sourceEncoding": "UTF-8",
      //   "sonar.javascript.lcov.reportPaths": "*/coverage/lcov.info",
      //   "sonar.testExecutionReportPaths": "coverage/jest/testlog.xml",
    },
  },
  () => process.exit()
);
