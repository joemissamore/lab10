/**
 * Created by Joe on 11/21/16.
 */

// Dal files are used as an abstraction layer for the Database

var mysql = require('mysql');
var db = require ('./db_connection.js');

/* Database configuration */
var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'SELECT * FROM address';
    
    connection.query(query, function(err, result) {
        callback(err, result);
    });
};

exports.getById = function (address_id, callback) {
    var query = 'SELECT * FROM address WHERE address_id = ?';

    var queryData = [address_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
    
};