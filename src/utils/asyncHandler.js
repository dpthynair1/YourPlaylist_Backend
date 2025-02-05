const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    console.log("from register");
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

/* 
const asyncHandler1 = (fn) => async () => {};

const asyncHandler = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (error) {
    console.log(error);
    res.status(error.code || 500).json({
      success: false,
      message: error.message,
    });
  }
};
*/
export { asyncHandler };
