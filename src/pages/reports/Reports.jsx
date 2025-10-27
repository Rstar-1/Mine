import React from "react";
import Container from "../../utility/Container";
import Table from "../../components/Table";
import Pagination from "../../utility/Pagination";
import Chart from "../../components/Chart";

const Reports = () => {
  const header = [
    {
      name: "Title",
    },
    {
      name: "Status",
    },
    {
      name: "Description",
    },
    {
      name: "Actions",
    },
  ];
  const column = [
    {
      title: "Title",
      description: "Description",
      status: "Status",
      actions: "Actions",
    },
    {
      title: "Title",
      description: "New",
      status: "Status",
      actions: "why",
    },
    {
      title: "Title",
      description: "Description",
      status: "Status",
      actions: "Actions",
    },
    {
      title: "Title",
      description: "New",
      status: "Status",
      actions: "why",
    },
    {
      title: "Title",
      description: "Description",
      status: "Status",
      actions: "Actions",
    },
    {
      title: "Title",
      description: "New",
      status: "Status",
      actions: "why",
    },
    {
      title: "Title",
      description: "view",
      status: "how",
      actions: "Actions",
    },
    {
      title: "Title",
      description: "New",
      status: "Status",
      actions: "why",
    },
    {
      title: "Title",
      description: "view",
      status: "how",
      actions: "Actions",
    },
  ];
  const ProgressData = [
    {
      status: "pending",
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
  const [currentpage, setcurrentpage] = React.useState(0);
  const handlePageClick = (e) => {
    setcurrentpage(e.selected);
  };

  return (
    <Container>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-6">
          <div className="px-10 py-6 rounded-20 bg-white flex items-center gap-6">
            <p className="mini-text text-gray">Overall Search</p>
            <div>
              <svg
                viewBox="0 0 24 24"
                width="14"
                height="14"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className="flex text-danger cursor-pointer"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </div>
          </div>
          <div className="px-10 py-6 rounded-20 bg-white flex items-center gap-6">
            <p className="mini-text text-gray">Active</p>
            <div>
              <svg
                viewBox="0 0 24 24"
                width="14"
                height="14"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className="flex text-danger cursor-pointer"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </div>
          </div>
          <div className="px-10 py-6 rounded-20 bg-white flex items-center gap-6">
            <p className="mini-text text-gray">Description</p>
            <div>
              <svg
                viewBox="0 0 24 24"
                width="14"
                height="14"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className="flex text-danger cursor-pointer"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </div>
          </div>
        </div>
        <button className="border-0 bg-primary px-20 py-6 text-white rounded-5 small-text b-shadow cursor-pointer">
          Settings
        </button>
      </div>
      <div className="flex items-start gap-10 w-full mt-8">
        <div className="w-70 grid-cols-1 gap-8">
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
        </div>
        <div className="w-30 grid-cols-1 gap-8">
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
          <div className="bg-white p-10 rounded-5">
            <Chart type="heatmap" col={8} arraydata={ProgressData} />
          </div>
          <div className="bg-white grid-cols-1 rounded-5">
            {[
              { name: "NIFTY", value: "90%", color: "danger" },
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

export default Reports;
