const express = require('express');
let request = require('request');

// FIXME uncomment next line - internet in my college(NITH) is served via a proxy server
// request = request.defaults({'proxy': 'http://172.16.24.3:3128'});

const router = express.Router();

function getWords(text){
    // remove multiple spaces and non-word characters at boundaries of space/word.
    return text.replace(/\W*\s+\W*/g," ")
    // split the stripped string on characters which are not words or ’ or ' (apostrophe)
                .split(/[^\w\u2019']+/);
}

router.get('/topn', function(req, res){
    request.get('https://terriblytinytales.com/test.txt', function(err, response, body){
        if(!err && response.statusCode==200){

            let freq = {};
            const n = parseInt(req.query.n || 5);
            getWords(body).forEach(w => {
                if(freq.hasOwnProperty(w)) freq[w]++;
                else freq[w]=1;
            });
            let uniqueWords = Object.keys(freq).map( k => ({
                name: k,
                count: freq[k],
            }));
            uniqueWords.sort((a,b)=> b.count-a.count );
            
            res.json({
                words: uniqueWords.slice(0,n),
            });
        }
    })
});


module.exports = router;