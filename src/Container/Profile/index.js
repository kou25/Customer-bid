import React from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetCustomerProfile } from "../../Actions";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import { Progress } from 'antd';
import VanillaTilt from 'vanilla-tilt';
export default function Profile() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const getCustomerProfileData = useSelector(
    (state) => state.CustomerReducer.getCustomerProfileData
  );

  React.useEffect(() => {
    dispatch(GetCustomerProfile(id));
  }, [id]);

  React.useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".card"), {
        max: 25,
        speed:400,
        glare: true,
        "max-glare": 1
    });
  }, [getCustomerProfileData]);

  return (
    <>
      <div className="glass">
        <div class="dashboard">
          <div class="user">
            <img src={getCustomerProfileData.avatarUrl} alt="" />
            <h3>
              {getCustomerProfileData.firstname +
                " " +
                getCustomerProfileData.lastname}
            </h3>
          </div>
          <div class="links">
            <div class="link">
              <PhoneIcon />
              <h2>{getCustomerProfileData.phone}</h2>
            </div>
            <div class="link">
              <EmailIcon />
              <h2>{getCustomerProfileData.email}</h2>
            </div>
          </div>
        </div>
        <div class="bids">
          <div class="status">
            <h1>Car Bids</h1>
          </div>
          <div class="cards">
            {console.log(
              getCustomerProfileData?.bids,
              "getCustomerProfileData"
            )}
            {getCustomerProfileData?.bids &&
              getCustomerProfileData?.bids.map((data) => (
                <div class="card">
                    <div class="card-desc">
                  <div class="card-info">
                    <h2>{data?.carTitle.toUpperCase()}</h2>
                  </div>
                  <h2 class="percentage">{data?.amount}</h2>
                  </div>
                  <div style={{display: 'block'}}>
                  <Progress percent={((data?.amount / 300000)*100).toFixed(1) } size="small" status="active" />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div class="circle1"></div>
      <div class="circle2"></div>
    </>
  );
}
