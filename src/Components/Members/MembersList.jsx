import React, { useEffect } from "react";
// Styles
import { styled } from "@mui/material/styles";
import { Skeleton } from "@mui/material";
import MemberCard from "../../Components/Members/MemberCard";
import { GroupServices } from "../../Services/GroupServices";
import { useDispatch, useSelector } from "react-redux";
import { startLoader, stopLoader } from "../../redux/actions/Loader.action";
import { setMessage } from "../../redux/actions/Message.actions";

import { getMembersList } from "../../redux/actions/Members.actions";
import NotFound from "../Elements/NotFound";

const MembersList = ({ search }) => {
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.loader);

  // Members list state
  const { membersList, isFetched } = useSelector((state) => state.members);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!isFetched) {
      dispatch(getMembersList());
    }
  }, [isFetched, dispatch]);

  const handleRemoveMember = (id) => {
    GroupServices.removeGroupMembers(
      { user_id: id },
      () => dispatch(startLoader()),
      handleRemoveSuccess,
      handleError,
      () => dispatch(stopLoader())
    );
  };

  const handleRemoveSuccess = (data) => {
    dispatch(getMembersList());
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
        membersList.length > 0 &&
        membersList
          .filter((item) => {
            if (search === "") {
              return item;
            } else {
              return item.user.username
                .toLowerCase()
                .includes(search.toLowerCase());
            }
          })
          .map((member, index) => {
            return (
              <MemberCard
                key={index}
                member={member}
                handleRemoveMember={handleRemoveMember}
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
                <Skeleton variant="rectangular" width={"100%"} height={45} />
              </div>
            </MemberSkeleton>
          );
        })}
      {!loading && membersList.length === 0 && <NotFound />}
    </div>
  );
};

export default MembersList;

const MemberSkeleton = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
  "& .skeletonContent": {
    width: "100%",
  },
  "& .secondText": {
    width: "100%",
    marginBlock: "5px",
  },
});
