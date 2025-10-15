import React from "react";
import Container from "../../utility/Container";
import Chart from "../../components/Chart";

const Dashboard = () => {
 const months = [
   { month: "Jan", value: 5000 },
   { month: "Feb", value: 7000 },
   { month: "Mar", value: 7000 },
   { month: "Apr", value: 7600 },
   { month: "May", value: 3000 },
   { month: "Jun", value: 5000 },
   { month: "Jul", value: 9300 },
   { month: "Aug", value: 5800 },
   { month: "Sep", value: 9100 },
   { month: "Oct", value: 7800 },
   { month: "Nov", value: 4500 },
   { month: "Dec", value: 6100 },
 ];

  return (
    <Container>
      <div className="grid-cols-3 gap-12">
        <div className="pt-10 pb-30 w-full bg-white rounded-5 relative overflow-hidden">
          <div className="px-15">
            <h2 className="title-text text-primary">Enterprise Dashboard</h2>
            <p className="mini-text text-gray">High Level Capital</p>
            <h3 className="large-text text-primary font-600">89908896</h3>
            <div className="absolute right-0 bottom-0">
              <img
                src="https://verona.primereact.org/demo/images/dashboard/interactions.svg"
                alt="Image"
                style={{ height: "50px", display: "flex" }}
              />
            </div>
          </div>
        </div>
        <div className="pt-10 pb-30 w-full bg-white rounded-5 relative overflow-hidden">
          <div className="px-15">
            <h2 className="title-text text-info">Intermediate Dashboard</h2>
            <p className="mini-text text-gray">Mid Level Capital</p>
            <h3 className="large-text text-info font-600">8790689</h3>
            <div className="absolute right-0 bottom-0">
              <img
                src="https://verona.primereact.org/demo/images/dashboard/users.svg"
                alt="Image"
                style={{ height: "50px", display: "flex" }}
              />
            </div>
          </div>
        </div>
        <div className="pt-10 pb-30 w-full bg-white rounded-5 relative overflow-hidden">
          <div className="px-15">
            <h2 className="title-text text-success">Basic Dashboard</h2>
            <p className="mini-text text-gray">Low Level Capital</p>
            <h3 className="large-text text-success font-600">543534543</h3>
            <div className="absolute right-0 bottom-0">
              <img
                src="https://verona.primereact.org/demo/images/dashboard/rate.svg"
                alt="Image"
                style={{ height: "50px", display: "flex" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-start gap-8 w-full mt-10">
        <div className="w-65">
          <div className="w-full bg-white rounded-5 flex items-center justify-center py-20">
            <div className="w-90">
              <Chart
                type="bar"
                arraydata={months}
                max={10000}
                col={months?.length}
                chartheight={280}
              />
            </div>
          </div>
        </div>
        <div className="w-35 grid-cols-1 gap-10">
          <div className="bg-white rounded-5 p-12">
            <Chart label="Primary" max={780} value={690} color="info" />
          </div>
          <div className="bg-white rounded-5 p-12">
            <Chart label="Secondary" value={90} color="primary" />
          </div>
          <div className="bg-white rounded-5 p-12">
            <Chart label="Tertiary" value={90} color="primary" />
          </div>
          <div className="grid-cols-2 gap-8">
            <div className="bg-white rounded-5 flex items-center justify-center py-23">
              <Chart
                type="doughnut"
                label="Progress"
                value={65}
                color="info"
                size={100}
              />
            </div>
            <div className="bg-white rounded-5 flex items-center justify-center py-23">
              <Chart
                type="doughnut"
                label="Progress"
                value={65}
                color="info"
                size={100}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white rounded-5 flex items-center justify-center py-40 mt-8">
        <div className="w-90">
          <Chart
            type="bar"
            arraydata={months}
            max={10000}
            col={months?.length}
            chartheight={300}
          />
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;
