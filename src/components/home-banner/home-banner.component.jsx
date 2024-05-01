import React from "react";
import bannerImg from "../../assets/img/home-banner.jpg";
import Button from "../button/button.component";
import { useNavigate } from "react-router-dom";

const HomeBanner = () => {
  const navigate = useNavigate();
  return (
    <div className="p-3 bg-primary1">
      <div className="container py-3">
        <h2 className="text-primary2 text-4xl">Little Lemon</h2>
        <p className="text-white text-2xl">Chicago</p>
        <div className="flex justify-between  mt-3">
          <div className="w-6/12 flex flex-col items-start justify-between">
            <p className="text-white text-sm md:text-lg">
              Home Drinks Food Book & Events Shop Little Lemon is a
              Mediterranean inspired bar and small plates restaurant focusing on
              fresh produce and big flavours, offering bespoke cocktails and a
              premium wine selection.
            </p>
            <Button
              onClick={() => navigate("/checkout")}
              label="Reserve a table"
              classes="text-lg"
            />
          </div>
          <img
            src={bannerImg}
            className="w-5/12 max-h-52 object-cover rounded-md"
            alt="home-banner"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
