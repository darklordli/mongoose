/**
 * [mongoose]
 * @author coolli2@163.com
 * @date 2017.6.12
 **/

let mongoose = require('mongoose');
let db = mongoose.connect('mongodb://localhost:27017/darklord');
let Schema = mongoose.Schema;
let myuser = new Schema({
	name: String,
	password: String
});
