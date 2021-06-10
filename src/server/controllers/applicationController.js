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
      log: `applicationController.getApplications: ERROR: E${err}`,
      message: {
        err: `Error occurred in applicationController.getApplication. Check server logs for more information.`,
      },
    });
  }
};

module.exports = applicationController;
