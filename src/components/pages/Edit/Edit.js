import { Col, Row } from "react-bootstrap";
import EditPostForm from "../../features/EditPostForm/EditPostForm"


const Edit = () => {
    return (
    <Row className='justify-content-center'>
    <Col>
        <h1>Edit Post</h1>
        <EditPostForm/>
    </Col>
</Row>
)
}
export default Edit;