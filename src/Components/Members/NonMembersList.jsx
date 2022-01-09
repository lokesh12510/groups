import React, { useEffect } from "react";
// Styles
import { styled } from "@mui/material/styles";
import { Skeleton } from "@mui/material";

import { GroupServices } from "../../Services/GroupServices";
import { useDispatch, useSelector } from "react-redux";
import { startLoader, stopLoader } from "../../redux/actions/Loader.action";
import { setMessage } from "../../redux/actions/Message.actions";

import NonMemberCard from "../../Components/Members/NonMemberCard";
import { useState } from "react";
import { addMember } from "../../redux/actions/Members.actions";
import NotFound from "../Elements/NotFound";

const NonMembersList = ({ search }) => {
  const dispatch = useDispatch();
  const { currentGroupId } = useSelector((state) => state.groups);

  const { loading } = useSelector((state) => state.loader);

  // Members list state
  const [nonMembers, setNonMembers] = useState([]);

  useEffect(() => {
    getNonMembers(currentGroupId);
        // eslint-disable-next-line
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
    dispatch(setMessage({ message: "", type: "success" }));
  };

  const handleAddMember = (id) => {
    GroupServices.addGroupMembers(
      { user_id: id },
      () => dispatch(startLoader()),
      handleAddSuccess,
      handleError,
      () => dispatch(stopLoader())
    );
  };

  const handleAddSuccess = (data) => {
    dispatch(addMember());
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
        nonMembers
          .filter((item) => {
            if (search === "") {
              return item;
            } else {
              return item.username.toLowerCase().includes(search.toLowerCase());
            }
          })
          .map((member, index) => {
            return (
              <NonMemberCard
                key={index}
                member={member}
                handleAddMember={handleAddMember}
              />
            );
          })}
      {loading &&
        [...new Array(10)].map((item) => {
          return (
            <MemberSkeleton>
              <div>
                <Skeleton variant="circular" width={45} height={45} />
              </div>
              <div className="skeletonContent">
                <Skeleton variant="rectangular" width={"100%"} height={20} />
                <Skeleton
                  variant="rectangular"
                  width={"100%"}
                  height={5}
                  className="secondText"
                />
              </div>
            </MemberSkeleton>
          );
        })}
      {!loading && nonMembers.length === 0 && <NotFound />}
    </div>
  );
};

export default NonMembersList;

const MemberSkeleton = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "10px",
  "& .skeletonContent": {
    width: "100%",
  },
  "& .secondText": {
    width: "100%",
    marginBlock: "5px",
  },
});
