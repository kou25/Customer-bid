import React, { useEffect} from "react";
import Table from "../../Components/Table";
import { useDispatch, useSelector } from "react-redux";
import { GetCustomers } from "../../Actions";

export default function Dashboard() {

  const dispatch = useDispatch();
  const getCustomerData = useSelector(
    (state) => state.CustomerReducer.getCustomerData
  );
  const getCustomerLoading = useSelector(
    (state) => state.CustomerReducer.getCustomerLoading
  );


  //api call
  useEffect(() => {
    dispatch(GetCustomers());
  }, []);



//Table container
  return (
    <div className="container">
      <Table data={getCustomerData} spinning={getCustomerLoading} />
    </div>
  );
}
