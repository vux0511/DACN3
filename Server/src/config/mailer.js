import nodeMailer from "nodemailer";

let adminEmail = process.env.MAIL_USER;
let adminPassword = process.env.MAIL_PASSWORD;
let mailHost = process.env.MAIL_HOST;
let mailPort = process.env.MAIL_PORT;

let sendMail = (to, subject, htmlContent) => {
    console.log(to);
    console.log(subject);
    console.log(htmlContent);
    let transporter = nodeMailer.createTransport({
        service: "gmail",

        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASSWORD,
        },
    });
    let options = {
        from: process.env.MAIL_USER,
        to: to,
        subject: subject,
        html: htmlContent,
    };
    console.log(options);

    return transporter.sendMail(options); // thí default return a promise
};

export default sendMail;
