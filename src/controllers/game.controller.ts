import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Game } from "../entity/Game";

export const getAll = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const games = await getRepository(Game).find();
  return res.json(games);
};

export const get = async (req: Request, res: Response): Promise<Response> => {
  const results = await getRepository(Game).findOne(req.params.id);
  return res.json(results);
};

export const create = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newGame = await getRepository(Game).create(req.body);
  const results = await getRepository(Game).save(newGame);
  return res.json(results);
};

export const update = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const game = await getRepository(Game).findOne(req.params.id);

  if (game) {
    getRepository(Game).merge(game, req.body);
    const results = await getRepository(Game).save(game);
    return res.json(results);
  }

  return res.json({ msg: "Game not found." });
};

export const remove = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(Game).delete(req.params.id);
  return res.json(results);
};
