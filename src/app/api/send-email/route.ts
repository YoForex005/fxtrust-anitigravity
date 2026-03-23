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

        // Email to the business team
        const mailOptions = {
            from: `"FxTrusts Contact" <${process.env.SMTP_USER}>`,
            to: 'business@fxtrusts.com, financewithyoforex@gmail.com',
            replyTo: email,
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
                <a href="mailto:${email}?subject=Re: Your inquiry to FxTrusts" style="display: inline-block; background-color: #2563eb; color: #ffffff; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 16px;">Reply to ${name.split(' ')[0]}</a>
            </div>
        </div>

        <!-- Footer -->
        <div style="background-color: #f9fafb; padding: 24px; text-align: center; border-top: 1px solid #e5e7eb;">
            <p style="margin: 0; color: #9ca3af; font-size: 12px;">
                &copy; ${new Date().getFullYear()} FxTrusts Ltd. All rights reserved.<br>
                This email was sent from the contact form on fxtrusts.com
            </p>
        </div>
    </div>
</body>
</html>
            `,
        };

        // Auto-reply email to the user
        const autoReplyOptions = {
            from: `"FxTrusts" <${process.env.SMTP_USER}>`,
            to: email,
            replyTo: 'business@fxtrusts.com',
            subject: `Thanks for reaching out, ${name.split(' ')[0]}! — FxTrusts`,
            text: `
Hi ${name.split(' ')[0]},

Thank you for reaching out to FxTrusts! We've received your message and our team will get back to you within 24 hours.

Here's a copy of what you sent us:

---
${message}
---

In the meantime, feel free to explore our solutions at https://fxtrusts.com or reach us directly:

Email: business@fxtrusts.com
Telegram: @FxTrustsSupport
WhatsApp: +44 7897 015780

Best regards,
The FxTrusts Team

----------------------------------------------------
© ${new Date().getFullYear()} FxTrusts Ltd. All rights reserved.
            `,
            html: `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You — FxTrusts</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f3f4f6; color: #111827;">
    <div style="max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);">

        <!-- Header -->
        <div style="background-color: #0f172a; padding: 32px 40px; text-align: center;">
            <img src="https://fxtrusts.com/logo.png" alt="FxTrusts" style="height: 40px; object-fit: contain;">
        </div>

        <!-- Body -->
        <div style="padding: 40px;">
            <!-- Success Icon -->
            <div style="text-align: center; margin-bottom: 24px;">
                <div style="display: inline-flex; align-items: center; justify-content: center; width: 64px; height: 64px; background-color: #ecfdf5; border-radius: 50%;">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                </div>
            </div>

            <h2 style="margin-top: 0; color: #111827; font-size: 24px; font-weight: 700; text-align: center;">Thanks for Reaching Out!</h2>

            <p style="color: #4b5563; font-size: 16px; line-height: 1.6; text-align: center; margin-bottom: 32px;">
                Hi <strong>${name.split(' ')[0]}</strong>, we've received your message and our team will get back to you within <strong>24 hours</strong>.
            </p>

            <!-- Copy of their message -->
            <div style="margin-bottom: 32px;">
                <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600;">Your Message</p>
                <div style="background-color: #f9fafb; border-left: 4px solid #2563eb; padding: 16px 20px; border-radius: 4px; color: #374151; line-height: 1.6; font-size: 15px;">
                    ${message.replace(/\n/g, '<br>')}
                </div>
            </div>

            <!-- Divider -->
            <div style="border-top: 1px solid #e5e7eb; margin: 32px 0;"></div>

            <!-- Contact Options -->
            <p style="color: #6b7280; font-size: 14px; text-align: center; margin-bottom: 20px;">In the meantime, you can also reach us through:</p>

            <div style="text-align: center;">
                <table role="presentation" style="margin: 0 auto; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 8px 16px;">
                            <a href="mailto:business@fxtrusts.com" style="color: #2563eb; text-decoration: none; font-size: 14px; font-weight: 500;">business@fxtrusts.com</a>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 16px;">
                            <a href="https://t.me/FxTrustsSupport" style="color: #2563eb; text-decoration: none; font-size: 14px; font-weight: 500;">Telegram: @FxTrustsSupport</a>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 16px;">
                            <a href="https://wa.me/447897015780" style="color: #2563eb; text-decoration: none; font-size: 14px; font-weight: 500;">WhatsApp: +44 7897 015780</a>
                        </td>
                    </tr>
                </table>
            </div>

            <!-- CTA Button -->
            <div style="margin-top: 32px; text-align: center;">
                <a href="https://fxtrusts.com/solutions" style="display: inline-block; background-color: #2563eb; color: #ffffff; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 16px;">Explore Our Solutions</a>
            </div>
        </div>

        <!-- Footer -->
        <div style="background-color: #f9fafb; padding: 24px; text-align: center; border-top: 1px solid #e5e7eb;">
            <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 13px; font-weight: 600;">FxTrusts Ltd.</p>
            <p style="margin: 0; color: #9ca3af; font-size: 12px; line-height: 1.5;">
                1 Canada Square, Canary Wharf, London E14 5AB<br>
                <a href="https://fxtrusts.com" style="color: #9ca3af; text-decoration: none;">fxtrusts.com</a>
            </p>
            <p style="margin: 16px 0 0 0; color: #9ca3af; font-size: 11px;">
                &copy; ${new Date().getFullYear()} FxTrusts Ltd. All rights reserved.
            </p>
        </div>
    </div>
</body>
</html>
            `,
        };

        // Send both emails concurrently
        await Promise.all([
            transporter.sendMail(mailOptions),
            transporter.sendMail(autoReplyOptions),
        ]);

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
