const Box = require('../models/box');

class BoxController{
    async store(req, res ) {

        req.body.title

        const box = await Box.create(req.body)
        
        return res.json(box)
    }  
    async list(req, res) {
        
        const boxess =  await Box.find();
        return res.json(boxess)
    }  

    async show(req, res) {
        const box =  await Box.findById(req.params.id).populate({
            path: 'files',
            options: { sort: {createdAt: -1}}
        });

 
        return res.json(box);
    };
}

module. exports = new BoxController();