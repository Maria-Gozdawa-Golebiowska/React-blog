import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import PostForm from "../PostForm/PostForm";
import { addPosts } from "../../../redux/postsRedux";

const AddPostForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSubmit = post => {
      dispatch(addPosts(post));
      navigate('/')
    };
    return (

    <PostForm action={handleSubmit} actionText={'Add Post'}></PostForm>
    )
};

export default AddPostForm;