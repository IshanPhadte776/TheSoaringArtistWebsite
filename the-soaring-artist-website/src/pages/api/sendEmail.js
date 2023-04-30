import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// sgMail.setApiKey(
//   "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"
// );

export default async function sendEmail(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email } = req.body;

  console.log(email);

  // Send email using the @sendgrid/mail package
  const msg = {
    to: email,
    from: "ishanphadte@gmail.com", // Replace with your own email address
    subject: "The Soaring Artist Newsletter Subscription",
    text: `, ${name}!`,
    html: `<p>It works, ${name}!</p>`,
  };

  try {
    await sgMail.send(msg);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Something went wrong" });
  }
}

