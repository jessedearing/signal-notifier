import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/request", (req, res) => {
  //const formData = req.body;
  //Send form data to signal

  res.send("Request for ride sent");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
