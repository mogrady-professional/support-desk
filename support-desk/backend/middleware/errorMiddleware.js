/* 
Error Handler Middleware
Show error stack if in development mode
Return JSON instead of the default HTML response
*/
const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? "🥞" : err.stack,
  });
};

// Export the error handler middleware
module.exports = { errorHandler };
