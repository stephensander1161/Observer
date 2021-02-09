import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import sendGrid from '@sendGrid/mail';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3030;

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

app.post('/api/email', (req, res, next) => {
	console.log(req.body);

	sendGrid.setApiKey(process.env.REACT_APP_SENDGRID_API_KEY);
	const msg = {
		to: 'stephen.sander1@gmail.com',
		from: req.body.email,
		subject: 'Website Contact',
		text: req.body.message
	};

	sendGrid
		.send(msg)
		.then((result) => {
			res.status(200).json({
				success: true
			});
		})
		.catch((err) => {
			console.log('error: ', err);
			res.status(401).json({
				success: false
			});
		});
});

app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`));
