import { useState } from "react";
import { useDispatch } from "react-redux"
import { addPosts } from "../../../redux/postsRedux";
import { useNavigate } from "react-router-dom";
import { Button, Col, Form, Row } from "react-bootstrap";

const AddPostForm = props => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [shortDescirption, setShortDescription] = useState('');
    const [content, setContent] = useState('');
    const [publishedDate, setPublishedDate] = useState('');
    const [author, setAuthor] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addPosts({title, shortDescirption, content, publishedDate, author, postId: props.postId}));
        setTitle('');
        setShortDescription('');
        setContent('');
        setPublishedDate('');
        setAuthor('');
        navigate('/');

    };

    return (
    <section>
        <Row>
            <Form onSubmit={handleSubmit}>
                <Col>
                    <Form.Group className="mb-3" controlId="title">
                        <Form.Label>Title:</Form.Label>
                        <Form.Control type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Set title"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="title">
                        <Form.Label>Author:</Form.Label>
                        <Form.Control type="text" value={author} onChange={e => setAuthor(e.target.value)} placeholder="Add author"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="title">
                        <Form.Label>Published:</Form.Label>
                        <Form.Control type="text" value={publishedDate} onChange={e => setPublishedDate(e.target.value)}placeholder="DD-MM-YYYY"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="title">
                        <Form.Label>Short description:</Form.Label>
                        <Form.Control as="textarea" value={shortDescirption} onChange={e => setShortDescription(e.target.value)}placeholder=""/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="title">
                        <Form.Label>Main Content:</Form.Label>
                        <Form.Control as="textarea" value={content} onChange={e => setContent(e.target.value)}/>
                    </Form.Group>
                </Col>
                <Button type="submit">Add Post</Button>
            </Form>
        </Row>
    </section>    
    )
};

export default AddPostForm;