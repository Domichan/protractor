/**
 * Created by Dominika on 2015-11-01.
 */
var mysql = require('mysql');

var support = (function(){

    return {
        getAuthorId: function (authName, authSurname){
            var connection = mysql.createConnection({
                    host     : 'localhost',
                    user     : 'root',
                    password : 'PrMgr2014!',
                    database : 'protr_train'
                }),
                sqlStatement;
            connection.connect();
            sqlStatement ="select a.authorId as id" +
                " from protr_train.authors a" +
                " where a.authorName = '"+authName+"'" +
                " and a.authorSurname = '"+authSurname+"';";
            return connection.query(sqlStatement, function(err, rows, fields) {
                connection.end();
                if (err) {
                    return -1;
                } else {
                    console.log(rows[0].id);
                    return rows[0].id;
                }
            });
        }
    };
}());

module.exports = support;