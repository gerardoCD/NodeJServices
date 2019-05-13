var express = require('express');
var app = express();

app.get('/data', function(req, res) {
    let salida = {
        nombre: "Gerardo",
        edad: 15,
        url: req.url
    }
    res.send(salida)

    res.send('Hello World');
})

var server = app.listen(process.env.PORT || 8081, function() {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})