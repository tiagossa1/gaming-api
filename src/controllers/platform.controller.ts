import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Platform } from "../entity/Platform";

export const getAll = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const platforms = await getRepository(Platform).find();
  return res.json(platforms);
};

export const get = async (req: Request, res: Response): Promise<Response> => {
  const results = await getRepository(Platform).findOne(req.params.id);
  return res.json(results);
};

export const create = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newPlatform = await getRepository(Platform).create(req.body);
  const results = await getRepository(Platform).save(newPlatform);
  return res.json(results);
};

export const update = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const platform = await getRepository(Platform).findOne(req.params.id);

  if (platform) {
    getRepository(Platform).merge(platform, req.body);
    const results = await getRepository(Platform).save(platform);
    return res.json(results);
  }

  return res.json({ msg: "Genre not found." });
};

export const remove = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(Platform).delete(req.params.id);
  return res.json(results);
};
