import nodemailer from "nodemailer";

const _EMAIL = process.env.EMAIL;
const _PASS = process.env.EMAIL_PASS;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: _EMAIL,
    pass: _PASS,
  },
});

export const mailOptions = {
  from: _EMAIL,
  to: _EMAIL,
};
