import { Request, Response, NextFunction } from "express";
import axios, { AxiosResponse } from "axios";

import { User } from "../models/user.interface";

// TODO
const getUser = async (req: Request, res: Response, next: NextFunction) => {
    let message = "Ok";
    return res.status(200).json({
      message: message,
    });
  };
  

  const getToken = async (req: Request, res: Response, next: NextFunction) => {
    let token = 'abcd-1234-defa-5678';
    // TODO write into storage userName, languages, token
    return res.status(200).json({
        token
    });
  };

  export default { getUser, getToken }