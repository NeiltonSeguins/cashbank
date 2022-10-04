import { createContext, useState } from "react";

export const MyContext = createContext({});

export const MyProvider = (props) => {
  const [transacao, setTransacao] = useState({
    valor: 5000,
    tipo: "Selecione o tipo de transação",
  });

  return (
    <MyContext.Provider value={{ transacao, setTransacao }}>
      {props.children}
    </MyContext.Provider>
  );
};
