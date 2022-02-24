import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Developer } from "../entity/Developer";

export const getAll = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const developers = await getRepository(Developer).find();
  return res.json(developers);
};

export const get = async (req: Request, res: Response): Promise<Response> => {
  const results = await getRepository(Developer).findOne(req.params.id);
  return res.json(results);
};

export const create = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newDeveloper = await getRepository(Developer).create(req.body);
  const results = await getRepository(Developer).save(newDeveloper);
  return res.json(results);
};

export const update = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const developer = await getRepository(Developer).findOne(req.params.id);

  if (developer) {
    getRepository(Developer).merge(developer, req.body);
    const results = await getRepository(Developer).save(developer);
    return res.json(results);
  }

  return res.json({ msg: "Developer not found." });
};

export const remove = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(Developer).delete(req.params.id);
  return res.json(results);
};
