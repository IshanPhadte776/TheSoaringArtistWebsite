import sgMail from "@sendgrid/mail";

sgMail.setApiKey('Blank')

export default async function sendEmail(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email } = req.body;

  console.log(email);

  // Send email using the @sendgrid/mail package
  const msg = {
    to: email,
    from: "thesoaringartist@gmail.com", // Replace with your own email address
    subject: "The Soaring Artist Newsletter Subscription",
    text: `, ${name}!`,
    html: `<p>Thanks for Subscribing to the Newsletter, ${name}!</p>`,
  };

  try {
    await sgMail.send(msg);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Something went wrong" });
  }
}

