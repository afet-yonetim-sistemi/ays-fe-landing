import React, { useContext } from "react";

import "../Styles.css";

import Typography from "@mui/material/Typography";
import { DataContext } from "../Data/DataContext";

import ContentBox from "../Components/ContentBox";
import  Gmap from "../Components/Gmap";

var content = [
  "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir  ",
];

function MainPage(props) {
  const { theme } = useContext(DataContext);

  return (
    <>
      <div
        className={theme ? `pageTemplate pageTemplate-dark` : `pageTemplate`}
      >
        <div className="midcontent">
          <Typography variant="h4"> Anasayfa </Typography>
          <div className="mid">
            <Gmap />

            <ContentBox
              className={
                theme ? `pageTemplate pageTemplate` : `pageTemplate-dark`
              }
              content={content}
            />
            <ContentBox
              className={
                theme ? `pageTemplate pageTemplate` : `pageTemplate-dark`
              }
              content={content}
            />
            <ContentBox
              className={
                theme ? `pageTemplate pageTemplate` : `pageTemplate-dark`
              }
              content={content}
            />
            <ContentBox
              className={
                theme ? `pageTemplate pageTemplate` : `pageTemplate-dark`
              }
              content={content}
            />
            <ContentBox
              className={
                theme ? `pageTemplate pageTemplate` : `pageTemplate-dark`
              }
              content={content}
            />
            <ContentBox
              className={
                theme ? `pageTemplate pageTemplate` : `pageTemplate-dark`
              }
              content={content}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;
