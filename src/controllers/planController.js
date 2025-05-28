const planService = require('../services/planService');

exports.createPlan = async (req, res) => {
  try {
    const plan = await planService.createPlan(req.body);
    res.status(201).json(plan);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllPlans = async (req, res) => {
  const plans = await planService.getPlans();
  res.json(plans);
};
