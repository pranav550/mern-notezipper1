import React from "react";
import { Container, Row } from "react-bootstrap";
import "./Mainscreen.css";

function MainScreen({ title, children }) {
  return (
    <div className="mainback">
      <Container>
        <Row>
          <div className="page">
            {title && (
              <>
                <p className="heading">{title}</p>
                <hr />
              </>
            )}
            {children}
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default MainScreen;
