import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';

interface Article {
    crapeDate: Number;
    articleName: String;
    introduction: String;
}

const getPong = async (req: Request, res: Response, next: NextFunction) => {
    let message = "Pong";
    return res.status(200).json({
        message: message
    });
};

const URL = 'https://en.wikipedia.org/w/api.php?action=query&prop=revisions&titles=';
// const URL = 'https://en.wikipedia.org/w/api.php?action=query&prop=revisions&titles='Pet_door&rvslots=*&rvprop=content&formatversion=2

// getting a single Article
const getArticle = async (req: Request, res: Response, next: NextFunction) => {
    // get the article name from the req
    let articleName: string = req.params.articleName;

    // get the article
    let result: AxiosResponse = await axios.get(URL + articleName);

    console.log(result);
    // let article: Article = result.data;
    let crapeDate: number = new Date().getTime() / 1000
    let article: Article = {
        crapeDate,
        articleName,
        introduction: 'test'
    };
    return res.status(200).json(
        article
    );
};


export default { getArticle, getPong };