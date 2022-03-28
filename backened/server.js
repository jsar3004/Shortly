const express =require('express');
const mongoose=require('mongoose');
var cors = require('cors');
const ShortUrl = require('./model/userschema')
const app=express();
const port =process.env.PORT || 8000;
app.use(express.json());
mongoose.connect('mongodb+srv://jsar3004:JAZZroxx%402000@cluster0.sdwbf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true, useUnifiedTopology: true
})
.then(()=>{
  console.log('Connection is succesful database');
}).catch((err)=>{
  console.log(err);
})
app.get('/', async (req, res) => {
  const shortUrls = await ShortUrl.find()
  res.send(shortUrls);
})

app.post('/shortUrls', async (req, res) => {
  console.log(req);
  await ShortUrl.create({ full: req.body.url })
  res.redirect('/')
})
app.get('/:shortUrl', async (req, res) => {
  const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl })
  if (shortUrl == null) return res.sendStatus(404)
  shortUrl.clicks++
  shortUrl.save()
  res.redirect(shortUrl.full)
})
app.listen(port,()=>{
    console.log(`Connection is succesful at ${port}`);
})