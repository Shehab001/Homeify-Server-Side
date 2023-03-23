import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/Context";
import Loader from "../Small/Loader/Loader";
import AdminDashboard from "./Admin/AdminDashboard";
import SellerDashboard from "./Seller/SellerDashboard";
import UserDashboard from "./User/UserDashboard";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [spin, setSpin] = useState(false);
  //console.log(user.uid, data);

  useEffect(() => {
    setSpin(true);
    fetch(`http://localhost:5000/user/${user.uid}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setSpin(false);
      });
  }, [user]);

  return (
    <>
      {spin === true ? (
        <Box my={20}>
          <Loader></Loader>
        </Box>
      ) : (
        <Box>
          {data?.role === "user" ? (
            <AdminDashboard></AdminDashboard>
          ) : data?.role === "seller" ? (
            <SellerDashboard></SellerDashboard>
          ) : (
            <UserDashboard></UserDashboard>
          )}
        </Box>
      )}
    </>
  );
};

export default Dashboard;
