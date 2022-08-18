import { Request, Response } from "express";

import { Vaccine, VaccineType } from "../../../models/vaccine.entity";

class VaccineController {
    public async getAllVaccineTrackers(req: Request, res: Response) {
        // const insert: any = new Vaccine({
        //     YearWeekISO: "2020-W53",
        //     FirstDose: 0,
        //     FirstDoseRefused: "",
        //     SecondDose: 0,
        //     DoseAdditional1: 0,
        //     DoseAdditional2: 0,
        //     UnknownDose: 8,
        //     NumberDosesReceived: 0,
        //     NumberDosesExported: 0,
        //     Region: "AT",
        //     Population: "8901064",
        //     ReportingCountry: "AT",
        //     TargetGroup: "ALL",
        //     Vaccine: "UNK",
        //     Denominator: 7388778,
        // });
        // await insert.save();
        const vaccines: VaccineType[] = await Vaccine.find();

        res.status(200).json({
            status: "SUCCESS",
            data: {
                vaccines,
            },
        });
    }
}

export default VaccineController;
