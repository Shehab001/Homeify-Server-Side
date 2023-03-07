import {
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Loader from "../Small/Loader/Loader";

const Product = () => {
  const [data, setData] = useState([]);
  const [spin, setSpin] = useState(false);
  // console.log(data);

  useEffect(() => {
    setSpin(true);
    fetch("http://localhost:5000/allproduct")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setSpin(false);
      });
  }, []);

  return (
    <>
      <Box mx={{ xs: 0, sm: 10 }}>
        {spin === true ? (
          <Box sx={{ my: 20 }}>
            <Loader></Loader>
          </Box>
        ) : (
          <>
            {" "}
            <Grid container spacing={5} width={"100%"} mx={"auto"}>
              {data.map((product, index) => (
                <>
                  {index < 20 && (
                    <>
                      {" "}
                      <Grid md={3} sm={6} xs={12} p={2} onClick={() => {}}>
                        <motion.div
                          initial={{ x: -150, opacity: 0 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 1 }}
                        >
                          {" "}
                          <Card
                            sx={{
                              backgroundColor: "#e6e6e4",
                              cursor: "pointer",
                              "&:hover": {
                                transform: "scale(1.1)",
                                transition: "1s",
                              },
                            }}
                          >
                            <CardMedia
                              component="img"
                              alt="green iguana"
                              height="140"
                              image={product.img1}
                            />
                            <Typography
                              sx={{ fontFamily: "jest", letterSpacing: "3px" }}
                            >
                              {product.name}
                            </Typography>
                          </Card>
                        </motion.div>
                      </Grid>
                    </>
                  )}
                </>
              ))}
            </Grid>
            <motion.div
              initial={{ x: -150, opacity: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              {" "}
              <Box sx={{ justifyContent: "center", display: "flex", mt: 5 }}>
                <Stack spacing={2}>
                  <Pagination count={10} shape="rounded" />
                </Stack>
              </Box>
            </motion.div>
          </>
        )}
      </Box>
    </>
  );
};

export default Product;
