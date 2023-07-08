// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { mailOptions, transporter } from "../../config/nodemailer";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    if (
      !data.name ||
      !data.email ||
      !data.telephone ||
      !data.topic ||
      !data.message
    ) {
      return res.status(400).json({ message: "Bad request" });
    }

    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: data.topic,
        text: "This is a test",
        html: "<h1>Test title</h1> <p> email text body paragraph</p>",
      });
      return res.status(200).json({ success: true });
    } catch (error) {
      console.log(error);
    }

    console.log(req.body);
  }
};

export default handler;
