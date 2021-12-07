import React, { useEffect, useState } from "react";
// Styles
import { styled } from "@mui/material/styles";
import {
  Container,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import MemberCard from "../../Components/Members/MemberCard";
import { DefaultTheme } from "../../Constant";
import { GroupServices } from "../../Services/GroupServices";
import { useDispatch, useSelector } from "react-redux";
import { startLoader, stopLoader } from "../../redux/actions/Loader.action";
import { setMessage } from "../../redux/actions/Message.actions";

const Root = styled("div")((theme) => ({
  width: "100%",
  height: "100vh",
  backgroundColor: "#fff",
  "& .MuiContainer-root": { backgroundColor: "#f0f2f7" },
  "& .PageTitle": { padding: "20px 0 5px 0 " },
  "& .memberCount": { color: "#a3a2a2", margin: "10px 0 0 0" },
  "& .memberListSection": {
    backgroundColor: "#fff",
    padding: "15px 0",
    borderRadius: "20px 20px 0 0",
    "& .MuiContainer-root": {
      padding: "0 10px",
      backgroundColor: "#fff",
    },
  },
}));

export const SearchBar = styled(TextField)((theme) => ({
  position: "sticky",
  top: 0,
  zIndex: 2,
  width: "100%",
  backgroundColor: "#fff",
  borderRadius: "5px",
  "& label.Mui-focused": {
    color: DefaultTheme.palette.primary.main,
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: DefaultTheme.palette.primary.main,
  },
  "& .MuiOutlinedInput-root": {
    "& .MuiOutlinedInput-input": {
      padding: ".9rem",
    },
    "&:hover fieldset": {
      borderColor: DefaultTheme.palette.primary.main,
    },
    "&.Mui-focused fieldset": {
      borderColor: `${DefaultTheme.palette.primary.main}70`,
      borderWidth: ".7px",
    },
    "& fieldset": {
      borderColor: "transparent",
      transition: "all .5s ease",
    },
  },
}));

const Members = () => {
  const dispatch = useDispatch();
  const groups = useSelector((state) => state.groups);

  // Members list state
  const [members, setMembers] = useState([]);

  const group_id = groups.currentGroupId;

  useEffect(() => {
    getMembersList(group_id);
  }, [group_id]);

  const getMembersList = (group_id) => {
    GroupServices.getMembersList(
      {
        group_id: group_id,
      },
      () => dispatch(startLoader()),
      handleMembersList,
      handleError,
      () => dispatch(stopLoader())
    );
  };

  const handleMembersList = (data) => {
    setMembers(data.data.data);
    dispatch(setMessage({ message: "", type: "success" }));
  };

  const handleError = (error) => {
    dispatch(setMessage({ message: "Error Occurred!", type: "error" }));
    console.log(error);
  };
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

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
          {members
            .filter((item) => {
              if (search === "") return item;
              else if (item.username.toLowerCase().trim().includes(search))
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
