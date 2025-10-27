import React from "react";
import Container from "../../utility/Container";
import Table from "../../components/Table";
import Pagination from "../../utility/Pagination";
import Chart from "../../components/Chart";
import Feilds from "../../utility/Feilds";

const Investor = () => {
//   const header = [
//     {
//       name: "Title",
//     },
//     {
//       name: "Status",
//     },
//     {
//       name: "Description",
//     },
//     {
//       name: "Actions",
//     },
//   ];
//   const column = [
//     {
//       title: "Title",
//       description: "Description",
//       status: "Status",
//       actions: "Actions",
//     },
//     {
//       title: "Title",
//       description: "New",
//       status: "Status",
//       actions: "why",
//     },
//     {
//       title: "Title",
//       description: "Description",
//       status: "Status",
//       actions: "Actions",
//     },
//     {
//       title: "Title",
//       description: "New",
//       status: "Status",
//       actions: "why",
//     },
//     {
//       title: "Title",
//       description: "Description",
//       status: "Status",
//       actions: "Actions",
//     },
//     {
//       title: "Title",
//       description: "New",
//       status: "Status",
//       actions: "why",
//     },
//     {
//       title: "Title",
//       description: "view",
//       status: "how",
//       actions: "Actions",
//     },
//     {
//       title: "Title",
//       description: "New",
//       status: "Status",
//       actions: "why",
//     },
//     {
//       title: "Title",
//       description: "view",
//       status: "how",
//       actions: "Actions",
//     },
//   ];
  const days = [
    { title: "2014", value: 2000 },
    { title: "2015", value: 7000 },
    { title: "2016", value: 7600 },
    { title: "2017", value: 3000 },
    { title: "2018", value: 5000 },
    { title: "2019", value: 9300 },
    { title: "2020", value: 5800 },
    { title: "2021", value: 5000 },
    { title: "2022", value: 9300 },
    { title: "2023", value: 5800 },
    { title: "2024", value: 9100 },
    { title: "2025", value: 7800 },
  ];
  const ProgressData = [
    {
      status: "pending",
      amount: "2000",
    },
    {
      status: "pending",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "pending",
      amount: "2000",
    },
    {
      status: "pending",
      amount: "2000",
    },
    {
      status: "failed",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "failed",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "failed",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "pending",
      amount: "2000",
    },
    {
      status: "pending",
      amount: "2000",
    },
    {
      status: "failed",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "pending",
      amount: "2000",
    },
    {
      status: "pending",
      amount: "2000",
    },
    {
      status: "failed",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "failed",
      amount: "2000",
    },
    {
      status: "failed",
      amount: "2000",
    },
    {
      status: "pending",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "success",
      amount: "2000",
    },
    {
      status: "pending",
      amount: "2000",
    },
  ];
  const [currentpage, setcurrentpage] = React.useState(0);
  const handlePageClick = (e) => {
    setcurrentpage(e.selected);
  };
  const options = ["All", "Active", "Inactive"];
  const [status, setStatus] = React.useState(false);
  const [name, setName] = React.useState("");

  return (
    <Container>
      <div className="grid-cols-5 gap-8">
        <Feilds
          type="select"
          label=""
          value={status}
          onChange={setStatus}
          options={options}
        ></Feilds>
        <Feilds type="input" label="" value={name} onChange={setName}></Feilds>
      </div>
      {/* <div className="w-full grid-cols-1 gap-8">
        <div className="bg-white p-10 rounded-5">
          <Table
            header={header}
            arraydata={column}
            bg="forth"
            color="dark"
            border="forth"
          />
          <Pagination
            pageCount={5}
            onPageChange={handlePageClick}
            pageRangeDisplayed={6}
            forcePage={currentpage}
          />
        </div>
      </div> */}
      <div className="flex items-start gap-8 w-full mt-8">
        <div className="w-65 grid-cols-1 gap-8">
          <div className="w-full bg-white rounded-5">
            <div className="flex items-center bordb">
              <div className="w-60 pl-22">
                <h5 className="head-text font-600 text-gray">
                  Yearly Position
                </h5>
                <p className="mini-text text-gray mt-2">Only 1 Year Updates</p>
              </div>
              <div className="w-40 grid-cols-2">
                <div className="p-16 cursor-pointer bg-primary">
                  <p className="small-text text-white">Profit Gainer</p>
                  <h4 className="head-text text-white">43.8K</h4>
                </div>
                <div className="p-16 cursor-pointer">
                  <p className="small-text text-gray">Loss Taking</p>
                  <h4 className="head-text text-dark">24.3K</h4>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Chart
                type="bar"
                arraydata={days}
                max={10000}
                col={days?.length}
                chartheight={280}
              />
            </div>
          </div>
        </div>
        <div className="w-35 grid-cols-1 gap-8">
          <div className="bg-white p-10 rounded-5">
            <Chart type="heatmap" col={10} arraydata={ProgressData} />
          </div>
          <div className="bg-white grid-cols-1 rounded-5">
            {[
              { name: "Sensex", value: "90%", color: "danger" },
              { name: "NIFTY", value: "90%", color: "success" },
              { name: "Sensex", value: "90%", color: "success" },
              { name: "Sensex", value: "90%", color: "danger" },
              { name: "Sensex", value: "90%", color: "danger" },
            ].map((item, i) => (
              <div
                key={i}
                className="bordb p-12 flex items-center justify-between"
              >
                <p className="small-text text-dark font-500">{item.name}</p>
                <p className={`mini-text text-${item.color} font-600`}>
                  {item.color === "success" ? "▲" : "▼"}
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid-cols-3 gap-8 items-start mt-8">
        <div className="grid-cols-1 gap-6">
          <div className="bg-white grid-cols-1 rounded-5">
            {[
              { name: "Sensex", value: "90%", color: "danger" },
              { name: "Sensex", value: "90%", color: "danger" },
              { name: "NIFTY", value: "90%", color: "success" },
              { name: "NIFTY", value: "90%", color: "success" },
            ].map((item, i) => (
              <div
                key={i}
                className="bordb p-12 flex items-center justify-between"
              >
                <p className="small-text text-dark font-500">{item.name}</p>
                <p className={`mini-text text-${item.color} font-600`}>
                  {item.color === "success" ? "▲" : "▼"}
                  {item.value}
                </p>
              </div>
            ))}
            <div className="p-12 flex items-center justify-between bg-secondary">
              <p className="small-text text-dark font-500">Overall P&L</p>
              <p className="small-text text-primary font-500">▲2%</p>
            </div>
          </div>
        </div>
        <div className="grid-cols-1 gap-6">
          <div className="grid-cols-3 gap-6 bg-white rounded-5">
            <div className="py-12 text-center">
              <h2 className="title-text text-success">120 K</h2>
              <p className="mini-text text-gray">Total</p>
            </div>
            <div className="py-12 text-center bordl bordr">
              <h2 className="title-text text-warning">520 L</h2>
              <p className="mini-text text-gray">Inactive</p>
            </div>
            <div className="py-12 text-center">
              <h2 className="title-text text-success">192 CR</h2>
              <p className="mini-text text-gray">Active</p>
            </div>
          </div>
          <div className="bg-white rounded-5 p-12">
            <Chart label="Management" value={90} color="success" />
          </div>
          <div className="bg-white rounded-5 p-12">
            <Chart label="Management" value={90} color="warning" />
          </div>
        </div>
        <div className="grid-cols-1 gap-6">
          <div className="bg-white rounded-5 p-10">
            <p className="para-text text-gray font-500">Activity</p>
          </div>
          <div className="grid-cols-2 gap-8">
            <div className="bg-white rounded-5 flex items-center justify-center py-23">
              <Chart
                type="doughnut"
                label="Activity"
                value={65}
                color="primary"
                size={100}
              />
            </div>
            <div className="bg-white rounded-5 flex items-center justify-center py-23">
              <Chart
                type="doughnut"
                label="Response"
                value={65}
                color="primary"
                size={100}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Investor;
