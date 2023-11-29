import { Form } from "react-bootstrap";
import { useStateStore } from "../store";
import { useBrazilianStateList } from "../query";

function StateList() {
  const { isLoading, data, error } = useBrazilianStateList();
  const { state, updateState } = useStateStore();

  const handleStateSelect = (e) => {
    const { value } = e.target;

    if (value == state) return;

    updateState(value);
  };

  if (isLoading)
    return (
      <div>
        <Form.Select aria-label="Select de Estados">
          <option value="">Carregando</option>
        </Form.Select>
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
    <div>
      {state && <p>selecionado: {state}</p>}
      <Form.Select
        aria-label="Select de Estados"
        defaultValue={"initial"}
        onChange={handleStateSelect}
      >
        <option value="initial" disabled>
          Selecione um Estado
        </option>
        {data.map((state) => (
          <option key={state.id} value={state.sigla}>
            {state.nome}
          </option>
        ))}
      </Form.Select>
    </div>
  );
}

export default StateList;
