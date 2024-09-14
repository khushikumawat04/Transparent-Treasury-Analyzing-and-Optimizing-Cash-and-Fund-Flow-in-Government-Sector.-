import React, { useState } from "react";
import Chart from "react-apexcharts";
import "./graph.css";

const Graph = ({ buttonId }) => {
  const [state] = useState({
    options: {
      colors: ["#0a3543"],
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [2018, 2019, 2020, 2021, 2022, 2023],
      },
    },
    series: [
      {
        name: "series-1",
        data: [1626.17, 1843.98, 2145.96, 2429.52, 2766.43, 3104.39],
      },
    ],
  });

  const [state2] = useState({
    options: {
      colors: ["#0a3543"],
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [2019, 2020, 2021, 2022, 2023],
      },
    },
    series: [
      {
        name: "series-1",
        data: [1649581.91, 1635909.13, 2169905.35, 2204421.73, 2632280.97],
      },
    ],
  });

  const [state3] = useState({
    options: {
      colors: ["#0a3543"],
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [2019, 2020, 2021, 2022, 2023],
      },
    },
    series: [
      {
        name: "series-1",
        data: [3.74, -6.6, 8.68, 6.3, 6.06],
      },
    ],
  });

  const [state4] = useState({
    options: {
      colors: ["#0a3543"],
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [2018, 2019, 2020, 2021, 2022],
      },
    },
    series: [
      {
        name: "series-1",
        data: [1383112050, 1396387127, 1407563842, 1417173173, 1428627663],
      },
    ],
  });

  const [state5] = useState({
    options: {
      colors: ["#0a3543"],
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [2018, 2019, 2020, 2021, 2022],
      },
    },
    series: [
      {
        name: "series-1",
        data: [
          244221, 27863490000000, 30422300000000, 34832360000000,
          39449090000000,
        ],
      },
    ],
  });

  // Render different graphs based on the buttonId
  // You can use a switch statement or any other logic to determine which graph to display

  // Example code:
  let graphContent = null;

  switch (buttonId) {
    case 1:
      graphContent = (
        <div className="data-cards">
          <div className="center-data">
            <div className="data-cards-text">
              <h2>National Dept</h2>
              <p>
                "The term national debt refers to the outstanding financial
                obligation of a country. The national debt is what the federal
                government owes creditors. Just like personal debt, it is made
                up of different types of debt, such as debt held by the public
                and federal government trust funds. It represents the sum of
                past annual budget deficits. U.S. national debt totaled $31.46
                trillion in May 2023",
              </p>
            </div>
          <div className="data-cards-img">
              <Chart
                options={state.options}
                series={state.series}
                type="bar"
                height="200px"
                width="100%"
              />
              </div>
          </div>
        </div>
      );

      break;
    case 2:
      graphContent = (
        <div div className="data-cards">
          <div className="center-data">
            <div className="data-cards-text">
              <h2>Tax Revenue (in Crore)</h2>
              <p>
                Tax revenue is defined as the revenues collected from taxes on
                income and profits, social security contributions, taxes levied
                on goods and services, payroll taxes, taxes on the ownership and
                transfer of property, and other taxes.",
              </p>
            </div>
            <div className="data-cards-img">
              <Chart
                options={state2.options}
                series={state2.series}
                type="bar"
                height="200px"
                width="100%"
              />
          </div>
        </div>
        </div>
      );
      break;
    case 3:
      graphContent = (
        <div div className="data-cards">
          <div className="center-data">
            <div className="data-cards-text">
              <h2>Gross Domestic Product</h2>
              <p>
                description: "A country's Gross Domestic Product, or GDP, is the
                total monetary or market value of all the goods and services
                produced within that country's borders during a specified period
                of time.GDP is usually calculated annually, but it can be
                calculated per quarter as well.The US government, for example,
                releases both a GDP estimate for each quarter as well as the
                entire year.Because GDP provides a broad measurement of a
                country's production, it is often thought of as being a
                scorecard for a country's economic health.",
              </p>
          </div>
          <div className="data-cards-img">
            
              <Chart
                options={state3.options}
                series={state3.series}
                type="bar"
                height="200px"
                width="100%"
              />
            </div>
          </div>
        </div>
      );
      break;
    case 4:
      graphContent = (
        <div div className="data-cards">
          <div className="center-data">
            <div className="data-cards-text">
              <h2>Total Population</h2>
              <p>
                "India's total population was 1.42 billion in January 2023. Data
                shows that India's population increased by 9.7 million (+0.7
                percent) between 2022 and 2023. 48.4 percent of India's
                population is female, while 51.6 percent of the population is
                male.",
              </p>
            
          </div>
          <div className="data-cards-img">
            
              <Chart
                options={state4.options}
                series={state4.series}
                type="bar"
                height="200px"
                width="100%"
                className="col-42"
              />
            </div>
          </div>
        </div>
      );
      break;

    default:
      graphContent = (
        <div className="data-cards">
          <div className="center-data">
            <div className="data-cards-text">
              <h2>Budget (in Crore)</h2>
              <p>The Union Budget of India, also referred to as the Annual Financial Statement in Article 112 of the Constitution of India,[1] is the annual budget of the Republic of India set by Ministry of Finance for the following financial year, with the revenues to be gathered by Department of Revenue to identify planned government spending and expected government revenue and the expenditures gathered by Department of Expenditure of the public sector, to forecast economic conditions in compliance with government policy.</p>
          </div>
          <div className="data-cards-img">
              <Chart
                options={state5.options}
                series={state5.series}
                type="bar"
                height="200px"
                width="100%"
              />
            </div>
          </div>
        </div>
      );
  }

  return <div>{graphContent}</div>;
};

export default Graph;
