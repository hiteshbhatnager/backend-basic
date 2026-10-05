import mongoose, { model, models, Schema } from "mongoose";

const medicalRecordSchema = new Schema({}, { timestamps: true });

export const medicalRecord = model("medicalRecord", medicalRecordSchema)