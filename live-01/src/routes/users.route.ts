import { NextFunction, Request, Response, Router } from 'express';
import statusCodes from 'http-status-codes';

//get /users
//get /users/:uuid
//post /users
//put /users/:uuid
//delete /user/:uuid

const usersRoute = Router();

usersRoute.get('/users',(req: Request, res: Response, next:NextFunction) => {
    const users = [{userName: 'Admin'}];
    res.status(statusCodes.OK).send(users);
});

usersRoute.get('/users/:uuid',(req: Request, res: Response, next:NextFunction) => {
    let uuid = req.params.uuid;
    res.sendStatus(statusCodes.OK).send({uuid});
});

export default usersRoute;