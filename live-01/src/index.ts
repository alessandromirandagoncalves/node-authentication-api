import express, {Request, Response, NextFunction} from 'express';
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.route';

const app = express();

app.use(usersRoute);

//Configurações da aplicação
app.use(express.json);
app.use(express.urlencoded({extended: true}));

//Configrações de rotas
app.use(statusRoute);
app.use(usersRoute);

app.listen(3000,()=>{
    console.log('Aplicação executando na ports 3000')
})