'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

var passwordSchema = Schema( {
    name: String,
    username: String,
    password: String,
    description: String,
    url: String,
    creationTime: Date,
    ownerID: String
    // sharedWith: [User],
    // timesCopied: Integer,
    // copiedTimestamps: [Integer],
} );

module.exports = mongoose.model( 'Password', passwordSchema );
