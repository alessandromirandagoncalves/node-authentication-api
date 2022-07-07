import { NextFunction, Request, Response, Router } from 'express';


//get /users
//get /users/:uuid
//post /users
//put /users/:uuid
//delete /user/:uuid

const usersRoute = Router();

usersRoute.get('/users',(req; Request, res: Response, next:NextFunction) => {
    const users = [{userName: 'Admin'}];
    res.status(200).send(users);
});

export default usersRoute;