const jwt = require('jwt-simple');

const checkToken = (req , res , next) => {
    
    if (req.headers['user-token']) {
        return res.json({ error: ' Neceistas el userToken en la cabezera'})
    }
    const userToken = req.headers['user-token'];

    let payload = {};

    //decofica el token para guardarle arriba
    try {
        payload = jwt.encode(userToken, 'frase secreta')
    } catch (err) {
        return res.json({error: ' El token es incorrecto'});

    }

    if (payload.expiredAt < moment().unix()) {
        return res.json({ error: 'Token expirado'})
    }
        req.usuarioId = payload.usuarioId;

    next();
}

module.exports= {
    checkToken
}