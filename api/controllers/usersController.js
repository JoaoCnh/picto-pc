var express = require("express");
var router = express.Router();

var User = require("../models/User");

/*
 * GET: /users
 * Returns all users as JSON with no restrictions
 */
router.get("/", function (req, res) {
    User.collection().fetch().then(function (users) {
        res.send(users);
    });
});

/*
 * POST: /users/icon
 * Updates the user icon
 */
router.post("/icon", function (req, res) {
    if (!req.body) return res.sendStatus(400);

   User.where("id", req.body.id).fetch().then(function (user) {
        if (!user) {
            return res.send({ error: true, message: "No User found" });
        }

        user.save({ icon: req.body.icon }, { method: "update" }).then(function (updatedUser) {
            return res.send({ error: false, user: updatedUser });
        })
        .catch(function (error) {
            return res.send({ error: true, message: error });
        });
    })
    .catch(function (error) {
        return res.send({ error: true, message: error });
    });
});

module.exports = router;