const express = require('express')
const app = express()
const port = 3000

app.use(express.static("."));

app.get("/entry2", (req, res) => {
    res.cookie("SESSIONID", "abcdefgh", { sameSite: "none", secure: true, partitioned: true });
    res.status(302);
    res.location("/page2.html");
    res.send("redirecting to page2");
})

app.get("/service", (req, res) => {
    res.send(JSON.stringify(req.headers, null, 2));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
