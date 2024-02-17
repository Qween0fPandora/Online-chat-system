const express = require("express"); // runs http server
const cors = require("cors"); // call the server from any other origin

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

const axios = require("axios"); // make requests to Chat Engine API

app.post("/authenticate", async (req, res) => {
  const { username } = req.body; // get the username from the request
// Get or create user on Chat Engine!
  try {
    const r = await axios.put(
        'https://api.chatengine.io/users/',
        {username: username, secret: username, first_name: username},
        {headers: { "Private-Key": "241d97e8-27c1-4a93-98b0-6a07405838d2" }}
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

app.listen(3001); // run the app on port 3001



