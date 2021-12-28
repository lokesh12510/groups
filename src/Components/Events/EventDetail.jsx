import React from "react";
// Styles
import { styled } from "@mui/material/styles";
import { Container, IconButton, Typography } from "@mui/material";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const Root = styled("div")((theme) => ({
  width: "100%",
  position: "relative",
  "& .MuiContainer-root": {
    paddingTop: "16px",
    paddingBottom: "80px",
    borderRadius: "20px 20px 0 0",
    transform: "translateY(-20px)",
    background: "#fff",
  },
  "& .eventTitle": { margin: "13px 0" },
  "& .eventImage img": {
    width: "100%",
    height: "300px",
    objectFit: "cover",
    backgroundPosition: "center",
  },
  "& .eventContent": {
    color: "#646464",
  },
  "& .para": {
    marginBottom: "10px",
  },
}));

const BackBtn = styled(IconButton)((theme) => ({
  position: "absolute",
  top: "16px",
  left: "16px",
  background: "#fff",
  borderRadius: "7px",
  padding: "5px",
}));

const EventDetail = () => {
  const navigate = useNavigate();

  return (
    <Root>
      <BackBtn onClick={() => navigate(-1)}>
        <ArrowBack />
      </BackBtn>
      <div className="eventImage">
        <img
          src="https://res.cloudinary.com/drxjql1j7/image/upload/v1640697821/avatars/yqk6xkmfwothhtcngp2y.jpg"
          alt=""
        />
      </div>
      <Container>
        <Typography
          className="eventTitle"
          variant="h6"
          component="p"
          gutterBottom
        >
          Sports Event 2021
        </Typography>
        <div className="para">
          <Typography
            className="eventContent"
            variant="p"
            component="p"
            gutterBottom
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quaerat
            cupiditate laboriosam, inventore illum reiciendis veritatis commodi
            temporibus laudantium beatae dolor. Obcaecati aperiam ut aliquid
            ipsa aspernatur? Minus ex, nulla, nihil incidunt impedit a dolorem,
            temporibus similique ratione odio earum?
          </Typography>
        </div>
        <div className="para">
          <Typography
            className="eventContent"
            variant="p"
            component="p"
            gutterBottom
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In numquam
            natus nobis, voluptatum enim quod eligendi laborum vitae alias
            reprehenderit hic voluptatibus eius perspiciatis? Suscipit impedit
            veritatis unde fuga ratione obcaecati totam cupiditate corrupti
            corporis beatae officiis perspiciatis velit ipsum deserunt expedita
            laboriosam sunt molestiae ducimus eaque, quis similique adipisci?
            Reiciendis, impedit fugit amet et expedita quaerat provident velit
            similique.
          </Typography>
        </div>
      </Container>
    </Root>
  );
};

export default EventDetail;
