import React from "react";
import Container from "../../utility/Container";
import Table from "../../components/Table";
import Pagination from "../../utility/Pagination";
import User from '../../api/User.json';
import Customer from '../../api/Customer.json';

const Analytics = () => {
  const header = [
    {
      name: "Name",
      feilds: "Name",
    },
    {
      name: "Email",
      feilds: "Email",
    },
    {
      name: "Mobile",
      feilds: "Mobile",
    },
    {
      name: "Category",
      feilds: "category",
    },
    {
      name: "Code",
      feilds: "code",
    },
    {
      name: "Status",
      feilds: "Status",
    },
  ];
  // const header = [
  //   {
  //     name: "Name",
  //     feilds: "Name",
  //   },
  //   {
  //     name: "Email",
  //     feilds: "Email",
  //   },
  //   {
  //     name: "Mobile",
  //     feilds: "Mobile",
  //   },
  //   {
  //     name: "Role",
  //     feilds: "role",
  //   },
  //   {
  //     name: "Customers",
  //     feilds: "Customers",
  //   },
  //   {
  //     name: "Investors",
  //     feilds: "Investors",
  //   },
  //   {
  //     name: "Status",
  //     feilds: "Status",
  //   },
  // ];
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
      </div>
      <div className="w-full grid-cols-1 gap-8 mt-8">
        <div className="bg-white p-10 rounded-5">
          <Table
            header={header}
            arraydata={Customer}
            // arraydata={User}
            bg="primary"
            color="white"
            border="primary"
          />
          <Pagination
            pageCount={5}
            onPageChange={handlePageClick}
            pageRangeDisplayed={6}
            forcePage={currentpage}
          />
        </div>
      </div>
    </Container>
  );
};

export default Analytics;
