const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  const data = await Category.findAll({
    include: [Product]
  })
  console.log(data)
  //const json = await data.json();
 // res.send(json);
  res.json(data);
  
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  const data = await Category.findOne({
    where: {
      id: req.params.id
    },
    include : [Product]
  })
  res.json(data)
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/',async (req, res) => {
  const newCategory = await Category.create(req.body)
  res.json(newCategory)
  // create a new category
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  const updatedCategory = await Category.update(req.body,{where: {id:req.params.id}})
  res.json(updatedCategory);
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  const deleteCategory = await Category.destroy({where: {id:req.params.id}});
  res.json(deleteCategory);
});

module.exports = router;
