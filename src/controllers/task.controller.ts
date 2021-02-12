import { RequestHandler, Response } from 'express';

export const testTask: RequestHandler = async (req, res): Promise<Response> => {
    try {
        return res.status(200).json({ message: 'Test task route!' });
    } catch (error) {
        console.log(error);
        return res.status(400).json(error);
    }
};
