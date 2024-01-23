import React from "react";
import { Stack } from "@mui/material";

import { categories } from "../utils/constants";

const Categories = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(category.name)}
        style={{
          background: category.name === selectedCategory && "#595C5D",
          color: "#A4F0F5",
        }}
        key={category.name}
      >
        <span style={{ color: category.name === selectedCategory ? "white" : "green", marginRight: "20px" }}>
          {category.icon}
        </span>
        <span style={{ opacity: category.name === selectedCategory ? "1" : "1" }}>
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Categories;
