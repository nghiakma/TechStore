// not Found

const notFound = (req, res, next) => {
  const error = new Error(`Không thấy : ${req.originalUrl}`);
  res.status(404);
  next(error);
};

// Error Handler

const errorHandler = (err, req, res, next) => {
  const statuscode = res.statusCode == 200 ? 500 : res.statusCode;
  res.status(statuscode);
  res.json({
    status: "thất bại",
    message: err?.message,
    stack: err?.stack,
  });
};

module.exports = { errorHandler, notFound };
