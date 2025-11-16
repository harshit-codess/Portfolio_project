const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
if(process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const app = express();

app.use(cors());
app.use(express.json());

//Nodemailer
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});



app.post("/api/contact", async (req, res) => {
    const { name, email, phone, message } = req.body;
    console.log("Recieved form data");
    console.log(req.body);

    const messageOption = {
        from: email,
        to: process.env.SMTP_USER,
        subject: "New Conatct Form Mesage",
        text: `Name: ${name}, email: ${email}, Message: ${message} & Phone no.: ${phone}`,
    }

    try {
        const info = await transporter.sendMail(messageOption);
        // console.log("Message sent:", info.messageId);

        res.json({ success: true, data: req.body });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error });
    }
})


// const port = process.env.PORT || 3000;

// app.listen(port, () => {
//     console.log(`app is listing on port 3000`);
// })

// do not use app.listen() in vercel
module.exports = app
