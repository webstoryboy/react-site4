import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import PortCont from "../includes/PortCont";
import Title from "../layout/Title";
import Contact from "../layout/Contact";
//import axios from "axios";
import { useEffect, useState } from "react";

// function Portfolio() {
//   return (
//     <>
//       <Header />
//       <Contents>
//         <Title title={["Portfolio", "Site"]} />
//         <PortCont />
//         <Contact />
//       </Contents>
//       <Footer />
//     </>
//   );
// }

// class Portfolio extends React.Component {
//   state = {
//     ports: [],
//   };

//   getPorts = async () => {
//     const {
//       data: {
//         data: { ports },
//       },
//     } = await axios.get(
//       "https://webstoryboy.github.io/react5001/src/assets/json/portfolio.json"
//     );
//     //console.log(ports);
//     //console.log(ports.data.data.ports);
//     this.setState({ ports });
//   };

//   componentDidMount() {
//     this.getPorts();
//   }

//   render() {
//     const { ports } = this.state;

//     return (
//       <>
//         <Header />
//         <Contents>
//           <Title title={["Portfolio", "Site"]} />
//           <PortCont ports={ports} />
//           <Contact />
//         </Contents>
//         <Footer />
//       </>
//     );
//   }
// }

function Portfolio() {
  const [ports, setPorts] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(
      "https://webstoryboy.github.io/react5001/src/assets/json/portfolio.json",
      requestOptions
    )
      .then((response) => response.json())
      // .then((result) => {
      //   console.log(result.data.ports);
      // })
      .then((result) => setPorts(result.data.ports))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <Header />
      <Contents>
        <Title title={["Portfolio", "Site"]} />
        <PortCont ports={ports} />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
}

export default Portfolio;
