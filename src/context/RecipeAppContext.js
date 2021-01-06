import createDataContext from './createDataContext';
import { client } from '../contentfulClient/contentfulClient';

const recipeAppReducer = (state, action) => {
  switch (action.type) {
    case 'get_categories':
      return { ...state, categories: action.payload };
    case 'get_recipes':
      return { ...state, recipes: action.payload };
    case 'set_single_recipe':
      return { ...state, recipe: action.payload };
    default:
      return state;
  }
};

const getCategories = (dispatch) => {
  return async () => {
    try {
      await client.getEntries({ content_type: 'category' }).then((response) => {
        dispatch({
          type: 'get_categories',
          payload: response.items,
        });
      });
    } catch (err) {
      console.log('err', err);
    }
  };
};

const getRecipes = (dispatch) => {
  return async (categoryId) => {
    try {
      await client
        .getEntries({
          content_type: 'recipes',
          // 'fields.category_id.sys.type': 'Link',
          'fields.category_id.sys.id[all]': categoryId,
        })
        .then((response) => {
          dispatch({ type: 'get_recipes', payload: response.items });
        });
    } catch (err) {
      console.log('err', err);
    }
  };
};

const setSingleRecipe = (dispatch) => {
  return (recipe) => {
    try {
      dispatch({
        type: 'set_single_recipe',
        payload: recipe,
      });
    } catch (err) {}
  };
};

export const { Context, Provider } = createDataContext(
  recipeAppReducer,
  { getCategories, getRecipes, setSingleRecipe },
  {
    categories: [],
    recipes: [],
    recipe: null,
  }
);
