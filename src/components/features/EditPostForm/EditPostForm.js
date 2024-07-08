import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { editPost, getPostById } from "../../../redux/postsRedux";
import PostForm from "../PostForm/PostForm";


const EditPostForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { id } = useParams();

    const postData = useSelector((state) => getPostById(state, id));

    const handleSubmit = postData => {
        dispatch(editPost({...postData, id}));
        navigate('/');
    };
    if(!postData) return <Navigate to='/'/>
    return (
        <PostForm
            postId = {id}
            action={handleSubmit}
            actionText='EditPost'
            title={postData.title}
            publishedDate={postData.publishedDate}
            category={postData.category}
            shortDescription={postData.shortDescription}
            content={postData.content}
            author={postData.author}
        />


    )
}
export default EditPostForm;