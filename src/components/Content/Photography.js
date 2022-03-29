import React from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

let itemData = [];
function initPhotoData() {
  for (var i = 1; i < 48; i++) {
    itemData.push({
      img: "/assets/Photography/img (" + i + ").jpg",
      title: "image " + i,
    });
  }
}
initPhotoData();

class Photography extends React.Component {
  render() {
    return (
      <Fade in={true}>
        {/* CONTAINER */}
        <Box>
          {/* HEADER */}
          <Box>
            <Typography variant="h1">Photography</Typography>
          </Box>
          {/* CONTENT */}
          <Box sx={{ pt: 5 }}>
            <ImageList variant="masonry" cols={3} gap={20}>
              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
        </Box>
      </Fade>
    );
  }
}

export default Photography;
