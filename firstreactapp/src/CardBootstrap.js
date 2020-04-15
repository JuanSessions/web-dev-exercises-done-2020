import React from "react";
import { Card, Button } from "react-bootstrap";

export default function CardBootstrap() {
  return (
    <div>
      <Card
        style={{
          width: "18rem"
        }}
      >
        <Card.Img
          variant="top"
          src="https://www.istockphoto.com/resources/images/HomePage/Tiles/EN_US/Illustrations-We-Love-1170044173.jpg"
        />
        <Card.Body>
          <Card.Title> Card Title </Card.Title>{" "}
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card 's content.{" "}
          </Card.Text>{" "}
          <Button variant="primary"> Go somewhere </Button>{" "}
        </Card.Body>{" "}
      </Card>
    </div>
  );
}
