import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editCustomerStartAction } from "../actions/customerActions";
import { useHistory } from "react-router-dom";
import "./customeredit.sass";

const CustomerEdit = () => {

  const history = useHistory();
  const dispatch = useDispatch();

  //nuevo state de cliente
  const [customer, saveCustomer] = useState({
    name: "",
  });

  // cliente a editar
  const customerEdit = useSelector((state) => state.customers.customerEdit);

  // llenamos el state automáticamente
  useEffect(() => {
    saveCustomer(customerEdit);
  }, [customerEdit]);

  // //leer datos formulario
  const onChangeForm = (e) => {
    saveCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
  };
// deconstruyo datos del cliente
  const { name } = customer;

  const submitEditCustomer = (e) => {
    e.preventDefault();
    dispatch(editCustomerStartAction(customer));
    history.push('/customers')
  };

  return (
    <div className="main-container-form">
      <div className="header-form">
        <h2>Editar cliente</h2>
      </div>

      <div className="main-form">
        <form onSubmit={submitEditCustomer} className="form-style">
          <div className="form-group">
            <label>Editar nombre completo</label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              placeholder="Escribe el nombre completo"
              autoFocus={true}
              value={name}
              onChange={onChangeForm}
            />
          </div>

          <div className="d-flex justify-content-end">
            <button className="btn btn-primary d-block w-100" type="submit">
              Modificar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CustomerEdit;
