import React,{useEffect} from "react";
import { forwardRef } from "react";
import Avatar from "@material-ui/core/Avatar";
import MaterialTable from "material-table";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import CancelIcon from "@material-ui/icons/Cancel";
import { Spin } from "antd";
import { withStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import {Link} from 'react-router-dom'

let defaultData=[]
const AntSwitch = withStyles((theme) => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: "flex",
  },
  switchBase: {
    padding: 2,
    color: theme.palette.grey[500],
    "&$checked": {
      transform: "translateX(12px)",
      color: theme.palette.common.white,
      "& + $track": {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: "none",
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
}))(Switch);

const tableIcons = {
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
};

export default function Table({ data, spinning }) {

      useEffect(()=>{
       if(data.length){
           data.map(d=>defaultData.push({id: d?.id , checked:false}))
       }
      },[data])


  var columns = [
    { title: "id", field: "id", hidden: true },
    {
      title: "Name",
      field: "firstname",
      render: (rowData) => (
        <Link to={"/customer/"+rowData.id}><span style={{ display: "flex", alignItems: "center" }} >
          <Avatar style={{ marginRight: 10 }} src={rowData.avatarUrl} />
          {rowData.firstname + " " + rowData.lastname}
        </span></Link>
      ),
    },
    { title: "Email", field: "email" , render:(rowData) => (<Link to={"/customer/"+rowData.id}>{rowData.email}</Link>) },
    { title: "Phone", field: "phone", render:(rowData) => (<Link to={"/customer/"+rowData.id}>{rowData.phone}</Link>) },
    {
      title: "Premium",
      render: (rowData) =>
      <Link to={"/customer/"+rowData.id}>
        {rowData.hasPremium ? (
          <DoneAllIcon style={{ color: "green" }} />
        ) : (
          <CancelIcon style={{ color: "red" }} />
        )}
        </Link>
    },
    {
      title: "Min/Max bid",
      render: (rowData) => <AntSwitch  onChange={(e)=>handleToggle(rowData)} />,
    },
    {
      title: "bid",
      field: "bids.amount",
      customSort: (a, b) => Math.max.apply(
        Math,
        a.bids.map(function (o) {
          return o.amount;
        })
      ) -  Math.max.apply(
        Math,
        b.bids.map(function (o) {
          return o.amount;
        })
      ),
      render: (rowData) => (
        <Link to={"/customer/"+rowData.id}><p id={rowData.id}>
          {rowData?.bids.length &&
            Math.max.apply(
              Math,
              rowData?.bids.map(function (o) {
                return o.amount;
              })
            )}
        </p></Link>
      ),
    },
  ];

  const handleToggle =(data)=>{
    let getChecked = defaultData.find(d=> d.id == data.id)
    getChecked["checked"] = !getChecked["checked"]
    defaultData.find(d=> d.id == data.id).checked= getChecked["checked"]
      if(getChecked.checked === true){
          document.getElementById(data?.id).innerHTML = Math.min.apply(
            Math,
            data?.bids.map(function (o) {
              return o.amount;
            })
          )
      }
      else{
        document.getElementById(data?.id).innerHTML = Math.max.apply(
            Math,
            data?.bids.map(function (o) {
              return o.amount;
            })
          )
      }
  }

  return (
    <Spin size="large" spinning={spinning}>
        {console.log(defaultData,'selectedBids')}
      <MaterialTable
        title="Customers"
        columns={columns}
        data={data}
        icons={tableIcons}
        options={{
          search: false,
          sorting: true
        }}
      />
    </Spin>
  );
}
