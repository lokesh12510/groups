import React, { useEffect } from "react";
// Styles
import { styled } from "@mui/material/styles";
import {
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Typography,
} from "@mui/material";
import { PAYMENT_HEAD } from "../../UIElements/Images";
import { Link, useNavigate } from "react-router-dom";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { RecentTransaction } from "../../UIElements/Icons";
import PaymentCard from "../../Components/Payments/PaymentCard";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import { getUserPayments } from "../../redux/actions/UserPayments.action";
import { getGroupPaymentHistory } from "../../redux/actions/GroupPaymentHistory.actions";
import { getUserContribution } from "../../redux/actions/UserContribution.actions";

const Payments = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // STATE
  const [year, setYear] = React.useState("All");
  const [type, setType] = React.useState("All");
  const [open, setOpen] = React.useState(false);
  const [typeOpen, setTypeOpen] = React.useState(false);

  // SELECTORS
  const { totalAmount, totalFine, isFetched } = useSelector(
    (state) => state.userContribution
  );
  const { payments, pendingPayment } = useSelector(
    (state) => state.userPayments
  );
  const { currentGroupId } = useSelector((state) => state.groups);
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

  // TYPE
  const handleTypeChange = (event) => {
    setType(event.target.value);
  };
  const handleTypeClose = () => {
    setTypeOpen(false);
  };
  const handleTypeOpen = () => {
    setTypeOpen(true);
  };

  // SERVICE CALL-> (USER PAYMENT LIST)
  useEffect(() => {
    if (!isFetched) {
      dispatch(getUserContribution());
    }
    if (payments.length === 0) {
      dispatch(getUserPayments(currentGroupId, "Paid", "desc", "2021"));
    }
    if (pendingPayment.length === 0) {
      dispatch(getUserPayments(currentGroupId, "Unpaid", "desc", "2021"));
    }
  }, []);
  // SERVICE CALL-> (USER PAYMENT LIST)

  return (
    <Root>
      <PaymentHeader>
        <Button
          onClick={() => navigate(-1)}
          className="backBtn"
          variant="text"
          startIcon={<ArrowBackIcon />}
        >
          Payments
        </Button>
        <div className="">
          <Typography
            variant="p"
            component={"div"}
            gutterBottom
            className="headerTitle"
          >
            Total Contributions
          </Typography>
          <Typography
            variant="h5"
            component={"div"}
            gutterBottom
            className="totalAmount"
          >
            ₹ {totalAmount}
            <span>({totalFine})</span>
          </Typography>
        </div>
      </PaymentHeader>

      <FilterSection container justifyContent={"space-between"}>
        <Grid item>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-controlled-open-select-label">Year</InputLabel>
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
        <Grid item>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-controlled-open-select-label">Type</InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={typeOpen}
              onClose={handleTypeClose}
              onOpen={handleTypeOpen}
              value={type}
              label="Type"
              onChange={handleTypeChange}
            >
              <MenuItem value={"All"}>
                <em>All</em>
              </MenuItem>
              <MenuItem value={"Paid"}>Paid</MenuItem>
              <MenuItem value={"Fine"}>Fine</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </FilterSection>

      <PaymentContainer>
        <Typography variant="p" mb={2} component="div" className="sectionTitle">
          <RecentTransaction width="24" height="24" />
          Your Transaction
        </Typography>
        <Typography
          variant="caption"
          display="block"
          gutterBottom
          mb={2}
          className="transactionDate"
        >
          Today, November 4th
        </Typography>

        {[...new Array(3)].map((item, index) => {
          return <PaymentCard key={index} />;
        })}
      </PaymentContainer>
    </Root>
  );
};

export default Payments;

const Root = styled("div")((theme) => ({
  width: "100%",
  "& .MuiContainer-root": {
    paddingTop: "20px",
  },
}));

const PaymentHeader = styled("div")({
  padding: "16px",
  minHeight: "150px",
  background: `url("${PAYMENT_HEAD}")`,
  backgroundSize: "cover",
  backgroundPosition: "center center",
  display: "flex",
  alignItems: "start",
  justifyContent: "space-between",
  flexDirection: "column",
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
  "& .totalAmount": {
    color: "#fff",
    fontSize: "25px",
    fontWeight: "500",
  },
});

const PaymentContainer = styled(Container)({
  paddingBlock: "10px",
  "& .sectionTitle": {
    fontSize: "18px",
    display: "flex",
    gap: "15px",
  },
});

const FilterSection = styled(Grid)({
  marginBlock: "20px",
  "& .MuiSelect-select": {
    padding: "9.5px 13px",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    top: "0px",
  },
  "& .MuiInputLabel-root": {
    top: "0px",
  },
});
