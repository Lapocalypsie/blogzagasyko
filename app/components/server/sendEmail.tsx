"use server";

const nodemailer = require("nodemailer");

const username = process.env.NEXT_PUBLIC_EMAIL_USERNAME;
const password = process.env.NEXT_PRIVATE_EMAIL_PASSWORD;
const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;

const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: username,
    pass: password,
  },
});

const mailOptions = (name: any, email: any, message: any) => ({
  from: username,
  to: myEmail,
  subject: "Quelqu'un a envoyé un mail depuis Za Gasy ko!",
  text: `${name} voudrait te contacter, tu peux le contacter à cette email : ${email}. Voici ce qu'il aimerait te dire :${message}`,
});

// Updated sendEmail function
export async function sendEmail(data: any) {
  const { name, email, message } = data; // Destructure data for clarity

  // Create mail options with provided data
  const options = mailOptions(name, email, message);

  try {
    const info = await transporter.sendMail(options); // Await the sendMail call
    return { success: true, message: "Email sent successfully!" }; // Success response
  } catch (error) {
    console.error("Error sending email: ", error); // Log the error details
    return { success: false, message: "Error sending email." }; // Error response
  }
}
