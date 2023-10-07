import { Request, Response } from "express";

export const index = (req: Request, res: Response)=>{
    res.send('ola o controller esta funcionando')
}

export const dogs = (req: Request, res: Response)=>{
    res.send('ola o controller esta funcionando')
}

export const cats = (req: Request, res: Response)=>{
    res.send('ola o controller esta funcionando')
}

export const fishs = (req: Request, res: Response)=>{
    res.send('ola o controller esta funcionando')
}