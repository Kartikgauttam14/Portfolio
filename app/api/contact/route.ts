import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const formData = await req.json();
  const { firstName, lastName, email, subject, message } = formData;

  // Validate required fields
  if (!firstName || !lastName || !email || !subject || !message) {
    return NextResponse.json({
      success: false,
      message: 'Please fill in all required fields.',
    }, { status: 400 });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({
      success: false,
      message: 'Please enter a valid email address.',
    }, { status: 400 });
  }

  try {
    // Simulate sending email (replace with real email service integration)
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Email would be sent to Kartikgauttam6@gmail.com with:', {
      from: `${firstName} ${lastName} <${email}>`,
      subject: `Portfolio Contact: ${subject}`,
      message,
    });
    return NextResponse.json({
      success: true,
      message: "Thank you for your message! I'll get back to you soon.",
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({
      success: false,
      message: 'Sorry, there was an error sending your message. Please try again or contact me directly.',
    }, { status: 500 });
  }
}
