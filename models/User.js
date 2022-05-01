'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

var userSchema = Schema( {
    firstName: String,
    lastName: String,
    username: String,
    email: String,
    passphrase: String,
    updates: Boolean,
} );

module.exports = mongoose.model( 'User', userSchema );
