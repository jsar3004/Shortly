const express =require('express');
const mongoose=require('mongoose');
var cors = require('cors');
const ShortUrl = require('./model/userschema')
const app=express();
var validUrl = require('valid-url');
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
app.get('/find', async (req, res) => {
  const shortUrls = await ShortUrl.find({full:req.body.url})
  res.status(200).send(shortUrls);
})

app.post('/createurl', async (req, res) => {
  //console.log(req);
  let val=req.body.url;
  if (validUrl.isUri(val)){ 
    const user = await ShortUrl.find({full:req.body.url});
   // console.log(user);
    if(user.length)
    {
    res.status(201).send(user);
    }
    else
    {
    await ShortUrl.create({ full: req.body.url });
    const user2 = await ShortUrl.find({full:req.body.url});
   // console.log(user2);
    res.status(200).send(user2);
    }
} else {
    console.log('Not a URI');
    res.status(204).send();
}
 
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