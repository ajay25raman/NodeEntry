const http = require('http');
const { json } = require('stream/consumers');

const users = [{
    "id": 1,
    "name": "Raman",
    "address": "Amnour"
},
{
    "id": 2,
    "name": "Ram",
    "address": "Amnour"
},
{
    "id": 3,
    "name": "Gopal Kumar",
    "address": "Patna"
}
]
const server = http.createServer((request, response) => {
    ///Get  All Users 
    if (request.url == '/users' && request.method == 'GET') {
        response.writeHead(200, {
            "Content-Type": "application/json"
        })
        response.write(JSON.stringify({
            "message": "All Users Fetched Successfully.",
            "users": users
        }));
        response.end();
    }
    /// Fetch User By userID

    else if (request.url.startsWith('/user/id/') && request.method == 'GET') {

        const userID = Number(request.url.split('/')[3]);

        const user = users.find((element) => element.id === userID);

        response.writeHead(200, {
            "Content-Type": "application/json"
        });
        response.write(JSON.stringify({
            "message": "User Fetched Successfully",
            "user": user
        }));
        response.end();

    }

    else {
        response.writeHead(404, {
            "Content-Type": "application/json"
        });
        response.end("This Url is Not Found.")
    }
});



server.listen(3001, () => {
    console.log("Server is Running on 3001 Port No.")
})