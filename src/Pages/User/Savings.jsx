import React, { useEffect, useState } from "react";
// Styles
import { styled } from "@mui/material/styles";
import {
  Button,
  CircularProgress,
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
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import { PAYMENT_HEAD } from "../../UIElements/Images";
import { Link, useLocation, useNavigate } from "react-router-dom";
import FilterAltRoundedIcon from "@mui/icons-material/FilterAltRounded";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { RecentTransaction } from "../../UIElements/Icons";
import PaymentCard from "../../Components/Payments/PaymentCard";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import { getUserPayments } from "../../redux/actions/UserPayments.action";
import {
  clearPaymentHistory,
  filterChange,
  getGroupPaymentHistory,
  getReportPayments,
} from "../../redux/actions/GroupPaymentHistory.actions";
import { Box, maxHeight } from "@mui/system";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import InfiniteScroll from "react-infinite-scroll-component";

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

const Savings = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // STATE
  const [typeOpen, setTypeOpen] = React.useState(false);
  const [month, setMonth] = useState("All");

  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(10);

  // SELECTORS
  const { paymentHistory, isFetched, filterType } = useSelector(
    (state) => state.groupHistory
  );
  const { currentGroupId, groupInfo } = useSelector((state) => state.groups);
  const { loading } = useSelector((state) => state.loader);
  const { reportPayments } = useSelector((state) => state.groupHistory);

  const location = useLocation();

  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  // const years = ["2021", "2020", "2019"];
  const years = [...reportPayments.map((item) => item.annualYear)];

  // TYPE

  const handleTypeClose = () => {
    setTypeOpen(false);
  };
  const handleTypeOpen = () => {
    setTypeOpen(true);
  };

  // MONTH
  const handleMonthChange = (event) => {
    setSkip(0);
    setLimit(10);
    setMonth(event.target.value);
    dispatch(filterChange());
  };

  useEffect(() => {
    dispatch(clearPaymentHistory());
  }, []);

  // SERVICE CALL-> (USER PAYMENT LIST)
  useEffect(() => {
    dispatch(getReportPayments());
    dispatch(
      getGroupPaymentHistory(
        currentGroupId,
        "Paid",
        years[value],
        month,
        skip,
        limit
      )
    );
  }, [currentGroupId, value, month, skip, limit]);
  // SERVICE CALL-> (USER PAYMENT LIST)

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
    setSkip(0);
    setLimit(10);
    dispatch(filterChange());
  };

  const handleChangeIndex = (index) => {
    setValue(index);
    setSkip(0);
    setLimit(10);
    dispatch(filterChange());
  };

  const fetchData = () => {
    console.log("fetched data");
    setSkip(skip + 10);
  };

  return (
    <Root>
      <PaymentHeader>
        <Button
          component={Link}
          to="/"
          className="backBtn"
          variant="text"
          startIcon={<ArrowBackIcon />}
        >
          Savings
        </Button>
        <div className="">
          <Typography
            variant="p"
            component={"div"}
            gutterBottom
            className="headerTitle"
          >
            Total Balance
          </Typography>
          <Typography
            variant="h5"
            component={"div"}
            gutterBottom
            className="totalAmount"
          >
            ₹ {groupInfo?.balance}
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
            {years.map((item, index) => {
              return item && <Tab label={item} {...a11yProps(index)} />;
            })}
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          {years
            .filter((item) => item !== null && item)
            .map((item, index) => {
              return (
                <TabPanel value={value} index={index} dir={theme.direction}>
                  <FilterSection container justifyContent={"space-between"}>
                    <Grid item pl={2}>
                      <Typography variant="p" component={"div"}>
                        Yearly - {item}
                      </Typography>
                      <Typography variant="h6" component={"div"} gutterBottom>
                        ₹ {reportPayments[value].totalAmount}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <FormControl sx={{ m: 1, minWidth: 100, maxHeight: 250 }}>
                        <InputLabel id="demo-controlled-open-select-label">
                          Month
                        </InputLabel>
                        <Select
                          labelId="demo-controlled-open-select-label"
                          id="demo-controlled-open-select"
                          open={typeOpen}
                          onClose={handleTypeClose}
                          onOpen={handleTypeOpen}
                          value={month}
                          label="Type"
                          onChange={handleMonthChange}
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
                  </FilterSection>

                  <PaymentContainer>
                    <Typography
                      variant="p"
                      mb={2}
                      component="div"
                      className="sectionTitle"
                    >
                      <RecentTransaction width="24" height="24" />
                      Transactions
                    </Typography>
                    {/* <Typography
                    variant="caption"
                    display="block"
                    gutterBottom
                    mb={2}
                    className="transactionDate"
                  >
                    Today, November 4th
                  </Typography> */}

                    {paymentHistory?.length > 0 && (
                      <InfiniteScroll
                        dataLength={paymentHistory.length} //This is important field to render the next data
                        next={fetchData}
                        hasMore={filterType}
                        loader={
                          <MemberSkeleton>
                            <div>
                              <Skeleton
                                variant="circular"
                                width={45}
                                height={45}
                              />
                            </div>
                            <div className="skeletonContent">
                              <Skeleton
                                variant="rectangular"
                                width={"100%"}
                                height={30}
                              />
                              <Skeleton
                                variant="rectangular"
                                width={"100%"}
                                height={10}
                                className="secondText"
                              />
                            </div>
                          </MemberSkeleton>
                        }
                        endMessage={
                          <p style={{ textAlign: "center" }}>
                            <b>Yay! You have seen it all</b>
                          </p>
                        }
                      >
                        {paymentHistory?.map((item, i) => {
                          console.log(item);
                          return <PaymentCard key={i} payment={item} />;
                        })}
                      </InfiniteScroll>
                    )}
                    {paymentHistory.length === 0 &&
                      [...new Array(8)].map((item) => {
                        return (
                          <MemberSkeleton>
                            <div>
                              <Skeleton
                                variant="circular"
                                width={45}
                                height={45}
                              />
                            </div>
                            <div className="skeletonContent">
                              <Skeleton
                                variant="rectangular"
                                width={"100%"}
                                height={30}
                              />
                              <Skeleton
                                variant="rectangular"
                                width={"100%"}
                                height={10}
                                className="secondText"
                              />
                            </div>
                          </MemberSkeleton>
                        );
                      })}
                  </PaymentContainer>
                </TabPanel>
              );
            })}
        </SwipeableViews>
      </Box>
    </Root>
  );
};

export default Savings;

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
  "& .MuiTabs-indicator": {
    backgroundColor: "#fff",
    height: "3px",
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
  marginTop: "20px",
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

const MemberSkeleton = styled("div")({
  display: "flex",
  alignItems: "start",
  gap: "10px",
  marginBottom: "10px",
  "& .skeletonContent": {
    width: "100%",
  },
  "& .secondText": {
    width: "100%",
    marginBlock: "5px",
    flex: "1",
  },
});
