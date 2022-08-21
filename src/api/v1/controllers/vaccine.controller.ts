import { Request, Response } from "express";

import { Vaccine, VaccineType } from "../../../models/vaccine.entity";

class VaccineController {
    public async getAllVaccineTrackers(req: Request, res: Response) {
        const { c, dateFrom, dateTo } = req.query;
        const boundaries: [] = req.query.boundaries as [];

        const vaccines: VaccineType[] = await Vaccine.aggregate([
            {
                $match: {
                    ReportingCountry: c,
                    YearWeekISO: {
                        $gte: dateFrom,
                        $lt: dateTo,
                    },
                },
            },
            {
                $project: {
                    YearWeekInt: {
                        $toInt: {
                            $replaceAll: {
                                input: "$YearWeekISO",
                                find: "-W",
                                replacement: "",
                            },
                        },
                    },
                    dosesCount: {
                        $cond: {
                            if: {
                                $eq: ["", "$NumberDosesReceived"],
                            },
                            then: 0,
                            else: "$NumberDosesReceived",
                        },
                    },
                    YearWeek: "$YearWeekISO",
                },
            },
            {
                $bucket: {
                    groupBy: "$YearWeekInt",
                    boundaries,
                    default: "Other",
                    output: {
                        count: {
                            $sum: {
                                $toInt: "$dosesCount",
                            },
                        },
                        weeks: {
                            $push: "$YearWeek",
                        },
                    },
                },
            },
            {
                $project: {
                    _id: 0,
                    weekStart: {
                        $first: "$weeks",
                    },
                    weekEnd: {
                        $last: "$weeks",
                    },
                    NumberDosesReceived: "$count",
                },
            },
        ]);

        res.status(200).json({
            status: "SUCCESS",
            data: {
                vaccines,
            },
        });
    }
}

export default VaccineController;
