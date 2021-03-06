import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
});

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}
