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
import MembersList from "../../Components/Members/MembersList";
import NonMembersList from "../../Components/Members/NonMembersList";

const Members = () => {
  const dispatch = useDispatch();
  const { membersCount } = useSelector((state) => state.members);
  const { isAdmin } = useSelector((state) => state.user);

  const [addNew, setAddNew] = useState(false);

  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleAddNew = () => {
    setAddNew((addNew) => !addNew);
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
          Active : {membersCount}
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
              mb={2}
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
          {addNew && <NonMembersList search={search} />}
          {!addNew && <MembersList search={search} />}
        </Container>
      </div>
    </Root>
  );
};

export default Members;

const Root = styled("div")((theme) => ({
  width: "100%",
  height: "100vh",
  backgroundColor: "#fff",

  "& .MuiContainer-root": { backgroundColor: "#f0f2f7" },
  "& .PageTitle": { padding: "20px 0 5px 0 " },
  "& .memberCount": { color: "#a3a2a2" },
  "& .memberListSection": {
    backgroundColor: "#fff",
    padding: "15px 0 120px 0px",
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
