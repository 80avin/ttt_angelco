const express = require('express');
const path = require('path');

const api = require('./api');
const app = express();

app.use(express.static(path.join(__dirname, 'build'), {
    'index': ['index.html', 'index.htm']
}));

app.use('/api', api);

app.use(function(req, res){
    res.status(404).json({
        error: true
    });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=>console.log(`Express server currently running on port ${PORT}`))