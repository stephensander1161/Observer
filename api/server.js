import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import sendGrid from '@sendGrid/mail';

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
	next();
});

app.get('/api', (req, res, next) => {
	res.send('API: running');
});

app.listen(3030, '0.0.0.0');
