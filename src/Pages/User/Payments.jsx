import React, { useEffect } from "react";
// Styles
import { styled } from "@mui/material/styles";
import {
  Avatar,
  Button,
  Container,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import { PAYMENT_HEAD, PROFILE_BG, SUCCESS_BG } from "../../UIElements/Images";
import { Link, useNavigate } from "react-router-dom";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { RecentTransaction } from "../../UIElements/Icons";
import PaymentCard from "../../Components/Payments/PaymentCard";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import { getUserPayments } from "../../redux/actions/UserPayments.action";
import { getGroupPaymentHistory } from "../../redux/actions/GroupPaymentHistory.actions";
import { getUserContribution } from "../../redux/actions/UserContribution.actions";
import { PENDING_BG } from "../../UIElements/Images";
import moment from "moment";
import NotFound from "../../Components/Elements/NotFound";

const Payments = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // STATE
  const [year, setYear] = React.useState("All");
  const [open, setOpen] = React.useState(false);

  // SELECTORS
  const { totalAmount, totalFine, isFetched } = useSelector(
    (state) => state.userContribution
  );
  const {
    payments,
    pendingPayment,
    isFetched: paymentStatus,
  } = useSelector((state) => state.userPayments);
  const { currentGroupId } = useSelector((state) => state.groups);
  const user = useSelector((state) => state.user);
  const { loading } = useSelector((state) => state.loader);
  // YEAR
  const handleChange = (event) => {
    setYear(event.target.value);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  // SERVICE CALL-> (USER PAYMENT LIST)
  useEffect(() => {
    window.scrollTo(0, 0);
    if (!isFetched) {
      dispatch(getUserContribution());
    }
    if (!paymentStatus.payments) {
      dispatch(getUserPayments(currentGroupId, "Paid", "desc", "2021"));
    }
    if (!paymentStatus.pendingPayment) {
      dispatch(getUserPayments(currentGroupId, "Unpaid", "desc", "2021"));
    }
  }, [currentGroupId, dispatch]);
  // SERVICE CALL-> (USER PAYMENT LIST)

  return (
    <Root>
      <PaymentHeader>
        <Stack direction={"column"} alignItems={"center"} mb={4}>
          <Avatar src={user?.profile?.avatar} className="avatar">
            A
          </Avatar>
          <Typography variant="h4" component={"div"} className="userName">
            {user?.username}
          </Typography>
        </Stack>

        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
          className="userInfo"
        >
          <div className="">
            <Typography
              variant="p"
              component={"div"}
              gutterBottom
              className="headerTitle contribution"
            >
              Your Contribution
            </Typography>
            <Typography
              variant="h5"
              component={"div"}
              className="totalAmount contribution"
            >
              ₹ {totalAmount}
              {/* <span>({totalFine})</span> */}
            </Typography>
          </div>
          <Divider />
          <div className="">
            <Typography
              variant="p"
              component={"div"}
              gutterBottom
              className="headerTitle"
            >
              Fine
            </Typography>
            <Typography variant="h5" component={"div"} className="totalAmount">
              ₹ {totalFine}
            </Typography>
          </div>
        </Stack>
      </PaymentHeader>
      <PendingPaymentsContainer>
        {pendingPayment.length > 0 && (
          <PendingPayments>
            Renew membership for the month December 2021 <br /> <h5>₹ 50</h5>
          </PendingPayments>
        )}
        {pendingPayment.length === 0 && (
          <Successpayment>
            Membership renewed for the month December 2021
            <br /> <h5>Active</h5>
          </Successpayment>
        )}
      </PendingPaymentsContainer>
      <Container>
        <FilterSection
          container
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Grid item>
            <Typography
              variant="p"
              mb={2}
              component="div"
              className="sectionTitle"
            >
              <RecentTransaction width="24" height="24" />
              Transaction
            </Typography>
          </Grid>
          <Grid item>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-controlled-open-select-label">
                Year
              </InputLabel>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={year}
                label="Year"
                onChange={handleChange}
              >
                <MenuItem value={"All"}>
                  <em>All</em>
                </MenuItem>
                <MenuItem value={2021}>2021</MenuItem>
                <MenuItem value={2020}>2020</MenuItem>
                <MenuItem value={2019}>2019</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </FilterSection>
      </Container>

      <PaymentContainer>
        {payments.map((item, index) => {
          return (
            <UserPaymentCard key={index} fullWidth fine={`${item.fine}`}>
              <div className="paymentInfo">
                <p>ID : {item.payment_id}</p>
                <h5>{moment(item.date).format("MMM YYYY")}</h5>
              </div>
              <div className="paymentAmount">
                <span className="amount">₹ {item.Amount} </span>
                {item.fine && <span className="fineFlag">Fine included</span>}
              </div>
            </UserPaymentCard>
          );
        })}
      </PaymentContainer>
    </Root>
  );
};

export default Payments;

const Root = styled("div")((theme) => ({
  width: "100%",
  paddingBottom: "100px",
}));

const PaymentHeader = styled("div")({
  padding: "16px",
  minHeight: "150px",
  paddingTop: "25px",
  background: `url("${PROFILE_BG}")`,
  backgroundSize: "cover",
  backgroundPosition: "center center",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "column",
  textAlign: "center",
  borderRadius: "0 0 20px 20px",
  "& .userInfo": {
    width: "100%",
  },
  "& .backBtn": {
    color: "#fff",
    fontSize: "16px",
    paddingInline: 0,
  },
  "& .headerTitle": {
    color: "#fff",
    fontSize: "14px",
    textTransform: "uppercase",
  },
  "& .totalAmount.contribution": {
    fontSize: "45px",
  },
  "& .totalAmount": {
    color: "#fff",
    fontSize: "25px",
    fontWeight: "500",
  },
  "& .userName": {
    color: "#fff",
    fontWeight: "bold",
    textTransform: "Capitalize",
    fontSize: "22px",
  },
  "& .avatar": {
    width: "70px",
    height: "70px",
    marginBottom: "10px",
  },
});

const PaymentContainer = styled(Container)({
  paddingBottom: "10px",
  position: "relative",
  "& .sectionTitle": {
    fontSize: "18px",
    display: "flex",
    gap: "15px",
  },
});

const FilterSection = styled(Grid)({
  marginBlock: "20px",
  position: "relative",
  "& .MuiSelect-select": {
    padding: "9.5px 13px",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    top: "0px",
  },
  "& .MuiInputLabel-root": {
    top: "0px",
  },
  "& .sectionTitle": {
    margin: 0,
    display: "flex",
    gap: "10px",
  },
});

const PendingPayments = styled(Button)({
  padding: "25px",
  borderRadius: "10px",
  backgroundColor: "#e6e6e6",
  minHeight: "150px",
  flex: "0 0 100%",
  scrollSnapAlign: "center",
  scrollBehavior: "smooth",
  scrollSnapStop: "always",
  background: `url("${PENDING_BG}")`,
  color: "#000",
  flexDirection: "column",
  "& h5": {
    fontSize: "25px",
    margin: "0",
    padding: "0",
  },
});

const PendingPaymentsContainer = styled(Container)({
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  overflow: "auto",
  flexWrap: "nowrap",
  paddingTop: "15px",
  position: "relative",
  gap: "10px",
  overflowX: "auto",
  webkitOverflowScrolling: "touch",
  scrollSnapType: "x mandatory",
  "&::-webkit-scrollbar": {
    width: 0,
    height: 0,
  },
});

const Successpayment = styled(Button)({
  padding: "25px",
  borderRadius: "10px",
  backgroundColor: "#e6e6e6",
  minHeight: "150px",
  flex: "0 0 100%",
  scrollSnapAlign: "center",
  scrollBehavior: "smooth",
  scrollSnapStop: "always",
  background: `url("${SUCCESS_BG}")`,
  color: "#000",
  flexDirection: "column",
  "& h5": {
    fontSize: "25px",
    margin: "0",
    padding: "0",
  },
});

const UserPaymentCard = styled(Button)(({ fine }) => ({
  padding: "0",
  borderRadius: "7px",
  boxShadow: "inset -2px 3px 4px rgb(0 0 0 / 15%)",
  backgroundColor: fine === "false" ? "#7BE8D8" : "#F4C2C2",
  minHeight: "80px",
  border: `1px solid ${fine === "false" ? "#7BE8D8" : "#F4C2C2"}`,
  justifyContent: "space-between",
  overflow: "hidden",
  "&:hover": {
    backgroundColor: fine === "false" ? "#7BE8D8" : "#F4C2C2",
  },
  "& h5": {
    margin: "0",
    fontSize: "20px",
  },
  "& .paymentInfo": {
    padding: "5px 15px",
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "Column",
    zIndex: 1,
    color: "#5A5A5A",
    paddingRight: "0",
  },
  "& p": {
    margin: "0",
  },
  "& .paymentAmount": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "9px 15px",
    fontSize: "30px",
    color: "#000",
    margin: 0,
    textAlign: "end",
    minHeight: "70px",
    paddingLeft: "0",
    "& .fineFlag": {
      fontSize: "11px",
      color: "#F44141",
    },
  },
  "&::after": {
    content: `""`,
    background: "#fff",
    boxShadow: "5px 3px 4px rgb(0 0 0 / 15%)",
    padding: "123px",
    position: "absolute",
    left: "-50px",
    transform: "rotate(26deg)",
  },
}));
