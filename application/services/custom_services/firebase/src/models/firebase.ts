
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const firebaseSchema = new Schema({
   firebase_url: String,
   firebase_name: String,
   enter_name: String,
   test: String,
   rock: String
})

const firebaseModel = mongoose.model('firebase', firebaseSchema, 'firebase');
export default firebaseModel;
