import React from "react";
import FooterFast from "footer-fast";
import { Box } from "@mui/system";
const Footer = () => {
  return (
    <Box overflow={"hidden"}>
      <FooterFast
        option="1"
        colorTitle="#ffffff"
        colorLabel="#bbbbbb"
        listColumn={[
          {
            title: "About Us",
            options: [
              {
                label: "Development process",
                link: "#",
              },
              {
                label: "Social responsibility",
                link: "#",
              },
              {
                label: "Location & Branch",
                link: "#",
              },
              {
                label: "Career opportunities",
                link: "#",
              },
            ],
          },
          {
            title: "Study Promotion",
            options: [
              {
                label: "Start Up",
                link: "#",
              },
              {
                label: "Programming Library",
                link: "#",
              },
              {
                label: "Source Code & Project",
                link: "#",
              },
            ],
          },
          {
            title: "Partner",
            options: [
              {
                label: "Partner",
                link: "#",
              },
              {
                label: "Scholarship Policy",
                link: "#",
              },
              {
                label: "Community",
                link: "#",
              },
            ],
          },
          {
            title: "Help",
            options: [
              {
                label: "Contact us",
                link: "#",
              },
              {
                label: "FAQs",
                link: "#",
              },
              {
                label: "Education program",
                link: "#",
              },
            ],
          },
        ]}
      />
    </Box>
  );
};
export default Footer;
