import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";

import c from "./SinglePatient.module.css";

const SinglePatient = ({ image, name, diagnostic, bloodGroup }) => {
  return (
 
    <Box
      sx={{
        width: "80%",
        height: 113,
        borderRadius: "13.36px",
        border: "2px solid #0089FF",
        background: "#fff",
      }}
      margin={{
        lg: "10px 30px",
        md: "5xp 10px",
        sm: "5px 10px",
        xs: "5px 10px",
      }}
    >
      <Grid
        container
        direction="row"
        alignItems="center"
        // justifyContent="center"
        width="100%"
        height="100%"
        wrap="nowrap"
      >
        <Grid item pr="20.78px" pl="9.8px">
          <img src={image} alt="doctor" className={c.image} />
        </Grid>
        <Grid item>
          <Stack direction="column">
            <Typography
              variant="h6"
              sx={{
                fontFamily: "'Rubik', sans-serif",
                fontWeight: 500,
                color: "#5B6889",
                fontSize: "16.92px",
              }}
            >
              {name}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "'Rubik', sans-serif",
                fontWeight: 400,
                fontStyle: "italic",
                fontSize: "12.46px",
                color: "#7890A0",
              }}
            >
              Diagnostic: {diagnostic}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "'Rubik', sans-serif",
                fontWeight: 400,
                fontStyle: "italic",
                fontSize: "12.46px",
                color: "#7890A0",
              }}
            >
              Blood Group: {bloodGroup}
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
    
  );
};

export default SinglePatient;
// import React from "react";
// import { Box, Grid, Stack, Typography } from "@mui/material";

// import c from "./SinglePatient.module.css";

// const SinglePatient = ({ image, name, diagnostic, bloodGroup }) => {
//   return (
//     <Box
//       sx={{
//         width: 304,
//         height: 113,
//         borderRadius: "13.36px",
//         border: "2px solid #0089FF",
//         background: "#fff",
//       }}
//       margin={{
//         lg: "10px 30px",
//         md: "5xp 10px",
//         sm: "5px 10px",
//         xs: "5px 10px",
//       }}
//     >
//       <Grid
//         container
//         direction="row"
//         alignItems="center"
//         justifyContent="center"
//         width="100%"
//         height="100%"
//         wrap="nowrap"
//       >
//         <Grid item pr="20.78px" pl="9.8px">
//           <img src={image} alt="doctor" className={c.image} />
//         </Grid>
//         <Grid item>
//           <Stack direction="column">
//             <Typography
//               variant="h6"
//               sx={{
//                 fontFamily: "'Rubik', sans-serif",
//                 fontWeight: 500,
//                 color: "#5B6889",
//                 fontSize: "16.92px",
//               }}
//             >
//               {name}
//             </Typography>
//             <Typography
//               variant="body1"
//               sx={{
//                 fontFamily: "'Rubik', sans-serif",
//                 fontWeight: 400,
//                 fontStyle: "italic",
//                 fontSize: "12.46px",
//                 color: "#7890A0",
//               }}
//             >
//               Diagnostic: {diagnostic}
//             </Typography>
//             <Typography
//               variant="body1"
//               sx={{
//                 fontFamily: "'Rubik', sans-serif",
//                 fontWeight: 400,
//                 fontStyle: "italic",
//                 fontSize: "12.46px",
//                 color: "#7890A0",
//               }}
//             >
//               Blood Group: {bloodGroup}
//             </Typography>
//           </Stack>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default SinglePatient;
