import React from "react";
import Container from "../../utility/Container";
import Table from "../../components/Table";

const Management = () => {
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
      description: "view",
      status: "how",
      actions: "Actions",
    },
  ];
  return (
    <Container>
      <div className="py-60 w-full bg-white rounded-5"></div>
      <div className="flex items-start gap-8 mt-8 relative">
        <div className="w-20 grid-cols-1 gap-8 sticky top-0 left-0">
          <div className="py-50 w-full bg-white rounded-5"></div>
          <div className="py-50 w-full bg-white rounded-5"></div>
          <div className="py-50 w-full bg-white rounded-5"></div>
        </div>
        <div className="w-80">
          <div className="py-18 w-70 bg-white rounded-5"></div>
          <Table
            header={header}
            arraydata={column}
            bg="primary"
            color="white"
            border="forth"
          />
          <div className="grid-cols-4 gap-12 mt-8">
            <div className=""></div>
            <div className=""></div>
            <div className=""></div>
            <div className="py-20 w-full bg-white rounded-5"></div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Management;
