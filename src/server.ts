import express, { response } from 'express';

const app = express();

app.listen(3000, () => console.log('Server is running!!'));

app.get('/inicio', (request, response) => {
  return response.json('Hollo Word!');
});
