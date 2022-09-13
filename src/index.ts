import express from 'express';
import { Router, Response, Request } from 'express';
import cors from 'cors';
import multer from 'multer';

const app = express();
const route  = Router();
const upload = multer({ dest: 'uploads' });
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

route.get('/', (req: Request, res: Response) => res.json({ message: 'Welcome to PDF Uploader'}));

app.post('/upload', upload.single('file'), (req: Request ,res: Response) => {
    console.log(req.body);
    res.json({ message: 'PDF uploaded'});
});

app.post('/test', (req: Request, res: Response) => {
    const { username } = req.body;

    res.json({name: username});
});

app.use(route);
const port = 3000;

app.listen(port, () => console.log(`Server is running on port ${port}`));