let mongoose = require('./config');

const schema = require('./schema');

let post = (collection)=>{
    "use strict";
    if(typeof(mongoose.collectionList) === 'undefined'){
        return Promise.reject({err:"cannot fetch collection list", reason:"mongoose.collection not exist"});
    }

    if ( mongoose.collectionList.includes(collection) ) {
        return Promise.resolve(mongoose.model(collection, schema, collection));
    }else{
        return Promise.reject({err:"error", reason:"collection not exist"});
    }

} ;

function t() {
    console.log(mongoose.collectionList);
}

//setTimeout(t, 100);

module.exports = post;