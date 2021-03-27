var express = require('express');
var app = express();

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});


app.get("/api/hello", (req, res) => {
    res.json({ greeting: 'hello API' });
});

app.get("/api/whoami", (req, res) => {
    let ueserInfo = {
        "ipaddress": req.ip,
        "language": req.headers['accept-language'].toString(), 
        "software": req.headers['user-agent'].toString()
    }
    res.json(ueserInfo);
})

var listener = app.listen(4000, function () {
    console.log('Your app is listening on port ' + listener.address().port);
});