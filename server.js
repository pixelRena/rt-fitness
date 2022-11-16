const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const aws = require("aws-sdk");
dotenv.config()

const app = express()
const port = process.env.PORT || 3000
const ses = new aws.SES({region:"us-east-1"})

const buildPath = path.join(__dirname, 'build')

app.use(express.static(buildPath))
app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'))
})

app.post('/send-email', (req,res) => {
  const {email, name, phone, goals, sex, location, experience, ready} = req.body;
  
  sesTest()
  .then((val => res.send('Success')))
  .catch(err => res.send('Something went wrong', err));

  function sesTest(){
    const params = {
      Destination: {
        ToAddresses: [process.env.AD_EMAIL]
      },
      Message: {
        Body: {
          Html: {
            Data: ` 
            <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <style>
              body {
                font-family: "Arial";
              }
              .container {
                display:flex;
              }
              .fw-5 {
                font-weight: bolder;
              }
              .btn-dark {
                cursor:pointer;
                padding:10px;
                background-color:#f47308;
                color: #fff;
                border:0;
              }
              .btn-dark:hover {
                cursor:pointer;
                padding:10px;
                background-color:#626262;
                color: #fff;
                border:0;
              }
              .card {
                position: relative;
                min-width: 0;
                word-wrap: break-word;
                background-color: #fff;
                background-clip: border-box;
                border: 1px solid rgba(0,0,0,.125);
                border-radius: 0.25rem
              }
              .card-body {
                padding:30px;
              }
              .card-text {
                font-size: 20px;
              }
              .card-header {
                font-family: Noto Sans, sans-serif;
                background-color: rgba(0,0,0,0.03);
                border-bottom: 1px solid rgba(0,0,0,.125);
              }
              .text-center {
                text-align:center;
              }
              .btn-dark {
                text-decoration:none;
                color:white !important;
                text-transform: capitalize;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="card">
                <div class="card-header text-center"><h2>Redemption Temple Fitness</h2></div>
                  <div class="card-body">
                    <h2 class="card-title text-center">New Application</h2>
                    <p class="card-text">
                    <em>Name:</em> ${name}<br>
                    <em>Email Address:</em> ${email}<br>
                    <em>Phone Number:</em> ${phone}<br>
                    <em>Location:</em> ${location}<br>
                    <em>Sex</em>: ${sex}<br>
                    <em>Have they ever worked out?:</em> "${experience}"<br>
                    <em>Goals:</em> "${goals}"<br>
                    <em>Are they ready?:</em> "${ready}"<br>
                    </p>
                    <div class="text-center">
                      <a href="mailto:${email}" class="fw-5 rounded-0 btn-dark">Send Email</a>
                      <a href="tel:${phone}" class="fw-5 rounded-0 btn-dark">Call ${name}</a>
                    </div>
                  </div>
                </div>
            </div>
          </body>`
          },
        },
        Subject: {
          Data: "You have a new application!"
        }
      },
      Source: "sdean013199@gmail.com"
    };
    return ses.sendEmail(params).promise();
  }
})

app.listen(port, () => {
  console.log(`Server is up on ${port}`)
})
