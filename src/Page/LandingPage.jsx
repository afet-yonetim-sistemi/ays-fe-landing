import React, { useContext } from "react";

import "../Styles.css";
import { DataContext } from "../Data/DataContext";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import AYS from "../Image/AYS.jpg";
import discord from "../Image/discord.jpg";
import github from "../Image/github.png";

import { Box } from "@mui/material";

function LandingCard(props) {
  const { Title, img, desc, link } = props;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={img} title="image title" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {Title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={link}>
          Göz At
        </Button>
      </CardActions>
    </Card>
  );
}

function LandingBox(props) {
  const { theme } = props;

  return (
    <>
      <div className={theme ? `midBox midBox` : `midBox-dark`}>
        <Box
          sx={{
            margin: 1,
            borderRadius: 10,
            width: "inherit",
            height: "inherit",
            backgroundColor: "inherit",
            color: "inherit",
          }}
        ></Box>
      </div>
    </>
  );
}

function LandingPage() {
  const { theme } = useContext(DataContext);

  const data = [
    {
      Title: "Discord ",
      Image: discord,
      Description:
        "Bize katılmak ve yardımcı olmak istiyorsanız Discord kanalımıza butondan katılabilirsiniz",
      link: `https://discord.gg/HjgheqhmeK`,
    },
    {
      Title: "Github",
      Image: github,
      Description:
        "Projemizin incelemesine ve detaylarına github üzerinden ulaşabilirsiniz.",
      link: "https://github.com/afet-yonetim-sistemi",
    },
  ];

  return (
    <>
      <div
        className={theme ? `pageTemplate  pageTemplate-dark` : `pageTemplate`}
      >
        <div className={theme ? `midBox midBox` : `midBox-dark`}>
          <div className="landing-header">
            
            <img className="landing-img" src={AYS} />
            <Typography variant="h5" gutterBottom>
              {" "}
              Afet Yönetim Sistemine Hoşgeldiniz{" "}
            </Typography>
          </div>

          <div class="landing-content">

              <Typography paragraph >
                Merhaba 👋
                <br/>
                Afet Yönetim Sistemi, gönüllü olarak, <a href={'https://github.com/acikkaynak/afet-org/discussions/35'}>discussion</a> alanındaki fikri hayata geçirmek için katkı sağlayan bir topluluktur.
                </Typography>

                <Typography paragraph>
                  Özet 
                  <br/>
                <li>Gönüllü olarak kişilerin afet bölgesine kişi ve/veya alet edevat taşımasındaki süreci bir kuruma bağlı gerçekleştirmesi </li> 
                <li>Bu süreçte kişilerin güvenliğinin sağlanması </li>
                <li>Kurumun koordinasyonunun sağlanması </li>
                <li>Doğru envanterin doğru konuma gönderilmesi.</li>

                </Typography>

                <Typography paragraph>
                  Tech stack
                  <br/>
                  
                  <div className="tech-stack">
                  <li> Back-End: `Java17`, `Spring Boot 3`, `Docker`, `MySQL` </li>
                  <li>- Front-End: `React.js`, `Angular.js` </li>
                  <li>- iOS: `Swift` </li>
                  <li>- Android: `Kotlin, Flutter` </li>
                  <li>- UI/UX Design: `Figma` </li>
                  <li>- Product: `Github Project` </li>
                  <li>- Discord Moderating: `Oryantasyon`, `Organizasyon Botları` </li>
                  <li>- Test: `-` </li>
                  </div>

                </Typography>

          </div>

          <div class="landing-bottom">
            {data.map((data, index) => (
              <LandingCard
                Title={data.Title}
                img={data.Image}
                desc={data.Description}
                link={data.link}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
