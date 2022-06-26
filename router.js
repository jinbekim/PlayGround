const router = require('express').Router();

/**
 * process.cwd() is woring directory
 * __dirname is the directory where your files live.
 */
router.get('*', (req, res) => {
  req.session.views = req.session.views ?? {};
  req.session.views.count = (req.session.views.count ?? 0) + 1;
  res.send(req.session)
});

module.exports = router;
