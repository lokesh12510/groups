import {
  Container,
  ListItemButton,
  ListItemIcon,
  Stack,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import { APP_LOGO } from "../../UIElements/Images";
import Image from "../../Assets/Images/event6.jpg";
import Janani from "../../Assets/Images/janani.jpg";
import Keerthi from "../../Assets/Images/keerthi.jpg";
import Magisha from "../../Assets/Images/magisha.jpg";
import Rakshana from "../../Assets/Images/rakshana.jpg";
import Rithick from "../../Assets/Images/rithick.png";
import Sathya from "../../Assets/Images/sathya.jpg";
import Varun from "../../Assets/Images/varun.jpg";
import Akshaya from "../../Assets/Images/akshaya.jpg";
import Lokesh from "../../Assets/Images/lokesh.jpg";
import Sanjay from "../../Assets/Images/sanjay.png";
import Dheeki from "../../Assets/Images/dheeki.JPG";
import Shyam from "../../Assets/Images/shyam.png";
import Somesh from "../../Assets/Images/somesh.png";
import Kishor from "../../Assets/Images/kishor.png";
import Naresh from "../../Assets/Images/naresh.png";
import Shri from "../../Assets/Images/shri.png";
import Janani_s from "../../Assets/Images/janani_s.png";
import { DefaultTheme } from "../../Constant";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const AboutUs = () => {
  return (
    <Root>
      <Container className="bg-container">
        <Stack
          direction={"row"}
          alignItems="center"
          justifyContent={"start"}
          spacing={2}
        >
          <img className="logo_image" src={APP_LOGO} alt="logo" />
          <Typography
            variant="h5"
            component="div"
            style={{ textTransform: "uppercase" }}
          >
            TVINM
          </Typography>
        </Stack>
      </Container>
      <img className="cover_image" src={Image} alt="about Us" />
      <Container>
        <Typography
          variant="h6"
          component="div"
          gutterBottom
          style={{ textTransform: "uppercase" }}
          className="title"
        >
          About Us
        </Typography>
        <Typography gutterBottom component="div">
          Thambatty Vivekanandar Illaignar Narpani Mandram is a society club
          which was formed on 27 December 2019 at Thambatty Village with a
          strong motive to develop the village and to provide every possible
          services to the people.&nbsp;
          <strong
            className="bold"
            style={{ color: DefaultTheme.palette.primary.main }}
          >
            Thambatty Vivekanandar Illaignar Narpani Mandram is affiliated with
            Nehru Yuva Kendra, The Nilgiris District which is under Government
            of India- Ministry of Youth Affairs and Sports.
          </strong>
          &nbsp; Starting with less than 15 members, the rise in count has been
          tremendous during the past years and now with active members of 50 and
          above. The members of TVINM have opportunities to participate in
          various activities relating to community development. In addition to
          that, the society club also helps in building leadership qualities in
          every active members and motivates them to be a good leader. TVINM
          mainly focuses on developing the community with the support of the
          entire team. This society club has been a bridge which is built for a
          safe passage for people from their present life to a bright future.
          The club organizes many indoor and outdoor activities for the young
          kids to showcase their talents and is being a platform to develop
          their talents.
        </Typography>
      </Container>
      <Container>
        <Typography
          variant="h6"
          component="div"
          gutterBottom
          style={{ textTransform: "uppercase" }}
          className="title"
        >
          History
        </Typography>
        <ul>
          <li>
            <Typography gutterBottom component="div">
              December 27, 2019- Start of Society club and affiliation
              certificate received from Nehru Yuva Kendra, The Nilgiris-
              Government of India.
            </Typography>
          </li>
          <li>
            <Typography gutterBottom component="div">
              December 28, 2019- Organized few competitions for Kids. (Chess,
              Carrom, Badminton)
            </Typography>
          </li>
          <li>
            <Typography gutterBottom component="div">
              Jan 18, 2020- Started Plastic Free society camp by collecting
              plastic wastes in and around the village.
            </Typography>
          </li>
          <li>
            <Typography gutterBottom component="div">
              February 24, 2020- Our society name "THAMBATTY VIVEKANANDAR
              ILLAIGNAR NARPANI MANDRAM" was officially registered by
              Government.
            </Typography>
          </li>
          <li>
            <Typography gutterBottom component="div">
              May 31, 2020- Organized second set of Competitions (Drawing,
              Dance, Essay, Handwriting, Quiz, Speech, Spell bee, Singing)
            </Typography>
          </li>
          <li>
            <Typography gutterBottom component="div">
              June 12, 2020- Distributed Sports Jerseys for the village kids by
              TVINM at free of cost.
            </Typography>
          </li>
          <li>
            <Typography gutterBottom component="div">
              July 4, 2020- Competition 3 ( Carrom, Chess, Badminton)
            </Typography>
          </li>
          <li>
            <Typography gutterBottom component="div">
              August 30, 2020- Fit India Youth Club program was organized.
            </Typography>
          </li>
          <li>
            <Typography gutterBottom component="div">
              November 16, 2020- Village Ground renovation project
            </Typography>
          </li>
          <li>
            <Typography gutterBottom component="div">
              November 26, 2020- Constitution day program was organized with the
              help of NYK, The Nilgiris.
            </Typography>
          </li>
          <li>
            <Typography gutterBottom component="div">
              December 2, 2020- Thambatty Football League-4 was organized by
              TVINM.
            </Typography>
          </li>
          <li>
            <Typography gutterBottom component="div">
              January 13, 2021- Competition 4 (Speech, Essay, Thirukural,
              Singing, Dancing, Quiz, Drawing/Coloring, Monoact, Handwriting,
              Poem, Rangoli, Chess, Badminton, Carrom, Running)
            </Typography>
          </li>
          <li>
            <Typography gutterBottom component="div">
              May 2021- Formed a special team during the Covid times in
              providing essentials at their doorstep.
            </Typography>
          </li>
          <li>
            <Typography gutterBottom component="div">
              June 10, 2021- Tree plantation activity. Planted tree saplings in
              and around the Village.
            </Typography>
          </li>
          <li>
            <Typography gutterBottom component="div">
              January 1, 2022- TVINM App launching Event.
            </Typography>
          </li>
          <li>
            <Typography gutterBottom component="div">
              January 22, 2022- Disposal of over 500kgs plastics which were
              collected over the past few years.
            </Typography>
          </li>
          <li>
            <Typography gutterBottom component="div">
              February 20, 2022- Rs. 10000 was received from Sri Sathya Sai
              Maruthi Seva charitable trust as an honourable gift.
            </Typography>
          </li>
          <li>
            <Typography gutterBottom component="div">
              March 27, 2022- "Social Worker Award" was honoured to our club by
              BADUGAR KALACHARA PADHUKAPPU IYAKKAM.
            </Typography>
          </li>
        </ul>
      </Container>
      <Container>
        <Typography
          variant="h6"
          component="div"
          gutterBottom
          className="title"
          style={{ textTransform: "uppercase" }}
        >
          Our Team
        </Typography>

        <Box sx={{ width: "100%" }}>
          <ImageList variant="masonry" cols={2} gap={15}>
            <ImageListItem>
              <img src={Kishor} alt="Kishor" loading="lazy" />
              <ImageListItemBar
                position="below"
                title="Kishor T"
                subtitle="President"
              />
              <ImageListItemBar position="above" title="President" />
            </ImageListItem>
            <ImageListItem>
              <img src={Somesh} alt="Somesh" loading="lazy" />
              <ImageListItemBar
                position="below"
                title="Somesh N"
                subtitle="Secretary"
              />
            </ImageListItem>
            <ImageListItem>
              <img src={Dheeki} alt="Dheekshith" loading="lazy" />
              <ImageListItemBar
                position="below"
                title="Dheekshith S"
                subtitle="Treasurer"
              />
            </ImageListItem>
            <ImageListItem>
              <img src={Sanjay} alt="Sanjay.R" loading="lazy" />
              <ImageListItemBar
                position="below"
                title="Sanjay R"
                subtitle="Vice-President"
              />
            </ImageListItem>
            <ImageListItem>
              <img src={Lokesh} alt="Lokesh" loading="lazy" />
              <ImageListItemBar
                position="below"
                title="Lokesh K"
                subtitle="Vice-Secretary"
              />
            </ImageListItem>
          </ImageList>
        </Box>

        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Naveen" src={Naresh} />
            </ListItemAvatar>
            <ListItemText
              primary="Naveen N"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Leader
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Janani S" src={Janani_s} />
            </ListItemAvatar>
            <ListItemText
              primary="Janani S"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Leader
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Rithick" src={Rithick} />
            </ListItemAvatar>
            <ListItemText
              primary="Rithick V"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Assistant leader
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Shrinitha" src={Shri} />
            </ListItemAvatar>
            <ListItemText
              primary="Shrinitha R"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Assistant leader
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Sathya" src={Sathya} />
            </ListItemAvatar>
            <ListItemText
              primary="Sathya S"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Assistant Treasurer
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Keerthika" src={Keerthi} />
            </ListItemAvatar>
            <ListItemText
              primary="Keerthika R"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Assistant Treasurer
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Magisha" src={Magisha} />
            </ListItemAvatar>
            <ListItemText
              primary="Magisha K"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Youth Representative
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Rakshana" src={Rakshana} />
            </ListItemAvatar>
            <ListItemText
              primary="Rakshana B"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Youth Representative
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Varun" src={Varun} />
            </ListItemAvatar>
            <ListItemText
              primary="Varun C"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Youth Representative
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Shyam T K" src={Shyam} />
            </ListItemAvatar>
            <ListItemText
              primary="Shyam T K"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Youth Representative
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Akshaya" src={Akshaya} />
            </ListItemAvatar>
            <ListItemText
              primary="Akshaya R"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Event Coordinator
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Janani B" src={Janani} />
            </ListItemAvatar>
            <ListItemText
              primary="Janani B"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Event Coordinator
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Container>
      <Container className="footer">
        <Stack alignItems={"center"} justifyContent="start" spacing={3}>
          <img className="footer_logo" src={APP_LOGO} alt="" />
          <Typography align="center" mb={4} variant="h6" component="div">
            THAMBATTY <br /> VIVEKANANDAR ILLAIGNAR NARPANI MANDRAM
          </Typography>
          <Typography
            variant="p"
            component="div"
            gutterBottom
            style={{ textTransform: "uppercase", fontWeight: "bold" }}
          >
            Write to Us
          </Typography>

          <List>
            <ListItem disablePadding>
              <ListItemButton
                component={"a"}
                target="_blank"
                href="mailto:thambattyinm@gmail.com"
              >
                <ListItemIcon>
                  <EmailIcon />
                </ListItemIcon>
                <ListItemText primary="thambattyinm@gmail.com" />
              </ListItemButton>
            </ListItem>
          </List>

          <Typography
            variant="p"
            component="div"
            gutterBottom
            style={{ textTransform: "uppercase", fontWeight: "bold" }}
          >
            follow Us On
          </Typography>

          <List>
            <ListItem disablePadding>
              <ListItemButton
                component={"a"}
                target="_blank"
                href="https://www.facebook.com/profile.php?id=100076436983948"
              >
                <ListItemIcon>
                  <FacebookIcon />
                </ListItemIcon>
                <ListItemText primary="Thambatty Vinm" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                component={"a"}
                target="_blank"
                href="https://instagram.com/thambatty_vinm?utm_medium=copy_link"
              >
                <ListItemIcon>
                  <InstagramIcon />
                </ListItemIcon>
                <ListItemText primary="thambatty_vinm" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                component={"a"}
                target="_blank"
                href="https://youtube.com/channel/UCnTY6RgbP4dvKU9c8I5LKXQ"
              >
                <ListItemIcon>
                  <YouTubeIcon />
                </ListItemIcon>
                <ListItemText primary="THAMBATTY KUNNAVAE" />
              </ListItemButton>
            </ListItem>
          </List>
          <Typography
            variant="p"
            component="div"
            gutterBottom
            style={{ textTransform: "uppercase", fontWeight: "bold" }}
          >
            Find Us
          </Typography>

          <List>
            <ListItem disablePadding>
              <ListItemButton
                component={"a"}
                target="_blank"
                href="https://maps.app.goo.gl/ByB1uXVM3o2yFKMC8"
              >
                <ListItemIcon>
                  <LocationOnIcon />
                </ListItemIcon>
                <ListItemText primary="Our Location" />
              </ListItemButton>
            </ListItem>
          </List>

          <Divider />
        </Stack>
      </Container>
    </Root>
  );
};

export default AboutUs;

const Root = styled("div")((theme) => ({
  width: "100%",
  "& .MuiContainer-root": { paddingBottom: 20 },
  "& .bg-container": {
    paddingBlock: "15px",
    backgroundColor: "#fff",
  },
  "& .logo_image": {
    width: 30,
    height: 30,
  },
  "& .cover_image": {
    width: "100%",
    height: 200,
    marginBottom: 20,
    objectFit: "cover",
  },
  "& .bold": DefaultTheme.palette.primary.main,
  "& .title": {
    color: DefaultTheme.palette.secondary.main,
    borderBottom: `1px solid ${DefaultTheme.palette.secondary.main}`,
    marginBottom: "10px",
  },
  "& .MuiListItem-root": {
    paddingLeft: 0,
  },
  "& .MuiAvatar-root": {
    backgroundColor: DefaultTheme.palette.primary.main,
  },
  "& .footer": {
    backgroundColor: `${DefaultTheme.palette.primary.main}2e`,
    paddingBlock: 20,
  },
  "& .footer_logo": {
    width: 40,
    height: 40,
  },
  "& .MuiList-root": {
    marginTop: 0,
  },
  "& .MuiImageListItemBar-title": {
    whiteSpace: "break-spaces",
  },
  "& .MuiListItemButton-root": {
    minWidth: 320,
  },
}));
