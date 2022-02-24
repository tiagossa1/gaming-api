import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Genre } from "../entity/Genre";

export const getAll = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const genres = await getRepository(Genre).find();
  return res.json(genres);
};

export const get = async (req: Request, res: Response): Promise<Response> => {
  const results = await getRepository(Genre).findOne(req.params.id);
  return res.json(results);
};

export const create = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newGenre = await getRepository(Genre).create(req.body);
  const results = await getRepository(Genre).save(newGenre);
  return res.json(results);
};

export const update = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const genre = await getRepository(Genre).findOne(req.params.id);

  if (genre) {
    getRepository(Genre).merge(genre, req.body);
    const results = await getRepository(Genre).save(genre);
    return res.json(results);
  }

  return res.json({ msg: "Genre not found." });
};

export const remove = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(Genre).delete(req.params.id);
  return res.json(results);
};
