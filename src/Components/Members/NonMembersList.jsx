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

const NonMembersList = () => {
  const dispatch = useDispatch();
  const { currentGroupId } = useSelector((state) => state.groups);
  const [progress, setProgress] = useState(false);

  const { loading } = useSelector((state) => state.loader);
  const { isAdmin } = useSelector((state) => state.user);

  // Members list state
  const [nonMembers, setNonMembers] = useState([]);

  useEffect(() => {
    getNonMembers(currentGroupId);
  }, [currentGroupId]);

  const getNonMembers = (currentGroupId) => {
    GroupServices.getNonMembers(
      currentGroupId,
      {},
      () => dispatch(startLoader()),
      handleNonMembersList,
      handleError,
      () => dispatch(stopLoader())
    );
  };

  const handleNonMembersList = (data) => {
    setNonMembers(data.data.data);
    console.log(data);
    dispatch(setMessage({ message: "", type: "success" }));
  };

  const handleAddMember = (id) => {
    console.log(id, "USER ID");

    GroupServices.addGroupMembers(
      { user_id: id },
      () => dispatch(startLoader()),
      handleAddSuccess,
      handleError,
      () => dispatch(stopLoader())
    );
  };

  const handleAddSuccess = (data) => {
    console.log(data);
    getNonMembers(currentGroupId);
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
        nonMembers.length > 0 &&
        nonMembers.map((member, index) => {
          return (
            <NonMemberCard
              key={index}
              member={member}
              handleAddMember={handleAddMember}
            />
          );
        })}
    </div>
  );
};

export default NonMembersList;
