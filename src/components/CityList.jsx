import { useStateStore } from "../store";
import { useCities } from "../query";
import { Card, Col, Container, Pagination, Row } from "react-bootstrap";

function StateList() {
  const { state } = useStateStore();
  const { isLoading, data, error } = useCities(state);

  if (isLoading)
    return (
      <div>
        <p>Carregando</p>
      </div>
    );

  if (error)
    return (
      <div>
        <p>Houve um erro, por favor tente novamente mais tarde</p>
        <p>{error.message}</p>
      </div>
    );

  return (
    <Container>
      <Row>
        {data.data.map((city) => (
          <Col key={city.ibge_code} xs md="4" lg="4">
            <Card body bg="secondary" className="px-0 mb-1" text="white">
              <span className="color-white">Cidade:</span>
              <p>{city.nome}</p>
            </Card>
          </Col>
        ))}
      </Row>
      <Row>
        <Col>
          <Pagination />
        </Col>
      </Row>
    </Container>
  );
}

export default StateList;