'use strict';
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mysql = require('mysql');

app.use(bodyParser.json({}));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(function (err, req, res, next) {
    if (err.status !== 404) {
        return next();
    }

    res.status(404);
    res.send(err.message);
});

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'dan41DBH!',
    database: 'protr_train'
});

connection.connect(function (err) {
    if (!err) {
        console.log("Database is connected ... \n\n");
    } else {
        console.log("Error connecting database ... \n\n" + error);
    }
});

app.get('/books', function (req, res, next) {

    var sqlStatement = 'select b.bookId, b.authName, b.authSurname, b.bookTitle,' +
        ' bt.bookTypeName, b.bookIsbn' +
        ' from protr_train.books b' +
        ' join protr_train.booktypes bt on bt.bookTypeId = b.bookTypeId;';
    connection.query(sqlStatement, function (err, rows, fields) {
        if (err) {
            err.status = 404;
            next(err);
        } else {
            res.json(rows);
        }
    });
});

app.get('/types', function (req, res, next) {
    var sqlStatement = 'select bt.bookTypeName' +
        ' from protr_train.booktypes bt;';
    connection.query(sqlStatement, function (err, rows, fields) {
        if (err) {
            err.status = 404;
            next(err);
        } else {
            if (!rows[0]) {
                var err = new Error();
                err.status = 404;
                next(err);
            } else {
                res.json(rows);
            }
        }
    });
});

function checkIfIsbnUnique(isbn, callback) {
    if (!isbn) return callback(new Error('Nie podano isbn'));
    return connection.query(`select 1 from protr_train.books where bookIsbn = '${isbn}';`, (err, rows) => {
        if (err) return callback(err);
        if (rows.length > 0) return callback(null, false);
        return callback(null, true);
    });
}

app.post('/books', function (req, res, next) {
    var authName = req.body.authName,
        authSurname = req.body.authSurname,
        typeName = req.body.typeName,
        bookIsbn = req.body.isbn,
        bookTitle = req.body.title,
        typeId = -1,
        sqlStatement = "select bt.bookTypeId as id" +
            " from protr_train.bookTypes bt" +
            " where bt.bookTypeName = '" + typeName + "';";

    checkIfIsbnUnique(bookIsbn, (err, isUnique) => {
        if (err) return next(err);
        if (isUnique === false) {
            res.status(412);
            return res.send(`A book with specified ISBN: ${bookIsbn} already exists`);
        }

        return connection.query(sqlStatement, function (err, rows, fields) {
            if (err) return next(err);
            if (!rows[0]) return res.sendStatus(404);

            typeId = rows[0].id;
            sqlStatement = "insert into protr_train.books" +
                "(bookTitle, bookTypeId, bookIsbn, authName, authSurname)" +
                " values ('" + bookTitle + "', " + typeId + ",'" + bookIsbn + "', '" + authName + "', '" + authSurname + "');";
            return connection.query(sqlStatement, function (err, rows, fields) {
                if (err) return next(err);
                return res.json(rows.insertId);
            });
        });
    });
});

app.get('/books/:id', function (req, res, next) {
    var bookId = req.params.id,
        sqlStatement = "select b.authName, b.authSurname, b.bookTitle," +
            " bt.bookTypeName, b.bookIsbn" +
            " from protr_train.books b" +
            " join protr_train.booktypes bt on bt.bookTypeId = b.bookTypeId" +
            " where b.bookId=" + bookId + ";";
    connection.query(sqlStatement, function (err, rows, fields) {
        if (err) {
            err.status = 404;
            next(err);
        } else {
            if (!rows[0]) {
                var err = new Error();
                err.status = 404;
                next(err);
            } else {
                res.json(rows[0]);
            }

        }
    });
});

app.delete('/books/:id', function (req, res, next) {
    var bookId = req.params.id,
        sqlStatement = "delete from protr_train.books" +
            " where bookId=" + bookId + ";";
    connection.query(sqlStatement, function (err, rows, fields) {
        if (err) {
            err.status = 404;
            next(err);
        } else {
            res.json(rows[0]);
        }
    });
});

app.get('/users', function (req, res, next) {
    var sqlStatement = 'select * from protr_train.users;';
    connection.query(sqlStatement, function (err, rows, fields) {
        if (err) {
            err.status = 404;
            next(err);
        } else {
            res.json(rows);
        }
    });
});

app.post('/users', function (req, res, next) {
    var userName = req.body.userName,
        userSurname = req.body.userSurname,
        userJob = req.body.userJob,
        userAge = req.body.userAge,

        sqlStatement = "insert into protr_train.users " +
            "(userName, userSurname, userJob, userAge)" +
            " values ('" + userName + "', '" + userSurname + "','" + userJob + "', " + userAge + ");";

    connection.query(sqlStatement, function (err, rows, fields) {
        if (err) {
            err.status = 404;
            next(err);
        } else {
            res.json(rows.insertId);
        }
    });
});

app.get('/users/:id', function (req, res, next) {
    var userId = req.params.id,
        sqlStatement = "select * from protr_train.users" +
            " where userId=" + userId + ";";
    connection.query(sqlStatement, function (err, rows, fields) {
        if (err) {
            err.status = 404;
            next(err);
        } else {
            if (!rows[0]) {
                var err = new Error();
                err.status = 404;
                next(err);
            } else {
                res.json(rows[0]);
            }
        }
    });
});

app.delete('/users/:id', function (req, res, next) {
    var userId = req.params.id,
        sqlStatement = "delete from protr_train.users" +
            " where userId=" + userId + ";";
    connection.query(sqlStatement, function (err, rows, fields) {
        if (err) {
            err.status = 404;
            next(err);
        } else {
            res.json(rows[0]);
        }
    });
});


app.get('*', function (req, res, next) {
    var err = new Error();
    err.status = 404;
    next(err);
});

var server = app.listen(3000, function () {
    var host = '0.0.0.0';
    //server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});