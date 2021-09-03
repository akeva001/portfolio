const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sendGridMail = require("@sendgrid/mail");
const { sendGridKey } = require("./keys.json");
const app = express();
const port = process.env.PORT || 4000;

sendGridMail.setApiKey(sendGridKey);

app.use(cors());
app.use(bodyParser.json());

let originAuth = (req, res, next) => {
  if (req.headers.origin == "https://www.alexkevakian.com") {
    return next();
  } else {
    res.status(401).json({
      success: false,
    });
  }
};

app.use((_, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://www.alexkevakian.com");

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", true);
  return next();
});

app.get("/", (req, res) => {
  res.send("Welcome to the Sendgrid Emailing Server");
});
app.get("/send-email", [
  originAuth,
  (req, res) => {
    const { recipient, sender, topic, mail, text } = req.query;

    const msg = {
      to: recipient,
      from: sender,
      subject: topic,
      text: mail + "\n" + text,
    };

    //   sendGridMail.send(msg).then((msg) => console.log(text));
    sendGridMail
      .send(msg)
      .then(() => {
        res.status(200).json({
          success: true,
        });
        console.log("Message sent");
      })
      .catch((error) => {
        res.status(401).json({
          success: false,
        });

        console.log(error.response.body);
      });
  },
]);

app.listen(port, () => console.log("Running on Port" + port));
