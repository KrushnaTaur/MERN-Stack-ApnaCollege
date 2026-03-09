const express = require("express");
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


// //handling requests
// app.use((req, res) => {
//     console.log("Received a request");
//     let code = "<h1>Welcome to Express.js</h1>";
//     res.send(code); //sending response
// });



//handling requests with different routes
app.get("/", (req, res) => {
    res.send("You are on the home page!");
});

app.get("/about", (req, res) => {
    res.send("You are on the about page!");
});

app.get("/contact", (req, res) => {
    res.send("You are on the contact page!");
});

app.post("/submit", (req, res) => {
    res.send("<h1>Form submitted successfully!</h1>"); 
});


//parameterized routes
app.get("/:username/:id", (req, res) => {
    let {username, id} = req.params;
    res.send(`Hello, ${username}! Your ID is ${id}.`);
});

app.get("/search", (req, res) => {
    let query = req.query.q;
    if (!query) {
        return res.send("Please provide a search query using the 'q' parameter.");
    }
    res.send(`You searched for: ${query}`);
});