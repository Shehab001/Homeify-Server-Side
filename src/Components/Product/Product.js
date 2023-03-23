import {
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Loader from "../Small/Loader/Loader";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/Context";

const Product = () => {
  const [data, setData] = useState([]);
  const [spin, setSpin] = useState(false);
  const { list, query, rating, price } = useContext(AuthContext);

  //console.log(data);

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
              {data
                .filter((item) => {
                  // console.log(list, query, rating, price[0], item);
                  if (
                    list === "" &&
                    query === "" &&
                    price[0] === 0 &&
                    rating === null
                  ) {
                    // console.log("all");
                    return item;
                  } else if (
                    item.category.toLowerCase() === query.toLowerCase() &&
                    rating === null &&
                    price[0] === 0 &&
                    list === ""
                  ) {
                    console.log("category only");
                    return item;
                  } else if (
                    item.rating == rating &&
                    query === "" &&
                    price[0] === 0 &&
                    list === ""
                  ) {
                    console.log("only rating");
                    return item;
                  } else if (
                    query === "" &&
                    rating == item.rating &&
                    price[0] === null &&
                    list === ""
                  ) {
                    console.log("only rating");
                    return item;
                  } else if (
                    item.name.toLowerCase().includes(list.toLowerCase()) &&
                    query === "" &&
                    rating === null &&
                    price[0] === 0
                  ) {
                    console.log(
                      item.name.toLowerCase().includes(list.toLowerCase())
                    );
                    return item;
                  } else if (
                    item.rating == rating &&
                    item.category.toLowerCase() === query.toLowerCase() &&
                    price[0] === 0 &&
                    list === ""
                  ) {
                    console.log("rating & category");
                    return item;
                  } else if (
                    rating === null &&
                    item.category.toLowerCase() === query.toLowerCase() &&
                    price[0] === 0 &&
                    item.name.toLowerCase().includes(list.toLowerCase())
                  ) {
                    console.log("search & category");
                    return item;
                  } else if (
                    item.rating == rating &&
                    query === "" &&
                    price[0] === 0 &&
                    item.name.toLowerCase().includes(list.toLowerCase())
                  ) {
                    console.log("search & rating");
                    return item;
                  } else if (
                    item.rating == rating &&
                    item.category.toLowerCase() === query.toLowerCase() &&
                    price[0] === 0 &&
                    item.name.toLowerCase().includes(list.toLowerCase())
                  ) {
                    console.log("search & category & rating");
                    return item;
                  } else if (
                    list === "" &&
                    query === "" &&
                    price[0] >= item.price &&
                    rating === null
                  ) {
                    console.log("all");
                    return item;
                  } else if (
                    item.name.toLowerCase().includes(list.toLowerCase()) &&
                    query === "" &&
                    price[0] >= item.price &&
                    rating === null
                  ) {
                    console.log("all");
                    return item;
                  } else if (
                    list === "" &&
                    item.category.toLowerCase() === query.toLowerCase() &&
                    price[0] >= item.price &&
                    rating === null
                  ) {
                    console.log("all");
                    return item;
                  } else if (
                    list === "" &&
                    query === "" &&
                    price[0] >= item.price &&
                    item.rating == rating
                  ) {
                    console.log("all");
                    return item;
                  } else if (
                    list === "" &&
                    item.category.toLowerCase() === query.toLowerCase() &&
                    price[0] >= item.price &&
                    item.rating == rating
                  ) {
                    console.log("all");
                    return item;
                  } else if (
                    item.name.toLowerCase().includes(list.toLowerCase()) &&
                    query === "" &&
                    price[0] >= item.price &&
                    item.rating == rating
                  ) {
                    console.log("all");
                    return item;
                  } else if (
                    item.name.toLowerCase().includes(list.toLowerCase()) &&
                    item.category.toLowerCase() === query.toLowerCase() &&
                    price[0] >= item.price &&
                    item.rating == rating
                  ) {
                    console.log("all");
                    return item;
                  }
                })
                .map((item, index) => (
                  <>
                    {index < 20 && (
                      <>
                        {" "}
                        <Grid md={3} sm={3} xs={4} p={2} onClick={() => {}}>
                          <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                          >
                            {" "}
                            <Link
                              to={`/singleservice/${item._id}`}
                              style={{ textDecoration: "none" }}
                            >
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
                                  image={item.img1}
                                />
                                <Typography
                                  sx={{
                                    fontFamily: "jest",
                                    letterSpacing: "3px",
                                  }}
                                >
                                  {item.name}
                                </Typography>
                              </Card>
                            </Link>
                          </motion.div>
                        </Grid>
                      </>
                    )}
                  </>
                ))}
              {}
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
// else if (
//                     item.name.toLowerCase().includes(list.toLowerCase())
//                   ) {
//                     console.log(item.name.toLowerCase(), list.toLowerCase());
//                     return item;
//                   }
