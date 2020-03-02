exports.asyncHandler = (f) => (req,res,next) => {
    return Promise.resolve(f(req,res,next)).catch(next);
};

exports.sendResponse = (res,statusCode,data)=> {
    
    const extendedLogString = `${res.req.method} ${
        res.req.orginalUrl
    } ${statusCode} request-body:${JSON.stringify(res.req.body)} response-body:${JSON.stringify(
        data,
    )}`;
    
        
   return res.status(statusCode).send(data);

        
};