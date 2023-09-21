// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// const client = require('twilio')(
//   'AC8af3cee6e9b48bc5231528e9179f8630',
//   '26c7b5904b83f12c2039f330694721e6'
// );
// const cors = require('cors');
// app.use(cors({
//   origin: 'http://localhost:3000',
// }));
// app.use(express.json());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/',(req,res)=>{
//   res.send("welcome khushi");
// })
// app.post('/send-sms', (req, res) => {
//   const { name, mobile } = req.body;


//   client.messages
//     .create({
//       body: `Name: ${name}, Mobile: ${mobile}`,

//       from: '+18146662447',
//       to: '+919548430311',
//     })
//     .then((message) => {
//       console.log('Message sent:', message.sid);
//       res.sendStatus(200);
//     })
//     .catch((error) => {
//       console.error('Error sending message:', error);
//       res.sendStatus(500);
//     });
// });

// app.listen(2001, () => {
//   console.log('Server is running on port 2001');
// });
import express from 'express';
import bodyParser from 'body-parser';
import twilio from 'twilio';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 2001;

app.use(cors({
  origin: 'http://localhost:3000',
}));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send("welcome khushi");
});

app.post('/send-sms', (req, res) => {
  const { name, mobile } = req.body;

  // const client = twilio(
  //   'AC8af3cee6e9b48bc5231528e9179f8630',
  //   '26c7b5904b83f12c2039f330694721e6'
  // );

  const client = twilio(
    'AC8af3cee6e9b48bc5231528e9179f8630',
    'ccc37b6ea1491986c50dba6fa056078a'
  );

  client.messages
    .create({
      body: `Name: ${name}, Mobile: ${mobile}`,
      from: '+18146662447',
      to: '+919548430311',
    })
    .then((message) => {
      console.log('Message sent:', message.sid);
      res.sendStatus(200);
    })
    .catch((error) => {
      console.error('Error sending message:', error);
      res.sendStatus(500);
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
