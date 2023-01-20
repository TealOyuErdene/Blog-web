import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export function Addnews() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="./software engineer.jpeg" />
      <Card.Body>
        <Card.Title>
          20 Lessons Learned in 20 Years: Insights from a Seasoned Software
          Engineer
        </Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget
          lorem id nisi semper pretium. Vivamus a sapien metus.
        </Card.Text>

        <Card.Link href="#">Read more</Card.Link>
      </Card.Body>
    </Card>
  );
}
