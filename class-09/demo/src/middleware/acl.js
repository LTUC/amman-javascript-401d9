module.exports = (capability) => {
    return (req, res, next) => {
        try {
            if (req.user.capabilities.includes(capability)) {
                next();
            } else {
                next('Access denied');
            }
        } catch (error) {
            next('Invalid Login')
        }
    }
};