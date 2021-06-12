import React from "react";
import { forwardRef } from "react";
import Avatar from '@material-ui/core/Avatar';
import MaterialTable from "material-table";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";

const tableIcons = {
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
};

export default function Table({ data }) {
  var columns = [
    { title: "id", field: "id", hidden: true },
    {
      title: "Name",
      render: (rowData) => (
        <span style={{display: 'flex', alignItems: 'center'}}>
             <Avatar style={{marginRight:10}} src={rowData.avatarUrl} />
          {rowData.firstName}
        </span>
      ),
    },
    { title: "Email", field: "email" },
    { title: "Phone", field: "phone" },
  ];

  return (
      <MaterialTable columns={columns} data={data} icons={tableIcons} options={{
        showTitle: false,
        search: false
   }}/>
  );
}
