const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');
var slug = require('mongoose-slug-updater');

const Schema = mongoose.Schema;

const Course = new Schema(
    {
        name: { type: String, default: '' },
        description: { type: String, default: '', maxLength: 600 },
        image: { type: String, default: '' },
        video: { type: String, maxLength: 255, default: '' },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        timestamps: true,
    },
);

//Add plugin
mongoose.plugin(slug);

//Soft delete
Course.plugin(mongooseDelete, { overrideMethods: 'all', deletedAt: true });

module.exports = mongoose.model('Course', Course);
