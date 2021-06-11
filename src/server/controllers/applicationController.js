const models = require('../models/applicationsModel');

const applicationController = {};
const { Application } = models;

applicationController.getApplication = async (req, res, next) => {
  try {
    const results = await Application.find({});
    res.locals.applications = results;
    return next();
  } catch (err) {
    return next({
      log: `applicationController.getApplications: ERROR: ${err}`,
      message: {
        err: 'Error occurred while retrieving applications. Check server logs for more information.',
      },
    });
  }
};

applicationController.addApplication = (req, res, next) => {
  try {
    const { company, location, position, status, stage, remote } = req.body;
    const results = Application.create({ company, location, position, status, stage, remote });
    return next();
  } catch (err) {
    return next({
      log: `applicationController.addApplications: ERROR: ${err}`,
      message: {
        err: 'Error occurred while adding application. Check server logs for more information.',
      },
    });
  }
};

module.exports = applicationController;
