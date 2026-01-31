const requests = {}
export const rateLimit = (req, res, next) =>{
    const ip = req.ip;
    const now = Date.now();

    if(!requests[ip]) requests[ip] = [];
    requests[ip] = requests[ip].filter(t => now-t < 60000);

    if(requests[ip].length >= 3){
        return res.status(429).send("Too many requests");
    }

    requests[ip].push(now);
    next();
}