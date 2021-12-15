const router = require('express').Router();

const routePost = [
  { id: 1, name: 'A' },
  { id: 2, name: 'B'},
]

router.get('/', (_req, res) => res.status(200).json({ routePost }));
router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  const routePosts = posts.find((post) => post.id === parseInt(id));
  if (!routePosts) return next({ statusCode: 404, message: 'post not found' });
  res.status(200).json(routePosts);
});

module.exports = router;
