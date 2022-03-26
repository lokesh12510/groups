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
          className="title"
          style={{ textTransform: "uppercase" }}
        >
          Our Team
        </Typography>

        <Box sx={{ width: "100%" }}>
          <ImageList variant="masonry" cols={2} gap={15}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar position="below" title={item.author} />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>

        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Naveen" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Naveen"
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
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Janani S" src="/static/images/avatar/2.jpg" />
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
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Rithick" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Rithick"
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
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Shrinitha" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Shrinitha"
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
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Sathya" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Sathya"
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
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Keerthika" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Keerthika"
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
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Magisha" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Magisha"
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
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Rakshana" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Rakshana"
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
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Varun" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Varun"
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
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Shyam" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Shyam"
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
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Akshaya" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Akshaya"
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
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Janani B" src="/static/images/avatar/3.jpg" />
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
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Container>
      <Container className="footer">
        <Stack alignItems={"center"} justifyContent="center" spacing={3}>
          <img className="footer_logo" src={APP_LOGO} alt="" />
          <Typography align="center" mb={4} variant="overline" component="div">
            THAMBATTY <br /> VIVEKANANDHAR ILLAINGAR NARPANI MANDRAM
          </Typography>
          <Typography
            variant="p"
            component="div"
            gutterBottom
            style={{ textTransform: "uppercase" }}
          >
            follow Us On
          </Typography>

          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <EmailIcon />
                </ListItemIcon>
                <ListItemText primary="thambattyinm@gmail.com" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <FacebookIcon />
                </ListItemIcon>
                <ListItemText primary="thambatty_kunnavae" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InstagramIcon />
                </ListItemIcon>
                <ListItemText primary="thambatty_kunnavae" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <YouTubeIcon />
                </ListItemIcon>
                <ListItemText primary="thambatty_kunnavae" />
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
}));

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "Bed",
    author: "President",
  },
  {
    img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
    title: "Books",
    author: "Vice-President",
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Sink",
    author: "Secretary",
  },
  {
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "Kitchen",
    author: "Vice-Secretary",
  },
  {
    img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
    title: "Blinds",
    author: "Treasury",
  },
];
