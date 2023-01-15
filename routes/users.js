const Developer = require('../models/Developers');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    Developer.find({}, function(err, recs) {
    if (err) {
      console.log({err});
      res.send(err);
      return;
    }
    res.json(recs);
    res.send();
  });
});

router.get('/:name', function(req, res, next) {
    Developer.find({name: req.params.name}, function(err, recs) {
    if (err) {
      console.log({err});
      res.send(err);
      return;
    }
    res.json(recs);
    res.send();
  });
});

router.get('/add/:name/role/:role', function(req, res, next) {
  const dev = new Developer({name: req.params.name, role: req.params.role});
  dev.save((err, rec) => {
    if (err) {
      console.log(err);
      throw new Error('BROKEN');
    }
    res.json(rec);
    res.send();
  });
});

router.get('/delete/:name/role/:role', function(req, res, next) {
    Developer.deleteOne({name: req.params.name, role: req.params.role}).catch(
        err => res.send(err.stack)
    ).then(
        () => res.send('Deleted!!')
    );
});

module.exports = router;
