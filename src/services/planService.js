const prisma = require('../config/prisma');

exports.createPlan = async ({ name, price, duration, features }) => {
  return await prisma.plan.create({
    data: { name, price, duration, features },
  });
};

exports.getPlans = async () => {
  return await prisma.plan.findMany();
};
