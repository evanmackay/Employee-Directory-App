var express = require("express")

var app = express()
var PORT = process.env.PORT || 3000

// app.get("/", function(req, res) {
//     res.sendFile("./build/index.html")
// })

app.use(express.static("build"))


app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT)
})