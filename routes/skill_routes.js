/**
 * Created by Joe on 11/21/16.
 */

var express = require('express');
var router = express.Router();
var skill_dal = require('../model/skill_dal');

router.get('/all', function(req,res) {
    skill_dal.getAll(function(err, result) {
        if(err) {
            res.send(err);
        }
        else {
            res.render ('skill/skillViewAll', {'result': result});
        }
    });
});

router.get('/', function(req, res){
    if (req.query.skill_id == null) {
        res.send('skill_id is null');
    }
    else {
        skill_dal.getById(req.query.skill_id, function(err, result){
            if (err) {
                res.send(err);
            }
            else {
                res.render('skill/skillViewById', {'result': result});
            }
        });

    }
});

module.exports = router;
