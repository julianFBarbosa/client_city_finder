import "./App.css";
import StateList from "./components/StateList";
import CityList from "./components/CityList";
import { QueryClientProvider } from "react-query";
import { Card, Col, Container, Row } from "react-bootstrap";
import { queryClient } from "./query";
import { useStateStore } from "./store";

function App() {
  const { state } = useStateStore();

  return (
    <QueryClientProvider client={queryClient}>
      <Container fluid>
        <div className="card w-100">
          <Row className="mb-3">
            <Col>
              <Card bg="light">
                <StateList />
              </Card>
            </Col>
          </Row>
          {state && <CityList />}
        </div>
      </Container>
    </QueryClientProvider>
  );
}

export default App;
