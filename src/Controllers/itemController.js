const MainModel = require("../models/itemsModel");

module.exports = {

  show(req, res, next) {
    MainModel.find({})
    .then(item => res.json(item))
  }

};