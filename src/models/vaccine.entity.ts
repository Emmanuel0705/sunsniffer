import { Schema, model } from 'mongoose';

export interface VaccineType {
    YearWeekISO: string;
    FirstDose: number;
    FirstDoseRefused: string;
    SecondDose: number;
    DoseAdditional1: number;
    DoseAdditional2: number;
    UnknownDose: number;
    NumberDosesReceived: number;
    NumberDosesExported: number;
    Region: string;
    Population: string;
    ReportingCountry: string;
    TargetGroup: string;
    Vaccine: string;
    Denominator: number;
}

const vaccineSchema = new Schema<VaccineType>({
    YearWeekISO: String,
    FirstDose: Number,
    FirstDoseRefused: String,
    SecondDose: Number,
    DoseAdditional1: Number,
    DoseAdditional2: Number,
    UnknownDose: Number,
    NumberDosesReceived: Number,
    NumberDosesExported: Number,
    Region: String,
    Population: String,
    ReportingCountry: String,
    TargetGroup: String,
    Vaccine: String,
    Denominator: Number,
});

export const Vaccine = model<VaccineType>('Vaccine', vaccineSchema);