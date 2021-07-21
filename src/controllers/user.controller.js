const db = require('../models/index.db');
const User = db.user;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const env = require('../../app.config/api.env.json')
const requestIp = require('request-ip');
const { Sequelize, Op, QueryTypes } = require('sequelize');

/*
// inside middleware handler
const ipMiddleware = function (req, res, next) {
    const clientIp = requestIp.getClientIp(req);
    next();
};*/

//create new user
exports.createNewUser = async (req, res, next) => {
    if (!req.body.email || !req.body.password || !req.body.religion) {
        res.status(400).send({
            message: "Form fillds can not be empty!"
        });
        return;
    }
    await User.findAll({ where: { email: req.body.email } })
        .then(user => {
            if (user.length > 0) {
                return res.status(401).json({
                    message: "Email mail exists allready !",
                    hint: "Try with new email id !"
                });
            }
            else {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        return res.status(500).json({
                            error: err
                        })
                    }
                    else {
                        const clientIp = requestIp.getClientIp(req);
                        const user = {
                            firstname: req.body.firstname,
                            lastname: req.body.lastname,
                            dob: req.body.dob,
                            religion: req.body.religion,
                            email: req.body.email,
                            mother_tongue: req.body.mother_tongue,
                            country: req.body.country,
                            role: req.body.role,
                            password: hash,
                            last_login_ip: clientIp
                        }
                        //now create
                        User.create(user)
                            .then(data => {
                                res.status(200).json({
                                    message: "Your Account created successfull, now login !",
                                    user: data
                                })
                            })
                            .catch(err => {
                                console.log(err);
                                res.status(500).send({
                                    message: err.message || 'some error occure !'
                                });
                            })
                    }
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving UserMaul."
            });
        });
}

//login user
exports.logUser = (req, res, next) => {
    // Validate request
    if (!req.body.email || !req.body.password) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    User.findAll({ where: { email: req.body.email } })
        .then(
            user => {
                if (user.length < 1) {
                    return res.status(401).json({
                        message: "login Failed !",
                    });
                }
                bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                    if (err) {
                        return res.status(401).json({
                            message: "Login Failed !",
                        });
                    }
                    if (result) {
                        const token = jwt.sign(
                            {
                                userId: user[0].id,
                                email: user[0].email,
                            },
                            env.env.JWT_KEY,
                            {
                                expiresIn: "24h"
                            }
                        );
                        return res.status(200).json({
                            "success": true,
                            token: token,
                            userId: user[0].id
                        });
                    }
                    return res.status(401).json({
                        message: "Login Failed!",
                    });
                })
            }
        )
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving UserMaul."
            });
        });
}
//login user
exports.getAllUser = async (req, res) => {
    const Users = await db.sequelize.query(`SELECT users.username,users.email,user_basic_details.religion From users join user_basic_details on users.id=user_basic_details.userId`, { type: QueryTypes.SELECT })
        .then(
            users => {
                if (users) {
                    return res.status(200).json({
                        data: users
                    })
                }
                res.send(400).json({
                    err: err
                })
            }
        )
        .catch({
            if(err) {
                res.status(400).json({
                    err: err
                });
            }
        })



}





