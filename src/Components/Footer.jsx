import { Link, Typography } from "@mui/material";

import {React, useContext} from "react";
import { useNavigate } from "react-router-dom";

import "../Styles.css";

function Footer(props) {
  
    const history = useNavigate();


  return (
    <>
      <div class="footer">
        <div class="footer-item">
            <Typography variant="h5" >Sayfalar</Typography>
          <Link
            component="button"
            variant="h6"
            onClick={() => {
              history("/");
            }}
          >
            Anasayfa
          </Link>
          <Link
            component="button"
            variant="h6"
            onClick={() => {
              history("/");
            }}
          >
            Hakkımızda
          </Link>
          <Link
            component="button"
            variant="h6"
            onClick={() => {
              history("/");
            }}
          >
            Kurumlar
          </Link>
        </div>
        <div class="footer-item">
            <Typography variant="h5"> Sayfalar </Typography>
          <Link component="button" variant="h6">
            Anasayfa
          </Link>
          <Link component="button" variant="h6">
            Hakkımızda
          </Link>
          <Link component="button" variant="h6">
            Kurumlar
          </Link>
        </div>
      </div>
    </>
  );
}

export default Footer;
