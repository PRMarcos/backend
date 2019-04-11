const mongoose = require('mongoose');

const File = new mongoose.Schema(
{
    title: {
        type: String,
        required : true,
    },
    path: {
        type: String,
        required : true,
    }       
    },
    {
        timestamps: true,
        toObject: {virtuals: true},
        toJSON: { virtuals: true}
    }

);

const  URL = process.env.UTL || 'http://localhost:3333';

File.virtual('url').get(function(){
    return `${URL}/files/${encodeURIComponent(this.path)}`;
})
module.exports = mongoose.model("File",File);