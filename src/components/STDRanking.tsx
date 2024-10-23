import React from 'react';
import { Box, Typography, Card, CardContent, Avatar, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import { cardsData } from "../Mock/stdRanking";

const STDRanking: React.FC = () => {
  const sortedCards = cardsData
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((card, index) => ({
      ...card,
      position: index + 1,
    }));

  return (
    <Box sx={{
      width: "100%",
      height: "100%",
      borderRadius: "12px",
      bgcolor: "#fff",
      display: "flex",
      flexDirection: 'column',
      justifyContent: "center",
      boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
      mb: '5%'
    }}>
      {/* Header section with Typography and Button */}
      <Box sx={{paddingLeft:'5%', marginBottom: 2,paddingTop:'2%'}}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          อันดับคนที่มาเร็วที่สุด
        </Typography>

      </Box>


      {/* Cards Grid */}
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {sortedCards.map((card, index) => (
          <Grid item key={index}>
            <Card sx={{ backgroundColor: card.backgroundColor, width: "100%",color: '#fff', borderRadius: "12px", height: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
              <CardContent>
                <Box display="flex" justifyContent="center" mb={2}>
                  <Avatar alt={card.name} src={card.imageUrl} sx={{ width: 55, height: 55 }} />
                </Box>
                <Typography variant="subtitle1" align="center">{card.name}</Typography>
                <Typography variant="caption" align="center" display="block" gutterBottom>{card.className}</Typography>
                <Typography variant="h4" align="center">{card.score}%</Typography>
                <Typography variant="button" align="center" display="block" sx={{ mt: 1, backgroundColor: '#fff', color: card.backgroundColor, borderRadius: 1, px: 2, py: 0.5 }}>
                  อันดับที่ {card.position}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default STDRanking;
