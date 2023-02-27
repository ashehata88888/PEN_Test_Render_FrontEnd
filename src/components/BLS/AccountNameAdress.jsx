import React, { useState, useContext, useEffect, useRef } from "react";

import { UserContext } from "./Home";

import hTabs from "./hTabs.module.css";

export default function AccountNameAdress() {
  const [accountName, setAccountName] = useState([]);
  const [accountArea, setAccountArea] = useState("");

  const [accountType, setAccountType] = useState(0);
  const [accountId, setAccountId] = useState(0);

  const [alret, setAlert] = useState("");
  const [errActivitySelectType, setErrActivitySelectType] = useState(false);
  const [activityTypeValue, setActivityTypeValue] = useState(0);
  const [errAccountType, setErrAccountType] = useState(false);
  const [errAccountName, setErrAccountName] = useState(false);

  const [accountNameValue, setAccountNameValue] = useState("");
  const [clickedAccountName, setclickedAccountName] = useState("");
  const [mainIndex, setMainIndex] = useState(0);

  const accountNameRef = useRef(null);

  const userData = JSON.parse(useContext(UserContext));
  const key = userData.id;
  console.log(key);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://localhost:7000/api/accounts/names/" + key,
        {
          method: "GET",
          headers: new Headers({
            Authorization: "bearer " + userData.token,
            "Content-Type": "application/x-www-form-urlencoded",
          }),
        }
      );
      const newData = await response.json();
      setAccountName(newData);
      console.log(newData);
    };
    fetchData();
  }, []);

  const onClickElementFun = (e, objAccountName, i, mapIndex, mainIndex) => {
    e.preventDefault();
    onSearch(objAccountName);

    const index = accountName.findIndex((obj) => obj.id == i);

    console.log("index of maping the :", index);

    // console.log('index of Map is ', mapIndex)
    // console.log("index of account name itself : ",i)
    // console.log("main Index is ",mainIndex)

    // console.log("account name index for area Test ", accountName[3].id)

    setAccountArea(accountName[index].account_area);

    setAccountId(accountName[index].id);
    setErrAccountName(false);
  };

  const onSearch = (searchTerm) => {
    setAccountNameValue(searchTerm);
    // setclickedAccountName(searchTerm)
    // our api to fetch the search result
    console.log("search ", searchTerm);

    // const index = accountName.findIndex(async (obj) => await obj.account_name == accountNameValue)

    // console.log('index is ', index)

    // setAccountArea(accountName[index].account_area)
  };

  const accountNameInputOnChange = (event) => {
    setAccountNameValue(event.target.value);

    // const index = accountName.findIndex((object) => {
    //   // console.log("account name from inside findIndex Method is :",accountNameValue)
    //   return object.id == accountNameValue

    //   // selectedValue
    // })

    // const normalIndex = (e) => e == 8;
  };

  const accountNamehandleChange = (event) => {
    // (event.target.value)
    // setAccountArea = (event){
    const selectedValue = event.target.value;
    setAccountId(event.target.value);
    setErrAccountName(false);

    //
    //
    //
    //
    // }
    // const arr = [{id: 'a'}, {id: 'b'}, {id: 'c'}];

    const index = accountName.findIndex((object) => {
      // console.log("account name from inside findIndex Method is :",accountNameValue)
      return object.id == accountNameValue;

      // selectedValue
    });

    console.log("index is ", index);

    setAccountArea(accountName[index].account_area);
  };

  console.log(accountArea);

  const activityTypehandleChange = (event) => {
    const value = event.target.value;
    setActivityTypeValue(value);
    setErrActivitySelectType(false);

    setActivityType(value);
    console.log(value);
  };

  const accountNameOnClick = (event) => {};

  const accountTypeOnChange = (event) => {
    setAccountType(event.target.value);
    setErrAccountType(false);
  };
  return (
    <>
      <br />

      <label className={`${hTabs.labels} `}>Account Type</label>
      <select
        // {...displayAccountsData === hTabs.displayActivityData ? "required" : console.log(displayAccountsData) }
        // ref={account_type_id}
        className={`${
          errAccountType ? hTabs.dropDownErr : hTabs.dropDownList
        } `}
        id="activityType"
        name="activityType"
        onChange={accountTypeOnChange}
      >
        <option value="0" disabled selected hidden>
          Select Type
        </option>
        <option value="1">Hospitals</option>
        <option value="2">Medical Shops</option>
        <option value="3">Pharmacy Chains</option>
        <option value="4">Pharmacy Individual</option>
        <option value="5">Private Customer</option>
        <option value="6">Distributor</option>
      </select>

      <label className={`${hTabs.labels}`}>Account Name</label>

      <input
        className={`${
          errAccountName ? hTabs.dropDownErr : hTabs.inputNameList
        } `}
        type="text"
        value={accountNameValue}
        onChange={accountNameInputOnChange}
        onClick={accountNameOnClick}
        ref={accountNameRef}
      />

      <div className={`${hTabs.accountNamesdropDownList}`}>
        {accountName
          .filter((item, i) => {
            const searchTerm = accountNameValue.toLowerCase();

            const fullName = item.account_name.toLowerCase();

            return (
              searchTerm &&
              fullName.startsWith(searchTerm) &&
              fullName !== searchTerm
            );
          })
          // .slice(0, 15)
          .map((obj, index) => {
            return (
              <div
                onClick={(e) =>
                  onClickElementFun(
                    e,
                    obj.account_name,
                    obj.id,
                    index,
                    mainIndex
                  )
                }
                className={hTabs.dropdownDiv}
                key={obj.id}
              >
                {obj.account_name}
              </div>
            );
          })}
      </div>

      <label className={`${hTabs.adressLabel} `}>
        Account Address / Branch
      </label>
      <input
        disabled
        className={`${hTabs.adress_text_Box}`}
        type="text"
        value={accountArea}
      ></input>
      <br />
    </>
  );
}