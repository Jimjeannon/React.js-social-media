// Verification de l'email avec RegExp
module.exports = (req, res, next) => {
    function validEmail(emailAdress) {
        let regexEmail = new RegExp(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/);
        testEmail = emailAdress.match(regexEmail)
        if (testEmail) {
            console.log("Email ok")
            next()
        } else {
            res.status(400).json({
                message: 'Email incorrect'
            });
        }
        return testEmail
    }
    validEmail(req.body.email)
  }
  © 2022 GitHub, Inc.
  Terms
  Privac