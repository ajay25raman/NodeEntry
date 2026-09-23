// http Module
const http = require('http');
// createServer - method
const students = [{
    "name": "Raman",
    "address": "Amnour"
},
{
    "name": "Ram",
    "address": "Amnour"
}
]
const app = http.createServer((request, response) => {
    response.writeHead(200, {
        "Content-Type": "application/json"
    })
    response.write(JSON.stringify(students));

    response.end();
})
/// json.stringify
// writeHead
// Start Server
// listen
app.listen(3000, () => {
    console.log("Server is Running.");
})

/// json.stringify()
// object to json

