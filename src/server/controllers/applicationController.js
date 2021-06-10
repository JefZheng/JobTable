const models = require('../models/applicationsModel');

const applicationController = {};
const { Application } = models;

applicationController.getApplication = async (req, res, next) => {
  console.log(Application);
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
    Application.create(req.body);
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
