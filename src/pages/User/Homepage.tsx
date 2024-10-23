import SummaryChart from '../../components/SummaryChart';
import StudentCountCard from '../../components/StudentCount';
import Calendar from '../../components/Calendar';
import STDRanking from '../../components/STDRanking';
import {  Box, CssBaseline, Grid } from '@mui/material';
import Navbar from '../../components/Navbar';

type Props = {}

const Homepage = (props: Props) => {
  return (
    < >
      <CssBaseline />
      <Navbar />
      <Box sx={{
        width: 'auto',
        height: '100%',
        maxHeight: '1920px',
        backgroundColor: '#EDF1FF',
      }}>
      <Grid container spacing={4} sx={{
        paddingX: '8%',
        justifyContent: 'center',
        mt: '3%',
        mb: '1%',
        gap: 1
      }}>
        {/* Summary Chart */}
        <Grid item lg={8} md={8} xs={12}>
          <SummaryChart />
        </Grid>

        {/* Student Count */}
        <Grid item lg={4} md={4} xs={12}>
          <StudentCountCard />
        </Grid>

        {/* Calendar */}
        <Grid item lg={4} md={4} xs={12}>
          <Calendar />
        </Grid>

        {/* Ranking */}
        <Grid item lg={8} md={8} xs={12}>
          <STDRanking />
        </Grid>
      </Grid>
        </Box>
    </>
  );
}

export default Homepage;
