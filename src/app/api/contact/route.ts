import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    // Validate required fields
    if (!email || !message) {
      return NextResponse.json(
        { error: "Email and message are required" },
        { status: 400 }
      );
    }
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.NEXT_EMAIL_USER, // Use environment variables
        pass: process.env.NEXT_EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: `Empowerment Group <${email}>`,
      to: " info@empowerment.group",
      subject: `${name}`,
      html: `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Empowerment Group</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            border: 3px solid #ff0000;
            padding: 20px;
            text-align: center;
            border-radius: 5px 5px 0 0;
        }
        .header img {
            max-width: 180px;
        }
        .content {
            padding: 25px;
            background-color: #ffffff;
            border: 1px solid #e0e0e0;
            border-top: none;
            border-radius: 0 0 5px 5px;
        }
        .footer {
            margin-top: 20px;
            font-size: 12px;
            color: #777777;
            text-align: center;
        }
        .details {
            background-color: #f9f9f9;
            padding: 15px;
            border-radius: 5px;
            margin-bottom: 20px;
        }
        .details p {
            margin: 8px 0;
        }
        .label {
            font-weight: bold;
            color: #555555;
            display: inline-block;
            width: 80px;
        }
        .message {
            background-color: #f0f0f0;
            padding: 15px;
            border-left: 4px solid #ff0000;
            margin-top: 15px;
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #ff0000;
            color: white !important;
            text-decoration: none;
            border-radius: 4px;
            font-weight: bold;
            margin-top: 15px;
        }
    </style>
</head>
<body>
    <div class="header">
        <!-- Replace with your logo URL -->
        <img src="https://empowerment.group/logo.png" alt="Empowerment Group Logo">
    </div>
    
    <div class="content">
        <h2 style="color: #ff0000; margin-top: 0;">Contact Message</h2>
        
        <div class="details">
            <p><span class="label">Name:</span> ${name}</p>
            <p><span class="label">Email:</span> <a href="mailto:${email}">${email}</a></p>
            <p><span class="label">Subject:</span> ${subject}</p>
        </div>
        
        <div class="message">
            <p><strong>Message:</strong></p>
            <p>${message}</p>
        </div>
        
        <p style="margin-top: 25px;">
            <a href="mailto:${email}" class="button">Reply to ${name}</a>
        </p>
    </div>
    
    <div class="footer">
        <p>© ${new Date().getFullYear()} Empowerment Group. All rights reserved.</p>
        <p>
            <a href="https://empowerment.group" style="color: #ff0000; text-decoration: none;">Website</a> | 
            <a href="https://empowerment.group/privacy" style="color: #ff0000; text-decoration: none;">Privacy Policy</a>
        </p>
    </div>
</body>
</html>`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error sending email:", error.message);
    } else {
      console.error("Error sending email:", error);
    }
    return NextResponse.json({ error: "Error sending email" }, { status: 500 });
  }
}
