import { NextRequest, NextResponse } from 'next/server';
import connectMongoDB from '@/lib/mongodb';
import TipHistoryModel from '@/models/TipHistory';

export async function GET() {
  try {
    await connectMongoDB();
    
    // Fetch the most recent 10 tip history entries
    const history = await TipHistoryModel.find()
      .sort({ createdAt: -1 })
      .limit(10);
    
    return NextResponse.json(history);
  } catch (error) {
    console.error('Error fetching tip history:', error);
    return NextResponse.json(
      { message: 'Failed to fetch tip history' }, 
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectMongoDB();
    
    // Parse the request body
    const body = await request.json();
    
    // Create a new tip history entry
    const newTipHistory = await TipHistoryModel.create({
      customerName: body.customerName,
      mobileNumber: body.mobileNumber,
      billAmount: body.billAmount,
      tipAmount: body.tipAmount,
      totalAmount: body.totalAmount,
      tipPercentage: body.tipPercentage
    });
    
    return NextResponse.json(newTipHistory, { status: 201 });
  } catch (error) {
    console.error('Error creating tip history:', error);
    return NextResponse.json(
      { message: 'Failed to create tip history' }, 
      { status: 500 }
    );
  }
} 