import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
    try {
        const { name, email, subject, message } = await request.json();

        // Validate inputs
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: "All fields are required" },
                { status: 400 }
            );
        }

        // Create transporter with ZeptoMail SMTP settings
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT || "465"),
            secure: true, // use SSL
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Send email
        await transporter.sendMail({
            from: process.env.SMTP_FROM,
            to: process.env.SMTP_FROM, // send to yourself
            replyTo: email, // visitor's email for easy reply
            subject: `Portfolio Contact: ${subject}`,
            text: `From: ${name} (${email})\n\n${message}`,
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="UTF-8">
                </head>
                <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
                    
                    <div style="background-color: #f8f9fa; border-left: 4px solid #3b82f6; padding: 20px; margin-bottom: 20px;">
                        <h2 style="margin: 0 0 10px 0; color: #1f2937;">New Portfolio Contact Form Submission</h2>
                        <p style="margin: 0; color: #6b7280; font-size: 14px;">Received: ${new Date().toLocaleString()}</p>
                    </div>

                    <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
                        
                        <div style="margin-bottom: 20px;">
                            <h3 style="margin: 0 0 8px 0; color: #374151; font-size: 14px; text-transform: uppercase;">From</h3>
                            <p style="margin: 0; font-size: 16px; color: #111827;">${name}</p>
                            <p style="margin: 5px 0 0 0; color: #3b82f6;">
                                <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a>
                            </p>
                        </div>

                        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">

                        <div style="margin-bottom: 20px;">
                            <h3 style="margin: 0 0 8px 0; color: #374151; font-size: 14px; text-transform: uppercase;">Subject</h3>
                            <p style="margin: 0; font-size: 16px; color: #111827;">${subject}</p>
                        </div>

                        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">

                        <div>
                            <h3 style="margin: 0 0 12px 0; color: #374151; font-size: 14px; text-transform: uppercase;">Message</h3>
                            <div style="background-color: #f9fafb; padding: 15px; border-radius: 6px; white-space: pre-wrap; color: #1f2937;">${message}</div>
                        </div>

                    </div>

                    <div style="margin-top: 20px; padding: 15px; background-color: #eff6ff; border-radius: 8px; text-align: center;">
                        <p style="margin: 0; color: #1e40af; font-size: 14px;">
                            💡 <strong>Quick Reply:</strong> Click the email address above to respond directly to ${name}
                        </p>
                    </div>

                </body>
                </html>
            `,
        });

        return NextResponse.json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json(
            { error: "Failed to send message. Please try again." },
            { status: 500 }
        );
    }
}