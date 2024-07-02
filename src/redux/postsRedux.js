import shortid from 'shortid';

//selectors
export const getAllPosts = ({ posts }) => posts;
// actions
const createActionName = actionName => `app/posts/${actionName}`;
const ADD_POSTS = createActionName('ADD_POSTS');


// action creators
export const addPosts = payload => ({ type: ADD_POSTS, payload });
const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_POSTS:
      return [...statePart, {...action.payload, id: shortid() }]
    default:
      return statePart;
  };
};

export default postsReducer;
