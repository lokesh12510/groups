import React, { useEffect, useState } from "react";
// Styles
import { styled } from "@mui/material/styles";
import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { PAYMENT_HEAD } from "../../UIElements/Images";
import { Link, useNavigate } from "react-router-dom";
import FilterAltRoundedIcon from "@mui/icons-material/FilterAltRounded";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { RecentTransaction } from "../../UIElements/Icons";
import PaymentCard from "../../Components/Payments/PaymentCard";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import { getUserPayments } from "../../redux/actions/UserPayments.action";
import {
  filterChange,
  getGroupPaymentHistory,
} from "../../redux/actions/GroupPaymentHistory.actions";
import { Box, maxHeight } from "@mui/system";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const Donation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // STATE
  const [year, setYear] = React.useState("All");
  const [type, setType] = React.useState("All");
  const [open, setOpen] = React.useState(false);
  const [typeOpen, setTypeOpen] = React.useState(false);
  const [modal, setModal] = useState(false);
  const [month, setMonth] = useState("All");

  // SELECTORS
  const { paymentHistory, isFetched } = useSelector(
    (state) => state.groupHistory
  );
  const { currentGroupId } = useSelector((state) => state.groups);
  const { loading } = useSelector((state) => state.loader);

  // YEAR
  const handleChange = (event) => {
    setYear(event.target.value);
    dispatch(filterChange());
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
    dispatch(filterChange());
  };
  const handleTypeClose = () => {
    setTypeOpen(false);
  };
  const handleTypeOpen = () => {
    setTypeOpen(true);
  };

  // MONTH
  const handleMonthChange = (event) => {
    setMonth(event.target.value);
    dispatch(filterChange());
  };

  //   MODAL
  const handleModalOpen = () => {
    setModal(true);
  };

  const handleModalClose = (event, reason) => {
    if (reason !== "backdropClick") {
      setModal(false);
    }
  };

  // SERVICE CALL-> (USER PAYMENT LIST)
  useEffect(() => {
    console.log(year, type);
    if (!isFetched) {
      dispatch(getGroupPaymentHistory(currentGroupId, "Paid"));
    }
  }, [year, type]);
  // SERVICE CALL-> (USER PAYMENT LIST)

  const theme = useTheme();
  const [value, setValue] = React.useState(2);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Root>
      <PaymentHeader>
        <Button
          onClick={() => navigate(-1)}
          className="backBtn"
          variant="text"
          startIcon={<ArrowBackIcon />}
        >
          Donation
        </Button>
        <div className="">
          <Typography
            variant="p"
            component={"div"}
            gutterBottom
            className="headerTitle"
          >
            Total Donation
          </Typography>
          <Typography
            variant="h5"
            component={"div"}
            gutterBottom
            className="totalAmount"
          >
            ₹ 10,590.90
          </Typography>
        </div>
      </PaymentHeader>
      <Box sx={{ bgcolor: "background.paper", width: "100%" }}>
        <AppBar position="sticky" className="yearTabs">
          <Tabs
            value={value}
            onChange={handleTabChange}
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="2019" {...a11yProps(0)} />
            <Tab label="2020" {...a11yProps(1)} />
            <Tab label="2021" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          {[...new Array(3)].map((item, index) => {
            return (
              <TabPanel value={value} index={index} dir={theme.direction}>
                {/* <FilterSection container justifyContent={"end"}>
                  <Grid item>
                    <FormControl sx={{ m: 1, minWidth: 130, maxHeight: 250 }}>
                      <InputLabel id="demo-controlled-open-select-label">
                        Month
                      </InputLabel>
                      <Select
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        open={typeOpen}
                        onClose={handleTypeClose}
                        onOpen={handleTypeOpen}
                        value={type}
                        label="Type"
                        onChange={handleTypeChange}
                        className="monthSelect"
                        MenuProps={{ PaperProps: { sx: { maxHeight: 250 } } }}
                      >
                        <MenuItem value={"All"}>
                          <em>All</em>
                        </MenuItem>
                        <MenuItem value={1}>JAN</MenuItem>
                        <MenuItem value={2}>FEB</MenuItem>
                        <MenuItem value={3}>MAR</MenuItem>
                        <MenuItem value={4}>APR</MenuItem>
                        <MenuItem value={5}>MAY</MenuItem>
                        <MenuItem value={6}>JUN</MenuItem>
                        <MenuItem value={7}>JUY</MenuItem>
                        <MenuItem value={8}>AUG</MenuItem>
                        <MenuItem value={9}>SEP</MenuItem>
                        <MenuItem value={10}>OCT</MenuItem>
                        <MenuItem value={11}>NOV</MenuItem>
                        <MenuItem value={12}>DEC</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </FilterSection> */}

                <PaymentContainer>
                  <Typography
                    variant="p"
                    mb={2}
                    component="div"
                    className="sectionTitle"
                  >
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

                  {!loading &&
                    paymentHistory.length > 0 &&
                    paymentHistory.map((item, index) => {
                      return <PaymentCard key={index} payment={item} />;
                    })}
                </PaymentContainer>
              </TabPanel>
            );
          })}
        </SwipeableViews>
      </Box>

      <Dialog
        open={modal}
        onClose={handleModalClose}
        onBackdropClick={handleModalClose}
      >
        <DialogTitle>Fill the form</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: "flex", flexWrap: "wrap" }}>
            <FormControl sx={{ m: 1, minWidth: 100 }}>
              <InputLabel htmlFor="demo-dialog-native">Age</InputLabel>
              <Select
                native
                value={year}
                onChange={handleChange}
                input={<OutlinedInput label="Age" id="demo-dialog-native" />}
              >
                <option aria-label="None" value="" />
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 100 }}>
              <InputLabel id="demo-dialog-select-label">Age</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={month}
                onChange={handleMonthChange}
                input={<OutlinedInput label="Age" />}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleModalClose}>Cancel</Button>
          <Button onClick={handleModalClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </Root>
  );
};

export default Donation;

const Root = styled("div")((theme) => ({
  width: "100%",
  "& .MuiContainer-root": {
    paddingTop: "20px",
  },
  "& .MuiMenu-root": {
    maxHeight: 100,
  },
  "& .yearTabs": {
    backgroundColor: "#5156f1",
  },
}));

const MenuItems = styled("div")({
  maxHeight: 100,
});

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

const FilterBtn = styled(Button)({
  minHeight: "42px",
  backgroundColor: "transparent",
  borderColor: "#666666",
  color: "#666666",
});
