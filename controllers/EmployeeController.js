var mongoose = require('mongoose');

var Employee = require("../models/Employee");

var employeeController = {};

employeeController.getList = (req, res, next) => {
  Employee.find((err, employees) => {
    if (err) return next(err);
    res.json(employees);
  });
};

employeeController.getDetail = (req, res, next) => {
  Employee.findById(req.params.id, (err, employee) => {
    if (err) return next(err);
    res.json(employee);
  });
};

employeeController.create = (req, res, next) => {
  Employee.create(req.body, (err, employee) => {
    if (err) return next(err);
    res.json(employee);
  });
};

employeeController.update = (req, res, next) => {
  Employee.findByIdAndUpdate(req.params.id, req.body, (err, employee) => {
    if (err) return next(err);
    res.json(employee);
  });
};

employeeController.delete = (req, res, next) => {
  Employee.findByIdAndRemove(req.params.id, (err, employee) => {
    if (err) return next(err);
    res.json(post);
  });
};

module.exports = employeeController;