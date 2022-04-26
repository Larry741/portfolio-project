const { createTransport } = require("nodemailer");

const sendKosiMail = async (userEmail, message, name) => {
  const transporter = createTransport({
    service: "yahoo",
    auth: {
      user: "kosimbanefo@yahoo.com",
      pass: "hqcphiltjfxdvzoc",
    },
  });

  var mailOptions = {
    from: "kosimbanefo@yahoo.com",
    to: "kosimbanefo@gmail.com",
    subject: `${userEmail}: ${name} wants to hire you!!!`,
    text: message,
  };

  await transporter.sendMail(mailOptions);
};

export default sendKosiMail;