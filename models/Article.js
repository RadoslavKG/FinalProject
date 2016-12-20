/**
 * Created by 1 on 19.12.2016 г..
 */
const mongoose = require('mongoose');

let articleSchema = mongoose.Schema({
    /*title: {type:String, required: true},*/ /*Comments do not need a title!*/
    content: {type: String, required: true},
    author: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'},
    date: {type: Date, default: Date.now()}
});
const Article = mongoose.model('Article', articleSchema);

module.exports = Article;

