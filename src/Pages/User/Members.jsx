import React, { useState } from "react";
// Styles
import { styled } from "@mui/material/styles";
import { Container, InputAdornment, Typography } from "@mui/material";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import MemberCard from "../../Components/Members/MemberCard";
import { SearchBar } from "../../UIElements/Form";

const Root = styled("div")((theme) => ({
  width: "100%",
  height: "100vh",
  "& .PageTitle": { margin: "20px 0 5px 0 " },
  "& .memberCount": { color: "#a3a2a2", margin: "10px 0" },
  "& .memberListSection": {
    backgroundColor: "#fff",
    padding: "15px 0",
    borderRadius: "20px 20px 0 0",
    "& .MuiContainer-root": {
      padding: "0 10px",
    },
  },
}));

const Members = () => {
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  console.log(search);

  return (
    <Root>
      <Container>
        <div className="PageTitle">
          <SearchBar
            onChange={handleSearchChange}
            placeholder="Search..."
            color="success"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonSearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <Typography variant="overline" display="block" className="memberCount">
          Active : 32
        </Typography>
      </Container>
      <div className="memberListSection">
        <Container>
          {[...user, ...user]
            .filter((item) => {
              if (search === "") return item;
              else if (item.name.toLowerCase().trim().includes(search))
                return item;
            })
            .map((member, index) => {
              return <MemberCard key={index} member={member} />;
            })}
        </Container>
      </div>
    </Root>
  );
};

export default Members;

const user = [
  {
    id: 7,
    name: "Naresh",
    date: "14 SEP 2019",
    role: "member",
    status: true,
  },

  {
    id: 2,
    name: "Kishor",
    date: "14 SEP 2019",
    role: "President",
    status: true,
  },
  {
    id: 6,
    name: "Harshath",
    date: "14 SEP 2019",
    role: "member",
    status: true,
  },
  {
    id: 3,
    name: "Dheekshith",
    date: "14 SEP 2019",
    role: "Casher",
    status: true,
  },
  {
    id: 1,
    name: "Lokesh",
    date: "14 SEP 2019",
    role: "Joint-Secretory",
    status: false,
  },
  {
    id: 4,
    name: "Sanjay",
    date: "14 SEP 2019",
    role: "Vice-President",
    status: true,
  },
  {
    id: 8,
    name: "Shyam",
    date: "14 SEP 2019",
    role: "member",
    status: true,
  },
  {
    id: 5,
    name: "Somesh",
    date: "14 SEP 2019",
    role: "Secretory",
    status: false,
  },
];
