// import hook useState from react
import { useState, useEffect } from "react";

//import component Bootstrap React
import {
  Card,
  Container,
  Row,
  Col,
  Button,
  Form,
  Alert,
} from "react-bootstrap";

//import axios
import axios from "axios";

// import hook history dari react router DOM
import { useHistory, useParams } from "react-router-dom";

function EditPost() {
  // State
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // State validation
  const [validation, setValidation] = useState({});

  // history
  const history = useHistory();

  // Get ID from parameters URL
  const { id } = useParams();

  // Hook Effect
  useEffect(() => {
    // Panggil function get post By ID
    getPostById();
  }, []);

  // function get post by id
  const getPostById = async () => {
    // Get data from server
    const response = await axios.get(`http://localhost:3000/api/posts/${id}`);

    // Get response data
    const data = await response.data.data;

    // Assign data to State, untuk menampilkan data yg di tangkap ketika di form edit
    setTitle(data.title);
    setContent(data.content);
  };

  // Function "update data post"
  const updatePost = async (e) => {
    e.preventDefault();

    // Send data to server
    await axios
      .patch(`http://localhost:3000/api/posts/update/${id}`, {
        title: title,
        content: content,
      })
      .then(() => {
        // redirect
        history.push("/posts");
      })
      .catch((error) => {
        // assign validation State
        setValidation(error.response.data);
      });
  };

  return (
    <Container classname="mt-3">
      <Row>
        <Col md="{12}">
          <Card classname="border-0 rounded shadow-sm">
            <Card.Body>
              {validation.errors && (
                <Alert variant="danger">
                  <ul class="mt-0 mb-0">
                    {validation.errors.map((error, index) => (
                      <li key={index}>{`${error.param} : ${error.msg}`}</li>
                    ))}
                  </ul>
                </Alert>
              )}

              <Form onSubmit={updatePost}>
                <Form.Group className="mb-3" controlId="formBasicTitle">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    rows={3}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Masukkan Title"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicContent">
                  <Form.Label>Content</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Masukkan Content"
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Update
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default EditPost;
