const prisma = require('../config/prisma');

exports.createSubscription = async (userId, planId) => {
  const plan = await prisma.plan.findUnique({ where: { id: planId } });
  if (!plan) throw new Error('Plan not found');

  const endDate = new Date();
  endDate.setDate(endDate.getDate() + plan.duration);

  return await prisma.subscription.create({
    data: {
      userId,
      planId,
      status: 'ACTIVE',
      endDate,
    },
  });
};

exports.getUserSubscription = async (userId) => {
  return await prisma.subscription.findFirst({
    where: { userId, status: 'ACTIVE' },
    include: { plan: true },
  });
};

exports.updateSubscription = async (id, planId) => {
  const plan = await prisma.plan.findUnique({ where: { id: planId } });
  if (!plan) throw new Error('Plan not found');

  const endDate = new Date();
  endDate.setDate(endDate.getDate() + plan.duration);

  return await prisma.subscription.update({
    where: { id },
    data: { planId, endDate },
  });
};

exports.cancelSubscription = async (id) => {
  return await prisma.subscription.update({
    where: { id },
    data: { status: 'CANCELLED' },
  });
};
