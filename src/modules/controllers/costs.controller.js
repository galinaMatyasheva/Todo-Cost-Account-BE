const Cost = require('../../db/models/cost/index');

module.exports.getAllCosts = (req, res, next) => {
  Cost.find()
    .then(result => {
      res.send({data: result});
    })
    .catch(error => {
      return res.status(400).send(error, 'error during creating costs');
    });
};

module.exports.createCost = (req, res, next) => {
  const body = req.body;
  const cost = new Cost(body);
  if (!cost.buy || !cost.price || !cost.date) {
    return res
      .status(422)
      .json({success: false, error: 'invalid data during creating costs'});
  }
  cost
    .save(body)
    .then(result => {
      Cost.find().then(result => {
        res.send({data: result});
      });
    })
    .catch(error => {
      return res.status(400).send(error, 'error during creating costs');
    });
};

module.exports.updateCost = (req, res, next) => {
  const body = req.body;
  const cost = new Cost(body);
  Cost.updateOne({_id: cost._id}, cost)
    .then(() => {
      Cost.find().then(result => {
        res.send({data: result});
      });
    })
    .catch(error => {
      return res.status(400).send(error, 'error during updating costs');
    });
};

module.exports.deleteCost = (req, res, next) => {
  Cost.deleteOne({_id: req.params.id})
    .then(() => {
      Cost.find().then(result => {
        res.send(result);
      });
    })
    .catch(error => {
      return res.status(400).send(error, 'error during deleting cost');
    });
};
