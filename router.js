const router = require('express').Router();

/**
 * process.cwd() is woring directory
 * __dirname is the directory where your files live.
 */
router.get('*', (req, res) => {
  res.sendFile('./public/index.html', {root: __dirname})
});

module.exports = router;
