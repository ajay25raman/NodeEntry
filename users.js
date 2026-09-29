const http = require('http');


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
    if (request.url == "/addNewUser" && request.method == 'POST') {
        let body = "";
        request.on("data", (value) => {
            body += value;
        })
        request.on("data", () => {

            const newUser = JSON.parse(body);

            users.push(newUser);

            response.writeHead(201, {
                "Content-Type": "application/json"
            });

            response.write(JSON.stringify({

                "message": "New User Added Successfully",
                newUser

            })
            )

            response.end()

        })

    }
    else if (request.url == "/users" && request.method == 'GET') {
        response.writeHead(200, {
            "Content-Type": "application/json"
        })

        response.write(JSON.stringify({
            "message": "All Users Fetched Successfully",
            users
        }));
        response.end();

    }
})

server.listen(3001, () => {
    console.log("Server is Running on 3001 Port No.")
})