import React, { Component } from "react";
import hTabs from "./hTabs.module.css";
import { withRouter } from "../Table/withRouter";

import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

// import { Hidden } from "@mui/material";
// import PreLoader3 from "../Loading/PreLoader3";
import CheckCompetitor from "./ReusableComponents/CheckCompetitor";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: "0.5",
  },
  "&:before": {
    display: "none",
  },
}));

// {<ArrowForwardIosSharpIcon  />}

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary expandIcon="" {...props} />
))(({ theme }) => ({
  minHeight: "20px",
  height: "40px",
  marginTop: "0px",
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

class MarketSizeRow extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    userData: JSON.parse(this.props.uContext),
    suppliers: [],
    productFamilies: [],
    itemGroups: [],
    supplierId: 0,
    productFamilyId: 0,
    competitors: [
      // { id: 1, name: "EGMED" },
      // { id: 2, name: "Okla" },
      // { id: 3, name: "Mokla" },
      // { id: 4, name: "EGMED" },
      // { id: 5, name: "Okla" },
      // { id: 6, name: "Mokla" },
      // { id: 7, name: "EGMED" },
      // { id: 8, name: "Okla" },
      // { id: 9, name: "Mokla" },
    ],
  };

  componentDidMount() {
    const BL = this.state.userData.bl1_id;
    const supllierID = this.state.supplierId
    const fetchData = async () => {
      await fetch("http://localhost:7000/api/suppliers/names/" + BL, {
        method: "GET",
        headers: new Headers({
          Authorization: "bearer " + this.state.userData.token,
          "Content-Type": "application/x-www-form-urlencoded",
        }),
      }).then(async (response) => {
        const newData = await response.json();
        //    setSupplierName(newData);
        console.log("supplier data inside fetch method", [...newData]);
        this.setState({ suppliers: [...newData] });
      });
    };
    fetchData();

 
  
  }



  //    fetchData();

  supplieronCahngeHandler = (event, _index) => {
    const BL = this.state.userData.bl1_id;
    const supKey = event.target.value;
    this.setState({ supplierId: supKey });
    const pFresponse = async () => {
      fetch("http://localhost:7000/api/product_families/names/" + supKey, {
        method: "GET",
        headers: new Headers({
          Authorization: "bearer " + this.state.userData.token,
          "Content-Type": "application/x-www-form-urlencoded",
        }),
      }).then(async (pFresponse) => {
        const newPFData = await pFresponse.json();
        //    setProductFamily(newPFData);
        this.setState({ productFamilies: [...newPFData] });
      });
    };
    pFresponse();

    const fetchCompetitors = async () => {
      // + BL +"/" + supKey
      await fetch("http://localhost:7000/api/competitors/" + BL +"/" + supKey  , {
        method: "GET",
        headers: new Headers({
          Authorization: "bearer " + this.state.userData.token,
          "Content-Type": "application/x-www-form-urlencoded",
        }),
      }).then(async (response) => {
        const newData = await response.json();
        //    setSupplierName(newData);
        console.log("Competitors data inside fetch method", [...newData]);
        this.setState({ competitors: [...newData] });
      });
    };
    fetchCompetitors();


  };

  ProductFamilyOnCahngeHandler = (event, index) => {
    const pFKey = event.target.value;
    console.log("product Family id from marketsize Row", pFKey);
    // setproductFamilyId(pFKey);
    // this.setState({ productFamilies: [...pFKey] });
    const iGresponse = async () => {
      fetch("http://localhost:7000/api/item_groups/names/" + pFKey, {
        method: "GET",
        headers: new Headers({
          Authorization: "bearer " + this.state.userData.token,
          "Content-Type": "application/x-www-form-urlencoded",
        }),
      }).then(async (iGResponse) => {
        const newiGData = await iGResponse.json();
        console.log("item Group after fetching", [...newiGData]);
        //    setItemGroup(newiGData);
        this.setState({ itemGroups: [...newiGData] });
      });
    };
    iGresponse();
  };


  




  handleFormChangeProductCall = (event, index, indexC) => {
    //  document.getElementById(`${index}`).setAttribute("style", "background-color : none;")
    //  document.getElementById(`${index}PF`).setAttribute("style", "background-color : none;")
    //  document.getElementById(`${index}IG`).setAttribute("style", "background-color : none;")
    //  document.getElementById(`${index}CO`).setAttribute("style", "background-color : none;")
    //  document.getElementById(`${index}CS`).setAttribute("style", "background-color : none;")
    //  document.getElementById(`${index}CP`).setAttribute("style", "background-color : none;")
    //  document.getElementById(`${index}MN`).setAttribute("style", "background-color : none;")
    //  document.getElementById(`${index}A`).setAttribute("style", "background-color : none;")
    //  document.getElementById(`${index}S`).setAttribute("style", "background-color : none;")
    //  document.getElementById(`${index}P`).setAttribute("style", "background-color : none;")

    // // let elementC = document.getElementById(``)
    // element.setAttribute("style", "background-color : none;")
    if (event.target.name === "supplier") {
      this.supplieronCahngeHandler(event);
      let element = document.getElementById(`${index}`);
      element?.setAttribute("style", "background-color : none;");

      let dataP = [...this.state.suppliers];
      dataP[index]["supplier"] = event.target.value;
    } else if (event.target.name === "productFamily") {
      this.ProductFamilyOnCahngeHandler(event);
      let element = document.getElementById(`${index}PF`);
      element?.setAttribute("style", "background-color : none;");
      let dataP = [...this.state.productFamilies];
      dataP[index]["productFamily"] = event.target.value;
      //   setVal(dataP);
    } else if (event.target.name === "itemGroup") {
      let element = document.getElementById(`${index}IG`);
      element?.setAttribute("style", "background-color : none;");
      let dataP = [...this.state.itemGroups];
      dataP[index]["itemGroup"] = event.target.value;
      //   setVal(dataP);
    } else if (event.target.name === "itemName") {
      let element = document.getElementById(`${index}IN`);
      element?.setAttribute("style", "background-color : none;");
      let dataP = [...val];
      dataP[index]["itemName"] = event.target.value;
      setVal(dataP);
    } else if (event.target.name === "itemStock") {
      let element = document.getElementById(`${index}IS`);
      element?.setAttribute("style", "background-color : none;");
      let dataP = [...val];
      dataP[index]["itemStock"] = event.target.value;
      setVal(dataP);
    } else if (event.target.name === "callObjective") {
      let element = document.getElementById(`${index}CO`);
      element?.setAttribute("style", "background-color : none;");
      let dataP = [...val];
      dataP[index]["callObjective"] = event.target.value;
      setVal(dataP);
    } else if (event.target.name === "callStatus") {
      let element = document.getElementById(`${index}CS`);
      element?.setAttribute("style", "background-color : none;");

      let dataP = [...val];
      dataP[index]["callStatus"] = event.target.value;
      setVal(dataP);
    } else if (event.target.name === "contactPerson") {
      // let element =  document.getElementById(`${indexC}CP`)
      const divElement = elementCPRef.current;
      divElement?.setAttribute("style", "background-color : none;");
      // element.setAttribute("style", "background-color : none;")

      let dataC = [...val];
      dataC[index]["contData"][indexC]["contactPerson"] = event.target.value;
      setVal(dataC);
    } else if (event.target.name === "mobileNumber") {
      // let element =  document.getElementById(`${indexC}MN`)
      // element.setAttribute("style", "background-color : none;")

      const divElement = elementMNRef.current;
      divElement?.setAttribute("style", "background-color : none;");

      let dataC = [...val];
      dataC[index]["contData"][indexC]["mobileNumber"] = event.target.value;
      setVal(dataC);
    } else if (event.target.name === "authority") {
      // let element =  document.getElementById(`${indexC}A`)
      // element.setAttribute("style", "background-color : none;")

      const divElement = elementARef.current;
      divElement?.setAttribute("style", "background-color : none;");

      let dataC = [...val];
      dataC[index]["contData"][indexC]["authority"] = event.target.value;
      setVal(dataC);
    } else if (event.target.name === "speciality") {
      // let element =  document.getElementById(`${indexC}S`)
      // element.setAttribute("style", "background-color : none;")

      const divElement = elementSRef.current;
      divElement?.setAttribute("style", "background-color : none;");

      let dataC = [...val];
      dataC[index]["contData"][indexC]["speciality"] = event.target.value;
      setVal(dataC);
    } else if (event.target.name === "position") {
      // let element =  document.getElementById(`${indexC}P`)
      // element.setAttribute("style", "background-color : none;")

      const divElement = elementPRef.current;
      divElement?.setAttribute("style", "background-color : none;");

      let dataC = [...val];
      dataC[index]["contData"][indexC]["position"] = event.target.value;
      setVal(dataC);
    }
    if (event.target.value !== 0) {
      //   setAlert("");
      console.log("No Alert");
    }
  };

  render() {
    console.log("suppliers from MarketSizeRow", this.state.suppliers);
    return (
      <div
        style={{
          marginTop: "60px",
          zIndex: "500",
          height: "1fr",
          overflowY: "auto",
        }}
      >
        <div className={hTabs.productBox}>
          <label className={hTabs.minLable}>Supplier</label>
          <select
            name="supplier"
            //   value={data.supplier}

            className={
              // errSupplier
              //   ? hTabs.dropDownPErr
              //   :
              hTabs.productBoxSelect
            }
            //   id={index}
            onChange={(event) => this.handleFormChangeProductCall(event, 0)}
            //   ref={eSupplierRef}
          >
            <option value="0" hidden>
              Select Supplier
            </option>
            {this.state.suppliers &&
              this.state.suppliers.length > 0 &&
              this.state.suppliers.map((userObj, index) => (
                <option value={userObj.id} key={userObj.id}>
                  {userObj.supplier_name}
                </option>
              ))}
          </select>
        </div>

        <div className={hTabs.productBox}>
          <label className={hTabs.minLable}>Product Family</label>
          <select
            className={hTabs.productBoxSelect}
            name="productFamily"
            //   value={data.productFamily}
            onChange={(event) => this.handleFormChangeProductCall(event, 0)}
            // id={`${0}PF1`}
            //   ref={ePFRef}
          >
            <option value="0" hidden>
              Select Family
            </option>
            {this.state.productFamilies &&
              this.state.productFamilies.length > 0 &&
              this.state.productFamilies.map((userObj, index) => (
                <option value={userObj.id} key={userObj.id}>
                  {userObj.product_family}
                </option>
              ))}
          </select>
        </div>

        <span>
          {/* <button className={hTabs.addFamilyBtn}>
            +
          </button> */}
          <button class={hTabs.deleteFamilyBtn}>-</button>
        </span>
        <div className={hTabs.accordionContainer}>
          {this.state.itemGroups.map((userObj, index) => (
            <Accordion
            // expanded={expanded === `panel${index}`}
            // onChange={handleChange(`panel${index}`)}
            // className={displayAccordion}
            // id={hTabs.CallInfoAccordion}
            >
              <AccordionSummary aria-controls="panel1d-content">
                <Typography style={{ color: "black" }} variant="h5">
                  {userObj.item_group}
                  Call Information
                </Typography>
              </AccordionSummary>
              <AccordionDetails style={{ overflowY: "scroll" }}>
                {this.state.competitors.map((obj, inx) => (
                  <div className={hTabs.checkCompetitor} key={obj.id}>
                    <CheckCompetitor checkBoxTitle={obj.competitor_name} />
                  </div>
                ))}
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    );
  }
}

export default withRouter(MarketSizeRow);
