import React, { useEffect } from "react";
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
import { useState } from "react";

const MembersList = () => {
  const dispatch = useDispatch();
  const groups = useSelector((state) => state.groups);
  const [progress, setProgress] = useState(false);

  const { loading } = useSelector((state) => state.loader);
  const { isAdmin } = useSelector((state) => state.user);

  // Members list state
  const [members, setMembers] = useState([]);

  useEffect(() => {
    getMembersList();
  }, []);

  const getMembersList = () => {
    GroupServices.getMembersList(
      {},
      () => dispatch(startLoader()),
      handleMembersList,
      handleError,
      () => dispatch(stopLoader())
    );
  };

  const handleMembersList = (data) => {
    setMembers(data.data.data.members);
    dispatch(setMessage({ message: "", type: "success" }));
  };

  const handleRemoveMember = (id) => {
    console.log(id, "USER ID");

    GroupServices.removeGroupMembers(
      { user_id: id },
      () => dispatch(startLoader()),
      handleRemoveSuccess,
      handleError,
      () => dispatch(stopLoader())
    );
  };

  const handleRemoveSuccess = (data) => {
    console.log(data);
    getMembersList();
    dispatch(
      setMessage({ message: "Member Removed Successfully!", type: "success" })
    );
  };

  const handleError = (error) => {
    dispatch(setMessage({ message: "Error Occurred!", type: "error" }));
    console.log(error);
  };

  return (
    <div>
      {!loading &&
        members.length > 0 &&
        members.map((member, index) => {
          return (
            <MemberCard
              key={index}
              member={member}
              handleRemoveMember={handleRemoveMember}
            />
          );
        })}
    </div>
  );
};

export default MembersList;
