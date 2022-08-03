// Import components bootstrap react
import { Navbar, Container, Nav } from "react-bootstrap";

// Import React Router DOM
import { Switch, Route, Link } from "react-router-dom";

//import component Home
import Home from "./pages/Home";

// Import component Index, Create, Edit
import PostIndex from "./pages/posts/Index";
import PostCreate from "./pages/posts/Create";
import PostEdit from "./pages/posts/Edit";

function App() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="/">Express.JS + React JS</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" className="nav-link">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/posts" className="nav-link">
                Posts
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts" component={PostIndex} />
        <Route exact path="/posts/create" component={PostCreate} />
        <Route exact path="/posts/edit/:id" component={PostEdit} />
      </Switch>
    </div>
  );
}

export default App;
