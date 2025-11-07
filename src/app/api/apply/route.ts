import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// API route for job application submission
export async function POST(req: Request) {
  try {
    // Parse incoming form data (JSON from your frontend)
    const body = await req.json();
    const { fullName, email, message, resumeBase64 } = body;

    if (!fullName || !email) {
      return NextResponse.json(
        { success: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    // Setup transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.NEXT_EMAIL_USER,
        pass: process.env.NEXT_EMAIL_PASSWORD,
      },
    });

    // Email content
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; padding: 16px;">
        <h2>New Job Application</h2>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${message ? `<p><strong>Message:</strong> ${message}</p>` : ""}
        <hr/>
        <p>This email was sent automatically from the Empowerment Group career page.</p>
      </div>
    `;

    // Prepare email with optional attachment
    const mailOptions: nodemailer.SendMailOptions = {
      from: `"Empowerment Group Careers" <${process.env.NEXT_EMAIL_USER}>`,
      to: "info@empowerment.group", // admin email
      subject: `New Job Application from ${fullName}`,
      html: htmlContent,
    };

    // Attach file if available (sent as base64)
    if (resumeBase64) {
      mailOptions.attachments = [
        {
          filename: "resume.pdf", // or dynamically name it
          content: resumeBase64.split("base64,")[1],
          encoding: "base64",
        },
      ];
    }

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Application sent successfully!",
    });
  } catch (error) {
    console.error("❌ Error sending job application email:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send application email." },
      { status: 500 }
    );
  }
}
