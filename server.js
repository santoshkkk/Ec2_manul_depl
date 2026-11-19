const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send(`
        <html>
          <head>
            <title>AWS EC2 Deployment</title>
          </head>
          <body style="text-align:center; font-family:Arial;">
            <h1>Welcome to My AWS EC2 Project!</h1>
            <h2>Manual Deployment Successful</h2>
            <p>Application: Node.js + Express</p>
            <p>Server: AWS EC2 Ubuntu</p>
            <p>Reverse Proxy: NGINX</p>
            <p>Deployment: Manual</p>
          </body>
        </html>
    `);
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "UP",
        application: "Node.js",
        message: "Application is healthy"
    });
});

app.listen(PORT, "127.0.0.1", () => {
    console.log(`Application running on port ${PORT}`);
});
