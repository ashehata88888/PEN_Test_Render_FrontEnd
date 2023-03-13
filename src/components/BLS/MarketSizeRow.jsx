import React, { cloneElement, Component } from "react";
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
import { updateSupplier_id } from "../../store/index";

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
    openId: 0,
    userData: JSON.parse(this.props.uContext),
    id: 0,
    suppliers: [],
    productFamilies: [],
    itemGroups: [],
    supplierId: this.props.globalState.marketSize[0].supplier_id,
    selectedMarketSizeRow: 0,
    expanded: `panel0`,
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
    marketSize: {
      marketSizeRowID: this.props.idprop,
      supplier_id: 0,
      product_family_id: 0,
      item_group_id: 0,
      market_potential_id: 0,
      marketSizeRecords: [
        {
          marketSizeRecordsID: 0,
          egmed_consumption: 0,
          total_consumption: 0,
          competitor_id: 0,
          item_qty1: 0,
          item_status1: 0,
          item_qty2: 0,
          item_status2: 0,
          market_size_id: 0,
        },
      ]
    }
  };



  selectOpen = openId => {
    this.setState({ openId });
  };

  // marketSizeRowID: 0,
  // supplier_id: 0,
  // product_family_id: 0,
  // item_group_id: 0,
  // market_potential_id: 0,
  // marketSizeRecords: [
  //   {
  //     marketSizeRecordsID: 0,
  //     egmed_consumption: 0,
  //     total_consumption: 0,
  //     competitor_id: 0,
  //     item_qty1: 0,
  //     item_status1: 0,
  //     item_qty2: 0,
  //     item_status2: 0,
  //     market_size_id: 0,
  //   },
  // ],

  componentDidMount() {
    const BL = this.state.userData.bl1_id;
    const supllierID = this.state.supplierId;
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

        console.log(
          "useSelector Testing ",
          this.props.globalState.marketPotentials.user_id
        );
        this.setState({ suppliers: [...newData] });
      });
    };
    fetchData();
  }

  accorhandleChange = (panel) => (event, newExpanded) => {
    this.setState({ expanded: (newExpanded ? panel : true) })
    console.log("this.state.itemGroups",this.state.itemGroups)
    console.log("accorhandleChange",event.currentTarget.textContent)
    const index = this.state.itemGroups.findIndex((obj)=>{
      console.log("obj.item_group",obj)
      return obj.item_group == `${event.currentTarget.textContent}` ? obj.id : ""
    })
    console.log('IndexAccorHandelChange',index)
    console.log("testIndex",this.state.itemGroups[index].id)
  };

  //    fetchData();

  supplieronChangeHandler = (event, index) => {
    const BL = this.state.userData.bl1_id;
    const supKey = event.target.value;

    this.setState(prevState => ({
      marketSize: {
        ...prevState.marketSize,           // copy all other key-value pairs of food object
        supplier_id: event.target.value         // update value of specific key
      }
    }))


    // this.setState({ marketSize : marketSize.supplier_id = supKey });



    // console.log("supplier id test ",this.state.marketSize.supplier_id)


    // this.props.marketSizeData(this.state.marketSize)


    // // clone
    // let items = [...this.state.marketSize]
    // let targetItem = [items,this.state.marketSize[index].supplier_id]

    // // change
    // targetItem = event.target.value

    // set

    // this.setState({marketSize : targetItem})

    // let newelement = [{
    //   marketSizeRowID: 0,
    //   supplier_id: parseInt(event.target.value),
    //   product_family_id: 0,
    //   item_group_id: 0,
    //   market_potential_id: 0,
    //   marketSizeRecords: [
    //     {
    //       marketSizeRecordsID: 0,
    //       egmed_consumption: 0,
    //       total_consumption: 0,
    //       competitor_id: 0,
    //       item_qty1: 0,
    //       item_status1: 0,
    //       item_qty2: 0,
    //       item_status2: 0,
    //       market_size_id: 0,
    //     },
    //   ],
    // }];


    //  this.state.marketSize.map(

    //   (obj,inx) => (inx === this.props.idprop ? Object.assign(obj, { supplier_id : parseInt(event.target.value) }) : obj)
    // )


    // this.setState({
    //   marketSize: [...this.state.marketSize, newelement],
    // });


    //     this.setState(prevState => ({

    //       marketSize: prevState.marketSize.map(

    //     (obj,inx) => (inx === this.props.idprop ? Object.assign(obj, { supplier_id : parseInt(event.target.value) }) : obj)
    //   )
    // }));

    // console.log("this.props.idprop ",this.props.idprop)
    // this.setState((prevState) => {
    //   return {
    //     marketSize: [...prevState.marketSize,prevState.marketSize[index].supplier_id = parseInt(event.target.value)]
    //   };
    // });

    // console.log("test this.state.marketSize ", [...this.state.marketSize]);

    // this.props.dispatch(updateSupplier_id(event.target.value));

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
      console.log("pFresponse() was called");
    };
    const pFresponseGS = async () => {
      fetch(
        "http://localhost:7000/api/product_families/names/" +
        this.state.supplierId,
        {
          method: "GET",
          headers: new Headers({
            Authorization: "bearer " + this.state.userData.token,
            "Content-Type": "application/x-www-form-urlencoded",
          }),
        }
      ).then(async (pFresponse) => {
        const newPFData = await pFresponse.json();
        //    setProductFamily(newPFData);
        this.setState({ productFamilies: [...newPFData] });
      });
      console.log("pFresponseGS() was called");
    };

    this.state.supplierId == undefined ? pFresponse() : pFresponseGS();

    // (this.state.supplierId != undefined || this.state.supplierId != null) &&  pFresponseGS() ;

    const fetchCompetitors = async () => {
      console.log("BL is ......,", BL);
      console.log("supkey is ......,", supKey);

      // + BL +"/" + supKey
      // "http://localhost:7000/api/competitors/" + BL + "/" + supKey
      await fetch(`http://localhost:7000/api/competitors/${BL}/${supKey}`, {
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
    // this.setState({product_family_id : pFKey })
    console.log("product Family id from marketsize Row", pFKey);
    // setproductFamilyId(pFKey);
    // this.setState({ productFamilies: [...pFKey] });

    // if(this.state.marketSize.supplier_id != 0 &&
    //   this.state.marketSize.product_family_id != 0){
    this.setState(prevState => ({
      marketSize: {
        ...prevState.marketSize,           // copy all other key-value pairs of food object
        product_family_id: event.target.value         // update value of specific key
      }
    }))
    setTimeout(() => console.log("productFamily id test ", this.state.marketSize.product_family_id), 0)

    setTimeout(() => this.props.marketSizeData(this.state.marketSize), 0)
    // }



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
        newiGData.length > 1 ? this.setState({ expanded: "" }) : this.setState({ expanded: "panel0" })
        this.setState({ itemGroups: [...newiGData] });
      });
    };
    iGresponse();
  };


  itemGrouponChangeHandler = (event , index) => {
    console.log("itemGrouponChangeHandler",event.target.value)
  }


  onClickAccordion = (event , index) => {
    console.log("onClickAccordion",event.target)
  }

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
      this.supplieronChangeHandler(event, index);
      let element = document.getElementById(`${index}`);
      element?.setAttribute("style", "background-color : none;");

      // let dataP = [...this.state.suppliers];
      // dataP[index]["supplier"] = event.target.value;
    } else if (event.target.name === "productFamily") {
      this.ProductFamilyOnCahngeHandler(event);
      let element = document.getElementById(`${index}PF`);
      element?.setAttribute("style", "background-color : none;");
      let dataP = [...this.state.productFamilies];
      dataP[index]["productFamily"] = event.target.value;
      //   setVal(dataP);
    } else if (event.target.name === "itemGroup") {
      this.itemGrouponChangeHandler(event,index)
      console.log("onChange Item Group",event.target.value)


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

  deleteMarketRow = (e, idprop) => {
    e.preventDefault();
    this.setState({ selectedMarketSizeRow: idprop });
    console.log(" Deletbtn value", idprop);

    localStorage.setItem("selectedMarketSizeRow", JSON.stringify(idprop));
  };

  render() {
    console.log("suppliers from MarketSizeRow", this.state.suppliers);

    return (
      <div
        idprop={this.state.id}
        style={{
          store: JSON.parse(this.props.uContext),
          marginTop: "60px",
          zIndex: "500",
          height: "1fr",
          overflowY: "auto",
          border: "1px solid #ebe5e5 ",
          borderRadius: "5px",
          width: "80%",
        }}
      >
        <div> Testing idprop Supplier Id is :{this.props.idprop}</div>

        <div className={hTabs.productBox}>
          <label className={hTabs.minLable}>Supplier</label>
          <select
            name="supplier"
            //   value={data.supplier}
            // value={}
            className={
              // errSupplier
              //   ? hTabs.dropDownPErr
              //   :
              hTabs.productBoxSelect
            }
            //   id={index}
            onChange={(event) =>
              this.handleFormChangeProductCall(event, this.props.idprop)
            }
          // onSelected ={(event) => this.handleFormChangeProductCall(event, 0)}
          //   ref={eSupplierRef}
          >
            <option value="0">Select Supplier</option>
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
            onClick={
              this.state.suppliers.length === 1
                ? (event) => this.handleFormChangeProductCall(event, 0)
                : ""
            }
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

        <span style={{ visiblity: "hidden" }}>
          {/* className={hTabs.deleteFamilyBtn} */}
          <button
            className={hTabs.deleteFamilyBtn}
            onClick={(e) => this.deleteMarketRow(e, this.props.idprop)}
          >
            -
          </button>
        </span>
        <div className={hTabs.accordionContainer}>
          {this.state.itemGroups.map((userObj, index) => {
            return (
              <Accordion
                key={index}
                expanded={this.props.expander ? this.state.expanded === `panel${index}` :
                  this.state.itemGroups.length == 1 ? this.state.expanded === `panel${index}`
                    : this.state.expanded === `panel${index}`}
                onChange={this.accorhandleChange(`panel${index}`)}
                onClick={(event)=>this.onClickAccordion(event,index)}

              //     accordionId={index}
              //  open={this.state.openId}
              //   handleClick={this.selectOpen}

              >
                <AccordionSummary aria-controls="panel1d-content">
                  <Typography style={{ color: "black" }} variant="h5">
                    {userObj.item_group}
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
            );
          })}
        </div>
      </div>
    );
  }
}

export default withRouter(MarketSizeRow);
