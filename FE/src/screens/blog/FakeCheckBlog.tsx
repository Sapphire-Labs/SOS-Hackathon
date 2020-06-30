import React, { useState } from "react";
import { makeStyles, createStyles, Theme, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AssignmentIcon from "@material-ui/icons/Assignment";
import TimelineIcon from "@material-ui/icons/Timeline";
import TabPanel from "../../common/TabPanel";
import FakeCheckTimeline from "./FakeCheckTimeline";
import FakeCheckBlogCard from "./FakeCheckBlogCard";

function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`
  };
}

const useStyles = makeStyles((theme: Theme) => {
  const changePoint = "xs";
  return createStyles({
    gridView: {
      flexGrow: 1,
      [theme.breakpoints.only(changePoint)]: {
        display: "none"
      }
    },
    tabbedView: {
      // backgroundColor: theme.palette.background.paper,
      width: "100%",
      display: "none",
      [theme.breakpoints.only(changePoint)]: {
        display: "block"
      }
    }
  });
});

const FakeCheckBlogGridded = ({ classes }) => (
  <Grid container className={classes.gridView} direction="row">
    <Grid item xs={12} sm={6} md={8} style={{ padding: 24 }}>
      <FakeCheckBlogCard />
    </Grid>
    <Grid item sm={6} md={4}>
      <FakeCheckTimeline />
    </Grid>
  </Grid>
);

const FakeCheckBlogTabbed = ({ classes, theme }) => {
  const [categoryIndex, setCategoryIndex] = useState(0);

  const handleChange = (_: React.ChangeEvent<{}>, newValue: number) => {
    setCategoryIndex(newValue);
  };

  return (
    <div className={classes.tabbedView}>
      <AppBar position="static" color="default">
        <Tabs
          value={categoryIndex}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          aria-label="Blog Tabs"
        >
          <Tab icon={<AssignmentIcon />} label="Posts" {...a11yProps(0)} />
          <Tab icon={<TimelineIcon />} label="Timeline" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={categoryIndex} index={0} dir={theme.direction}>
        <FakeCheckBlogCard />
      </TabPanel>
      <TabPanel value={categoryIndex} index={1} dir={theme.direction}>
        <FakeCheckTimeline />
      </TabPanel>
    </div>
  );
};

const FaceCheckBlog = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <>
      <FakeCheckBlogGridded classes={classes} />
      <FakeCheckBlogTabbed classes={classes} theme={theme} />
    </>
  );
};

export default FaceCheckBlog;