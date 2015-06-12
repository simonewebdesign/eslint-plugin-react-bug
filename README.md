## Reproducing the bug

```
npm install
gulp
```

You should see something like:

```
[14:45:43] Using gulpfile ~/Projects/eslint-plugin-react-bug/gulpfile.js
[14:45:43] Starting 'lint'...
[14:45:43] 'lint' errored after 123 ms
[14:45:43] ESLintError in plugin 'gulp-eslint'
Message:
    App is defined but never used
Details:
    fileName: /Users/simonevittori/Projects/eslint-plugin-react-bug/source/app.js
    lineNumber: 5
[14:45:43]
/Users/simonevittori/Projects/eslint-plugin-react-bug/source/app.js
  5:6  error  App is defined but never used  no-unused-vars

✖ 1 problem (1 error, 0 warnings)
```
