import handler from "../../../lib/handler";
import isEmail from "validator/lib/isEmail";
import sendKosiMail from '../../../lib/mail';

export default handler().post( async (req, res) => {
  const { email, message, name } = req.body;

  if (!isEmail(email) || message.length < 5) {
    return res.status(410).json({message: 'please fill all input fields'});
  } 

  try {
    await sendKosiMail(email, message, name);
    return res.status(201).json({message: 'Email sent successfully'});
  } catch (err) {
    return res.status(420).json({ message: "Could not process your request. please resend the email"});
  }
})