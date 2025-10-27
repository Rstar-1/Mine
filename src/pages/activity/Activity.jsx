import React from "react";
import Container from "../../utility/Container";
import Chart from "../../components/Chart";
import Feilds from "../../utility/Feilds";

const Activity = () => {
  const months = [
    { title: "Jan", value: 5000 },
    { title: "Feb", value: 7000 },
    { title: "Mar", value: 7000 },
    { title: "Apr", value: 7600 },
    { title: "May", value: 3000 },
    { title: "Jun", value: 5000 },
    { title: "Jul", value: 9300 },
    { title: "Aug", value: 5800 },
    { title: "Sep", value: 9100 },
    { title: "Oct", value: 7800 },
    { title: "Nov", value: 4500 },
    { title: "Dec", value: 6100 },
  ];
  const days = [
    { title: "1", value: 5000 },
    { title: "2", value: 7000 },
    { title: "3", value: 7000 },
    { title: "4", value: 7600 },
    { title: "5", value: 3000 },
    { title: "6", value: 5000 },
    { title: "7", value: 9300 },
    { title: "8", value: 5800 },
    { title: "9", value: 9100 },
    { title: "10", value: 7800 },
    { title: "11", value: 5000 },
    { title: "12", value: 7000 },
    { title: "13", value: 7000 },
    { title: "14", value: 7600 },
    { title: "15", value: 3000 },
    { title: "16", value: 5000 },
    { title: "17", value: 9300 },
    { title: "18", value: 5800 },
    { title: "19", value: 9100 },
    { title: "20", value: 7800 },
    { title: "21", value: 4500 },
    { title: "22", value: 6100 },
    { title: "23", value: 8100 },
    { title: "24", value: 3100 },
    { title: "25", value: 6100 },
    { title: "26", value: 6700 },
    { title: "27", value: 2100 },
    { title: "28", value: 4400 },
    { title: "29", value: 2820 },
    { title: "30", value: 6100 },
  ];
  const ProgressData = [
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
      status: "success",
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
      status: "failed",
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
      status: "success",
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
      status: "failed",
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
      status: "pending",
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
      status: "pending",
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
      status: "pending",
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
      status: "pending",
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
      status: "failed",
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
      status: "failed",
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
      status: "success",
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
      status: "failed",
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
      status: "failed",
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
      status: "pending",
      amount: "2000",
    },
  ];
  const options = ["All", "Active", "Inactive"];
  const [status, setStatus] = React.useState(false);
  const [name, setName] = React.useState('');

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
                arraydata={months}
                max={10000}
                col={months?.length}
                chartheight={280}
              />
            </div>
          </div>
          <div className="bg-white p-10 rounded-5">
            <Chart type="heatmap" col={20} arraydata={ProgressData} />
          </div>
        </div>
        <div className="w-35 grid-cols-1 gap-7">
          <div className="bg-white rounded-5 p-12">
            <Chart label="Management" value={90} color="primary" />
          </div>
          <div className="bg-white rounded-5 p-12">
            <Chart label="Management" value={90} color="warning" />
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
          <div className="bg-white grid-cols-1 rounded-5">
            {[
              { name: "Stocks", value: "90%", color: "success" },
              { name: "Stocks", value: "90%", color: "success" },
              { name: "Stocks", value: "90%", color: "success" },
              { name: "Sensex", value: "90%", color: "danger" },
              { name: "Stocks", value: "90%", color: "danger" },
              { name: "Stocks", value: "90%", color: "danger" },
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
      </div>
    </Container>
  );
};

export default Activity;
