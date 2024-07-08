import { Link, Navigate, useParams } from "react-router-dom";
import styles from './SinglePages.module.scss';
import { useSelector } from "react-redux";
import { getPostById } from '../../../redux/postsRedux.js';
import { Button, Card, Col, Row } from 'react-bootstrap';
import RemovePost from '../../features/RemovePost/RemovePost.js';
import dateToStr from "../../../utils/dateToStr.js";



const SinglePages = (props) => {
    const { postId } = useParams();
    const postData = useSelector(state => getPostById(state, postId));
    if(!postData) return <Navigate to='/'/> 
    
    return (
        <Row className='justify-content-center'>
            <Col className='col-lg-6'>
                <Row>
                    <Col>
                        <h1 className='px-3'>{postData.title}</h1>
                    </Col>
                    <Col className='d-flex justify-content-end'>
                        <Link key={props.id} to={`/post/edit/${postId}`} className='px-2'>
                            <Button variant='outline-info' className='px-4'>Edit</Button>
                        </Link>
                        <RemovePost id={postData.id}/>
                    </Col>

                </Row>
                <Card className='border-0'>
                    <Card.Body>
                                <Card.Text className='mb-1'><strong>Author:</strong>{postData.author}</Card.Text>
                                <Card.Text className='mb-2'><strong>Published:</strong>{dateToStr(postData.publishedDate)}</Card.Text>
                                <Card.Text className='mb-3'><strong>Short description:</strong>{postData.shortDescription}</Card.Text>
                                <Card.Text className='mb-2'><strong>Category:</strong>{postData.category}</Card.Text>
                                <Card.Text className='mb-3' dangerouslySetInnerHTML={{ __html: postData.content }}></Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}
export default SinglePages; 