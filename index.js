import nodemailer from "nodemailer";

const data = [
    { name: 'Aryesh', email: "aryeshsrivastava@gmail.com", age: 21, major: 'Computer Science'},
    { name: 'Abhinav', email: 'mishraabhinav2306@gmail.com', age: 19, major: 'Mathematics'},
    { name: 'Siddhi', email: 'siddhisinghal5@gmail.com', age: 20, major: 'Physics'},
    { name: 'Madan', email: 'madanjha2468@gmail.com', age: 20, major: 'Chemistry'}
];

export class LazyAuth{

    user = null;
    email = null;

    constructor(details) {
        this.email = details.email;
        this.user = null;
    }


    async intialaizeApp(){
        this.user = data.find(person => {
            if (person.email == this.email) {
                return person;
            }
            }
        );
    }

    signinwithemail(sendermail){
        console.log(this.user)
        console.log(this.sendermail)

        // const transporter = nodemailer.createTransport({
        //     service: 'gmail',
        //     auth: {
        //         user: 'aryeshsrivastava@gmail.com', // Your email address
        //         pass: 'blan tvrj bbra pjmu'   // Your email password (use an app-specific password if 2FA is enabled)
        //     }
        // });

        // const mailOptions = {
        //     from: 'aryeshsrivastava@gmail.com', // Sender address
        //     to: sendermail,                       // List of recipients
        //     subject: "Finish logging in",             // Subject line
        //     // text: "Hello There" ,
        //     html: `Hello There`                   // Plain text body
        // };
        
        // transporter.sendMail(mailOptions, (error, info) => {
        //     if (error) {
        //         console.error('Error sending email:', error);
        //         return res.status(500).json({ error: 'Failed to send email' });
        //     }
        //     console.log('Email sent:', info.response);
        //     res.status(200).json({ message: 'Email sent successfully', info });
        // });
    }

}

export async function printtext(text){
    console.log(text);
    alert(text);
}

