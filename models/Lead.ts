import mongoose, { Schema, Document } from 'mongoose';

export interface ILead extends Document {
  name: string;
  mobile?: string;
  phone?: string;
  email?: string;
  motive?: string;
  message?: string;
  company?: string;
  projectType?: string;
  budget?: string;
  timeline?: string;
  description?: string;
  features?: string;
  formType: string;
  createdAt: Date;
}

const LeadSchema: Schema = new Schema({
  name: { type: String, required: true },
  mobile: { type: String },
  phone: { type: String },
  email: { type: String },
  motive: { type: String },
  message: { type: String },
  company: { type: String },
  projectType: { type: String },
  budget: { type: String },
  timeline: { type: String },
  description: { type: String },
  features: { type: String },
  formType: { type: String, default: 'bunny' },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Lead || mongoose.model<ILead>('Lead', LeadSchema);
