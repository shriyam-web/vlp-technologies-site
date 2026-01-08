import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Lead from '@/models/Lead';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name } = body;

    if (!name) {
      return NextResponse.json(
        { error: 'Name is required' },
        { status: 400 }
      );
    }

    // Connect to database
    await connectDB();

    // Save to database
    const newLead = await Lead.create(body);

    // Send email notification
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Format details for email
    const details = Object.entries(body)
      .filter(([key]) => key !== 'name' && key !== 'formType')
      .map(([key, value]) => `<p><strong>${key.charAt(0).toUpperCase() + key.slice(1)}:</strong> ${value}</p>`)
      .join('');

    const textDetails = Object.entries(body)
      .filter(([key]) => key !== 'name' && key !== 'formType')
      .map(([key, value]) => `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`)
      .join('\n');

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.NOTIFY_RECEIVER,
      subject: `New ${body.formType || 'Lead'} Captured: ${name}`,
      text: `
        New Lead Details (${body.formType || 'General'}):
        Name: ${name}
        ${textDetails}
        Date: ${new Date().toLocaleString()}
      `,
      html: `
        <h3>New Lead Details (${body.formType || 'General'})</h3>
        <p><strong>Name:</strong> ${name}</p>
        ${details}
        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log('Email notification sent successfully to:', process.env.NOTIFY_RECEIVER);
    } catch (emailError) {
      console.error('Error sending email:', emailError);
    }

    return NextResponse.json(
      { success: true, message: 'Lead captured successfully', data: newLead },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error capturing lead:', error);
    return NextResponse.json(
      { error: 'Failed to capture lead' },
      { status: 500 }
    );
  }
}
