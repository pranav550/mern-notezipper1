import React from "react";
import MainScreen from "../../Components/MainScreen/MainScreen";
import {
  Badge,
  Button,
  Card,
  Accordion,
  useAccordionButton,
} from "react-bootstrap";
import notes from "../../data/notes";
import { Link } from "react-router-dom";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <button
      type="button"
      style={{ backgroundColor: "orange" }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}
function MyBlog() {
  const deleteHandler = (id) => {
    console.log(id);
    if (window.confirm("Are Your Sure?")) {
    }
  };
  return (
    <MainScreen title="Welcome To Pranav Verma">
      <Link to="createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create New Note
        </Button>
      </Link>

      {notes.map((note) => {
        console.log(note);
        return (
          <Accordion>
            <Card key={note._id} style={{ margin: 10 }}>
              <Card.Header style={{ display: "flex" }}>
                <span
                  style={{
                    flex: 1,
                    color: "black",
                    textDecoration: "none",
                    alignSelf: "center",
                    fontSize: 18,
                  }}
                >
                  <CustomToggle as={Card.Text} variant="link" eventKey="0">
                    {note.title}
                  </CustomToggle>
                </span>
                <div>
                  <Button Link to={`/note/${note._id}`}>
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    className="mx-2"
                    onClick={() => deleteHandler(note._id)}
                  >
                    Delete
                  </Button>
                </div>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <h4>
                    <Badge bg="success">Category-{note.category}</Badge>
                  </h4>
                  <blockquote className="blockquote mb-0">
                    <p>{note.content}</p>
                    <footer className="blockquote-footer">
                      Created On -date
                    </footer>
                  </blockquote>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        );
      })}
    </MainScreen>
  );
}

export default MyBlog;
