const express = require('express')
const path = require('path')

const app = express();

const publicPath = path.join(__dirname , '..', 'public')

const port = process.env.PORT || 3000

// Customize express server. 
app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'))
})

app.listen(port, ()=> {
    console.log("Server is up ")
})



// const sgMail = require('@sendgrid/mail');

// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// const sendWelcomeEmail = (email, name) => {
//         const msg = {
//             to: 'artichokepresents@gmail.com',
//             from: 'tanimaranjan@gmail.com',
//             subject: 'Im testing sending email',
//             text: `Testing`
//             // ,
//             // html: '<strong>NodeJS App</strong>',
//     };
//     console.log('sending');
//   sgMail.send(msg);
// }

// try {
//     sendWelcomeEmail();
// } catch(error) {
//     console.log(error);
// }
