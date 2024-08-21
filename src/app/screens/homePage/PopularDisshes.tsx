import React from "react";

import { Box, Container, Stack } from "@mui/material";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { CssVarsProvider } from "@mui/joy/styles";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { CardOverflow } from "@mui/joy";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrievePopularDishes } from "./selector";
import { serverApi } from "../../../lib/config";
import { Product } from "../../../lib/types/product";

/** REDUX SLICE & SELECTOR **/

const popularDishesRetriever = createSelector(
  retrievePopularDishes,
  (popularDishes) => ({ popularDishes })
);

export default function PopularDishes() {
  const { popularDishes } = useSelector(popularDishesRetriever);

  console.log(popularDishes);

  return (
    <div className="popular-dishes-frame">
      <Container>
        <Stack className="popular-section">
          <Box className="category-title">Popular Drinks</Box>
          <Stack className="cards-frame">
            {popularDishes.length !== 0 ? (
              popularDishes.map((ele: Product) => {
                const imagePath = `${serverApi}/${ele.productImages[0]}`;
                return (
                  <CssVarsProvider key={ele._id}>
                    <Card className="card">
                      <CardCover sx={{mt:"15px"}}>
                        <img src={imagePath} alt=""  />
                      </CardCover>
                      
                      <CardContent sx={{ justifyContent: "flex-end", }}>
                        <Stack
                          flexDirection={"row"}
                          justifyContent={"space-between"}
                        >
                          <Typography
                         
                            level="h2"
                            textColor="white"
                            fontSize={"lg"}
                            mb={1}
                            sx={{background: "#FF69B4",
                            padding: "10px",
                            borderRadius: "20px"
                            }}
                          >
                            {ele.productName}
                          </Typography>
                          
                        </Stack>
                      </CardContent>
                      <CardOverflow
                        sx={{
                          display: "flex",
                          background: "#FFF0F5",
                          gap: 1.5,
                          py: 1.5,
                          px: "var(--Card-padding)",
                          borderRadius:"50px",

                          // borderTop: "1px solid ",
                          height: "60px",
                        }}
                      >
                        <Typography
                          startDecorator={<DescriptionOutlinedIcon />}
                          textColor={"#008000"}
                        >
                          {ele.productDesc}

                          <Typography
                            sx={{
                              ml:"100px",
                              fontWeight: "md",
                              color: "#008000",
                              alignItems: "center",
                              display: "flex",
                              justifyContent: "flex-end",

                            }}
                          >
                            {ele.productViews}
                            <VisibilityIcon
                              sx={{
                                fontSize: 25,
                                marginLeft: "5px",
                              }}
                            />
                          </Typography>
                          
                        </Typography>

                       
                      </CardOverflow>
                    </Card>
                  </CssVarsProvider>
                );
              })
            ) : (
              <Box className="no-data">
                {" "}
                Popular products are not available!
              </Box>
            )}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}