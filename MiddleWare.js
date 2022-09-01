async function auth() {
    //Simulate user authentication.
    return true
}

function checkAuthentication() {
    return async function (req, res, next) {
        let isUserAuthenticated = await auth();

        if (!isUserAuthenticated)
            return res.json({message: "user not authenticated"});

        next();
    }
}

function LogAllRequests() {
    return function (req, res, next) {
        console.log('new request happen')
        next();
    }
}


module.exports = {
    LogAllRequests,
    checkAuthentication
}