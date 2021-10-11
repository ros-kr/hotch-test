import { Request, Response, NextFunction } from "express";
import axios, { AxiosResponse } from "axios";

import { Article } from "./../models/article.interface";
import { Config } from "./../config";

const getPong = async (req: Request, res: Response, next: NextFunction) => {
  let message = "Pong";
  return res.status(200).json({
    message: message,
  });
};

// getting a single Article
const getArticle = async (req: Request, res: Response, next: NextFunction) => {
  // get the article name from the req
  let articleName: string = req.params.articleName;
  let lang: any = req.header("Accept-language");
  console.log(lang);
  try {
    // get the article
    let url = Config.URL;
    // TODO: need refactoting
    if (lang.length === 2) {
      url = url.slice(0, 8) + lang + "." + url.slice(8);
    }

    let result: AxiosResponse = await axios.get(url + articleName);
    //TODO: need parse content

    let crapeDate: number = new Date().getTime() / 1000;
    let article: Article = {
      crapeDate,
      articleName,
      introduction: result.data["query"]["pages"],
    };
    return res.status(200).json(article);
  } catch (err) {
    console.log(err);
  }
};

export default { getArticle, getPong };
