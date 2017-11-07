let Standup = require('../models/standup.server.model.js');

exports.list = (req, res) => {
    let query = Standup.find();
    
    query.sort({createdOn: 'desc'})
        .limit(12)
        .exec((err, results) => {
            res.render('index', {title: 'Standup - List', notes: results});
        });
};

exports.filterByMember = (req, res) => {
    let query = Standup.find();
    const filter = req.body.memberName;
    
    query.sort({createdOn: 'desc'});
    
    if (filter.length > 0) {
        query.where({memberName: filter})
    }
    
    query.exec((req, results) => {
        res.render('index', {title: 'Standup - List', notes: results}); 
    });
};

exports.create = (req, res) => {
    let entry = new Standup({
        memberName: req.body.memberName,
        project: req.body.project,
        workYesterday: req.body.workYesterday,
        workToday: req.body.workToday,
        impediment: req.body.impediment
    });
    
    entry.save();
    
    // redirect to homepage...
    res.redirect(301, '/');
};

exports.getNote = (req, res) => {
    res.render('newnote', {title: 'Standup - New Note'});
};