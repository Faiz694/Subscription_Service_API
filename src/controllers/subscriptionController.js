const service = require('../services/subscriptionService');

exports.createSubscription = async (req, res) => {
  try {
    const sub = await service.createSubscription(req.user.id, req.body.planId);
    res.status(201).json(sub);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getUserSubscription = async (req, res) => {
  const sub = await service.getUserSubscription(req.params.userId);
  res.json(sub);
};

exports.updateSubscription = async (req, res) => {
  const updated = await service.updateSubscription(req.params.id, req.body.planId);
  res.json(updated);
};

exports.cancelSubscription = async (req, res) => {
  await service.cancelSubscription(req.params.id);
  res.json({ message: 'Subscription cancelled' });
};
