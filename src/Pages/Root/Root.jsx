import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Header/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../../Components/Footer/Footer";
import Loader from "../../Components/Loader/Loader";
const Root = () => {
  const navigation = useNavigation();
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    if (navigation.state === "loading") {
      setShowLoader(true);
    } else {
      const timeout = setTimeout(() => setShowLoader(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [navigation.state]);

  return (
    <div>
      <Navbar></Navbar>
      {showLoader && (
        <div className="flex justify-center items-center h-screen">
          <Loader></Loader>
        </div>
      )}
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
