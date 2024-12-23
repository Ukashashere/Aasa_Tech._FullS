const jwt = require('jsonwebtoken');
/*const cors = require('cors');
app.use(cors());*/


module.exports = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Access denied' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId;
        next();
    } catch {
        res.status(403).json({ error: 'Invalid token' });
    }
};
