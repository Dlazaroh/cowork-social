const cors = require("cors");

// Middleware para permitir CORS
const allowDomains = ['http://localhost:5000','https://redes-sociales-8eql.onrender.com'];
const corOptions = {
    origin: function(origin,callback){
        if(allowDomains.indexOf(origin) !== -1 || !origin){
            callback(null,true);
        }else{
            callback(new Error('No permitido por CORS'));
            }
    },
        optionsSuccessStatus: 200
};

module.exports = cors(corOptions);