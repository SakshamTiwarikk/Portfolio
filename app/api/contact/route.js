import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // 🔐 Configure Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your Gmail
        pass: process.env.EMAIL_PASS, // your App Password
      },
    });

    // 📧 Message to YOU (the portfolio owner)
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: "sakshamtiwari157@gmail.com", // ✅ your inbox
      subject: `New Contact Form Submission from ${name}`,
      text: `
You have a new message from your portfolio contact form:

Name: ${name}
Email: ${email}

Message:
${message}
      `,
    };

    // ✉️ Send the email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Email sending error:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to send email",
        details: error.message,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
