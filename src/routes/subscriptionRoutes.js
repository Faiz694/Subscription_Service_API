const router = require('express').Router();
const subscriptionController = require('../controllers/subscriptionController');
const auth = require('../middleware/auth');

router.post('/', auth, subscriptionController.createSubscription);
router.get('/:userId', auth, subscriptionController.getUserSubscription);
router.put('/:id', auth, subscriptionController.updateSubscription);
router.delete('/:id', auth, subscriptionController.cancelSubscription);

module.exports = router;
