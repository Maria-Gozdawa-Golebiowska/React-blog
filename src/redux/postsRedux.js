import shortid from 'shortid';

//selectors
export const getPostById = ({ posts }, postId) => posts.find(post => post.id === postId);
export const getAllPosts = ({ posts }) => posts;
// actions
const createActionName = actionName => `app/posts/${actionName}`;
const ADD_POSTS = createActionName('ADD_POSTS');
const REMOVE_POST = createActionName('REMOVE_POST');
const EDIT_POST = createActionName('EDIT_POST');


// action creators
export const addPosts = payload => ({ type: ADD_POSTS, payload });
export const removePosts = payload => ({ type: REMOVE_POST, payload});
export const editPost = payload =>({ type: EDIT_POST, payload});
const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_POSTS:
      return [...statePart, {...action.payload, id: shortid() }];
      case REMOVE_POST:
          return statePart.filter((post) => post.id !== action.payload);
        case EDIT_POST:
            return statePart.map(post => (post.id === action.payload.id ? {...post, ...action.payload } : post));
    default:
      return statePart;
  };
};

export default postsReducer;
