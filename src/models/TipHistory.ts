import mongoose from 'mongoose';

export interface ITipHistory {
  _id?: string;
  customerName: string;
  mobileNumber: string;
  billAmount: number;
  tipAmount: number;
  totalAmount: number;
  date: string;
  tipPercentage: number;
}

const TipHistorySchema = new mongoose.Schema<ITipHistory>({
  customerName: { 
    type: String, 
    required: true 
  },
  mobileNumber: { 
    type: String, 
    required: true 
  },
  billAmount: { 
    type: Number, 
    required: true 
  },
  tipAmount: { 
    type: Number, 
    required: true 
  },
  totalAmount: { 
    type: Number, 
    required: true 
  },
  date: { 
    type: String, 
    default: () => new Date().toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    })
  },
  tipPercentage: { 
    type: Number, 
    required: true 
  }
}, { 
  timestamps: true 
});

export default mongoose.models.TipHistory || mongoose.model<ITipHistory>('TipHistory', TipHistorySchema); 