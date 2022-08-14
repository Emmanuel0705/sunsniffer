import { Request, Response } from 'express';

import { Vaccine, VaccineType } from '../../../models/vaccine.entity';

class VaccineController {

  public async getAllVaccineTrackers(req: Request, res: Response) {
    const vaccines: VaccineType[] = await Vaccine.find();
    
    res.status(200).json({
      status: 'SUCCESS',
      data: {
        vaccines
      }
    })
  }
  
}

export default VaccineController;