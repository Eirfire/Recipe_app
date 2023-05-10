// file full of all data for the app like the initial state of the recipe, dietary requirements, etc.
import { Timestamp } from 'firebase/firestore';
import { Recipe } from 'libs/types';
export const dietaryRequirements = [
  { value: 'None', label: 'None' },
  { value: 'Vegetarian', label: 'Vegetarian' },
  { value: 'Vegan', label: 'Vegan' },
  { value: 'Gluten Free', label: 'Gluten Free' },
  { value: 'Dairy Free', label: 'Dairy Free' },
  { value: 'Nut Free', label: 'Nut Free' },
];

export const initialRecipeState = {
  id: '',
  image: {
    imgUrl: '',
    imgAlt: '',
  },
  recipeName: '',
  recipeDescription: '',
  keywords: [],
  dietary: [],
  allergens: [],
  sweet_savoury: { value: '', label: '' },
  mealTime: { value: '', label: '' },
  version: '',
  createdBy: {
    uid: '',
    displayName: '',
    userName: '',
  },
  createdAt: Timestamp.now(),
  lastUpdated: Timestamp.now(),
  lastUpdatedBy: {
    uid: '',
    displayName: '',
    userName: '',
  },
  info: {
    total: '',
    prep: '',
    cook: '',
    serves: undefined,
    rating: 0,
  },
  steps: [{ step_body: '' }],
  ingredients: [{ ingredient: '', unit: 'gram', quantity: undefined }],
  madeRecipe: 0,
  savedRecipe: 0,
} as Recipe;

export const units = [
  'gram',
  'kg',
  'cup',
  'ml',
  'litre',
  'tsp',
  'tbsp',
  'pinch',
  'item',
];

export const sweet_savoury = [
  { value: 'sweet', label: 'Sweet' },
  { value: 'savoury', label: 'Savoury' },
  { value: 'both', label: 'Sweet & Savoury' },
];

export const meal_times = [
  { value: 'breakfast', label: 'Breakfast' },
  { value: 'lunch', label: 'Lunch' },
  { value: 'dinner', label: 'Dinner' },
  { value: 'dessert', label: 'Dessert' },
  { value: 'snack', label: 'Snack' },
];

