const { recipes } = require('./CustomRecipes');
const fs = require('fs');

const content = JSON.stringify(recipes);

fs.writeFile('./recipes.json', content, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Successfully wrote ${content} to recipes.json`);
});
