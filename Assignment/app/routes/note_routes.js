module.exports = function (app, db){
    app.get('/TimesStories/', (req, res) => {
        db.collection('TimesStories').find({}).toArray((err, result) =>{
            if (err) res.send(err);
            else res.send(result);
        }) 
     
    });
};