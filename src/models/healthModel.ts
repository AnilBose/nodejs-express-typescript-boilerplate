import mongoose, { Document, Schema } from "mongoose";

export interface IHealth extends Document {
    status: string;
}

const HealthSchema: Schema = new Schema({
    status: {
        type: String,
        required: true,
    },
});

export const HealthModel = mongoose.model<IHealth>("Health", HealthSchema);
