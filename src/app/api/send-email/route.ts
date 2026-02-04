import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, message, subject } = body;

        // Basic validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Configure transporter with Hostinger SMTP
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: true, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Email content
        const mailOptions = {
            from: `"FxTrusts Contact" <${process.env.SMTP_USER}>`,
            to: 'info@fxtrusts.com, financewithyoforex@gmail.com',
            replyTo: email, // Reply to the person who filled the form
            subject: subject || `New Contact Form Submission from ${name}`,
            text: `
New Contact Form Submission

Name: ${name}
Email: ${email}

Message:
${message}

----------------------------------------------------
© ${new Date().getFullYear()} FxTrusts Ltd. All rights reserved.
This email was sent from the contact form on fxtrusts.com
            `,
            html: `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f3f4f6; color: #111827;">
    <div style="max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);">
        
        <!-- Header -->
        <div style="background-color: #0f172a; padding: 32px 40px; text-align: center;">
            <img src="https://fxtrusts.com/logo.png" alt="FxTrusts" style="height: 40px; object-fit: contain;">
             <!-- Fallback text if logo doesn't load -->
            <div style="color: white; font-size: 24px; font-weight: 700; margin-top: 8px; display: none;">FxTrusts</div>
        </div>

        <!-- Body -->
        <div style="padding: 40px;">
            <h2 style="margin-top: 0; color: #111827; font-size: 24px; font-weight: 700; border-bottom: 2px solid #f3f4f6; padding-bottom: 16px;">New Contact Submission</h2>
            
            <div style="margin-top: 24px;">
                <p style="margin: 0; color: #6b7280; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600;">Name</p>
                <p style="margin: 4px 0 16px 0; color: #111827; font-size: 16px; font-weight: 500;">${name}</p>
                
                <p style="margin: 0; color: #6b7280; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600;">Email</p>
                <p style="margin: 4px 0 16px 0; color: #111827; font-size: 16px; font-weight: 500;">
                    <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
                </p>
            </div>

            <!-- Message Box -->
            <div style="margin-top: 24px;">
                <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600;">Message</p>
                <div style="background-color: #eff6ff; border-left: 4px solid #2563eb; padding: 16px 20px; border-radius: 4px; color: #1e3a8a; line-height: 1.6;">
                    ${message.replace(/\n/g, '<br>')}
                </div>
            </div>

            <!-- Action Button -->
            <div style="margin-top: 32px; text-align: center;">
                <a href="mailto:${email}?subject=Re: Your inquiry to FxTrusts" style="display: inline-block; background-color: #2563eb; color: #ffffff; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 16px; transition: background-color 0.2s;">Reply to ${name.split(' ')[0]}</a>
            </div>
        </div>

        <!-- Footer -->
        <div style="background-color: #f9fafb; padding: 24px; text-align: center; border-top: 1px solid #e5e7eb;">
            <p style="margin: 0; color: #9ca3af; font-size: 12px;">
                © ${new Date().getFullYear()} FxTrusts Ltd. All rights reserved.<br>
                This email was sent from the contact form on fxtrusts.com
            </p>
        </div>
    </div>
</body>
</html>
            `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: 'Email sent successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        );
    }
}
