reproduction for https://bugzilla.mozilla.org/show_bug.cgi?id=1935088

run:

```
npm i
node index.js
```

open http://localhost:3000/ in Firefox 133. The iframe loads from http://127.0.0.1:3000/ which should result in cross origin iframe that is needed to reproduce the issue.
