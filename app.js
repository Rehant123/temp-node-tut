const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Welcome to our homepage");
    } else if (req.url === "/about") {
        res.end("About us");
    } else {
        res.end(
            `<h1>Oops!</h1>
            <p>We can't seem to find the page</p>
            <a href="/">Go back to homepage</a>`
        );
    }
});

server.listen(5000);
