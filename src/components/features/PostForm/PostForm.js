import { Button, Col, Row } from "react-bootstrap";
import { useState } from "react";
import { Form } from "react-bootstrap";

const PostForm = ({action, actionText, ...props}) => {

    const [title, setTitle] = useState(props.title || '');
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [content, setContent] = useState(props.content || '');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
    const [author, setAuthor] = useState(props.author || '');
    const handleSubmit = e => {
        e.preventDefault();
        action(({title, shortDescription, content, publishedDate, author}));

    };

    return (
        <section>
            <Row>
                <Form onSubmit={handleSubmit}>
                    <Col>
                    <Form.Group className="mb-3" controlId="title">
                        <Form.Label>Title:</Form.Label>
                        <Form.Control type="text" value={title} onChange={e => setTitle(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="title">
                        <Form.Label>Author:</Form.Label>
                        <Form.Control type="text" value={author} onChange={e => setAuthor(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="title">
                        <Form.Label>Published:</Form.Label>
                        <Form.Control type="text" value={publishedDate} onChange={e => setPublishedDate(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="title">
                        <Form.Label>Short description:</Form.Label>
                        <Form.Control as="textarea" value={shortDescription} onChange={e => setShortDescription(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="title">
                        <Form.Label>Main Content:</Form.Label>
                        <Form.Control as="textarea" value={content} onChange={e => setContent(e.target.value)}/>
                    </Form.Group>
                </Col>
                <Button type="submit">{actionText}</Button>
            </Form>
        </Row>
    </section>    
    )
};

export default PostForm;