import React, { useEffect, useState } from "react";
// Styles
import { styled } from "@mui/material/styles";
import {
  Container,
  FormControlLabel,
  Grid,
  InputAdornment,
  Switch,
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
import { SwitchBtn } from "../../UIElements/Buttons";
import NonMemberCard from "../../Components/Members/NonMemberCard";

const Members = () => {
  const dispatch = useDispatch();
  const groups = useSelector((state) => state.groups);
  const [progress, setProgress] = useState(false);

  const { loading } = useSelector((state) => state.loader);
  const { isAdmin } = useSelector((state) => state.user);

  // Members list state
  const [members, setMembers] = useState([]);
  const [nonMembers, setNonMembers] = useState([]);

  const [addNew, setAddNew] = useState(false);

  const group_id = groups.currentGroupId;

  useEffect(() => {
    if (addNew) {
      getNonMembers(group_id);
    } else {
      getMembersList();
    }
  }, [group_id, addNew]);

  const getMembersList = () => {
    GroupServices.getMembersList(
      {},
      () => dispatch(startLoader()),
      handleMembersList,
      handleError,
      () => dispatch(stopLoader())
    );
  };
  const getNonMembers = (group_id) => {
    GroupServices.getNonMembers(
      group_id,
      {},
      () => dispatch(startLoader()),
      handleNonMembers,
      handleError,
      () => dispatch(stopLoader())
    );
  };

  const handleMembersList = (data) => {
    setMembers(data.data.data.members);
    dispatch(setMessage({ message: "", type: "success" }));
  };

  const handleNonMembers = (data) => {
    setNonMembers(data.data.data);
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

  console.log(addNew);
  const handleAddNew = () => {
    setAddNew((addNew) => !addNew);
  };

  console.log(nonMembers);

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
          Active : {members.length}
        </Typography>
      </Container>
      <div className="memberListSection">
        <Container>
          {isAdmin && (
            <Grid
              container
              alignItems={"center"}
              justifyContent={"end"}
              spacing={1}
            >
              <Grid item>
                <FormControlLabel
                  value="start"
                  control={<SwitchBtn onClick={handleAddNew} />}
                  label="ADD"
                  labelPlacement="start"
                />
              </Grid>
            </Grid>
          )}

          {!loading &&
            !addNew &&
            members.length > 0 &&
            members
              .filter((item) => {
                if (search === "") return item;
                else if (
                  item.user.username.toLowerCase().trim().includes(search)
                )
                  return item;
              })
              .map((member, index) => {
                return (
                  <MemberCard key={index} member={member} addNew={addNew} />
                );
              })}

          {!loading &&
            addNew &&
            nonMembers.length > 0 &&
            nonMembers.map((member, index) => {
              return <NonMemberCard key={index} member={member} />;
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
    created_at: "14 SEP 2019",
    user: {
      avatar:
        "https://res.cloudinary.com/drxjql1j7/image/upload/v1639070926/avatars/ewovxmoyeo0uh52fvrkp.jpg",
      user_id: "USR09tVn11cHeQl",
      username: "Krish123",
    },
    status: "new",
  },

  {
    id: 2,
    name: "sdfsd",
    created_at: "14 SEP 2019",
    user: {
      avatar:
        "https://res.cloudinary.com/drxjql1j7/image/upload/v1639070926/avatars/ewovxmoyeo0uh52fvrkp.jpg",
      user_id: "USR02",
      username: "asfas",
    },
    status: "new",
  },
  {
    id: 2,
    name: "sdfasdfsd",
    created_at: "14 SEP 2019",
    user: {
      avatar:
        "https://res.cloudinary.com/drxjql1j7/image/upload/v1639070926/avatars/ewovxmoyeo0uh52fvrkp.jpg",
      user_id: "USR03",
      username: "asfas",
    },
    status: "new",
  },
  {
    id: 2,
    name: "sdfasdfasdsd",
    created_at: "14 SEP 2019",
    user: {
      avatar:
        "https://res.cloudinary.com/drxjql1j7/image/upload/v1639070926/avatars/ewovxmoyeo0uh52fvrkp.jpg",
      user_id: "USR04",
      username: "asfas",
    },
    status: "new",
  },
  {
    id: 2,
    name: "sdfasdfasdfsd",
    created_at: "14 SEP 2019",
    user: {
      avatar:
        "https://res.cloudinary.com/drxjql1j7/image/upload/v1639070926/avatars/ewovxmoyeo0uh52fvrkp.jpg",
      user_id: "USR05",
      username: "asfas",
    },
    status: "new",
  },
];

const Root = styled("div")((theme) => ({
  width: "100%",
  height: "100vh",
  backgroundColor: "#fff",

  "& .MuiContainer-root": { backgroundColor: "#f0f2f7" },
  "& .PageTitle": { padding: "20px 0 5px 0 " },
  "& .memberCount": { color: "#a3a2a2" },
  "& .memberListSection": {
    backgroundColor: "#fff",
    padding: "15px 0 120px 15px",
    borderRadius: "20px 20px 0 0",
    "& .MuiContainer-root": {
      padding: "0 10px",
      backgroundColor: "#fff",
    },
    "& .MuiTypography-root": {
      color: "#666666",
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
