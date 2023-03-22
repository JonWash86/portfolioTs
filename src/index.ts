import * as express from 'express'
const app: express.Application = express()
app.listen(3000, ()=> console.log("listening..."))

app.use(express.static('./src'));

app.get('/', function(request, response){
  response.sendFile('index.html', {root: './src'});
});


console.log("I live!")