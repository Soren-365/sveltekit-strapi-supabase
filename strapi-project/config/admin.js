module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6cb68b17c5c8c9d66ab94c02aaa0e6d9'),
  },
});
