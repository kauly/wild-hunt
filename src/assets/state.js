import * as React from "react";

export const AppStateContext = React.createContext({});

const AppContext = ({ children }) => {
  const [order, setOrder] = React.useState("RANKING");
  const [selectedProduct, setSelectedProduct] = React.useState(null);

  const _handleOrder = (data) => setOrder(data);
  const _handleSelected = (id) => setSelectedProduct(id);
  return (
    <AppStateContext.Provider
      value={{
        order,
        selectedProduct,
        _handleOrder,
        _handleSelected,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export default AppContext;
