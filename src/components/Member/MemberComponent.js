import React from "react";
import { Card } from "react-bootstrap";

const MemberComponent = ({firstName, lastName, username, email, password}) => {
  return (
    <div className="col-lg-3">
      <Card className="text-center mt-5">
        <Card.Header>{firstName} {lastName}</Card.Header>
        <Card.Body>
          <Card.Title>{firstName}</Card.Title>
          <Card.Text>{lastName}</Card.Text>
          <Card.Text>{username}</Card.Text>
          <Card.Text>{email}</Card.Text>
          <Card.Text>{password}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MemberComponent;