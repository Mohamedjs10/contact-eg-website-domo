import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Autocomplete as AutocompleteInput } from "@mui/material";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useRouter } from "next/router";
import { colors } from "../../utils/const";
import en from "../../../locales/en";
import ar from "../../../locales/ar";
import {
  GoogleMap,
  LoadScript,
  ScriptLoaded,
  Marker,
  Autocomplete,
} from "@react-google-maps/api";
const top100Films = [
  { label: "القاهرة", id: 1 },
  { label: "الجيزة", id: 2 },
  { label: "الاسكندرية", id: 3 },
];

const markers = [
  {
    id: 1,
    name: "Chicago, Illinois",
    position: { lat: 30.20876, lng: 31.18906 },
  },
  {
    id: 2,
    name: "Denver, Colorado",
    position: { lat: 30.09776, lng: 31.42906 },
  },
  {
    id: 3,
    name: "Los Angeles, California",
    position: { lat: 30.09776, lng: 31.32906 },
  },
  {
    id: 4,
    name: "New York, New York",
    position: { lat: 30.08776, lng: 31.32906 },
  },
  { id: 5, position: { lat: 30.04048, lng: 31.20948 } },
];

const mapContainerStyle = {
  height: "500px",
  width: "80%",
  margin: "auto",
  transform: "translateY(-150px)",
};

export default function MapBox() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;

  const [mapInstance, setMapInstance] = useState(false);
  const [branch, setBranch] = useState("");

  const onLoad = (marker) => {};

  const handleBranchChange = (event) => {
    setBranch(event.target.value);
  };
  return (
    <Box>
      <Box
        sx={{
          background: "#2D317F",
          pt: 10,
          pb: 30,
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          alignItems: "center",
        }}
        className="horizontal-safe-padding"
      >
        <Box
          sx={{
            textAlign: {
              xs: "center",
              md: t.textAlign,
            },
          }}
        >
          <Typography variant="h6">{t.map.title}</Typography>
          <Typography variant="subtitle">{t.map.subTitle}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            alignItems: "center",
          }}
        >
          <Box>
            <AutocompleteInput
              noOptionsText={t.map.noOption}
              size="small"
              disablePortal
              id="search-box"
              options={top100Films}
              sx={{
                width: 250,
                mx: 1,
                mt: {
                  xs: 3,
                  md: 1,
                },
              }}
              classes={{
                "& span": {
                  "& svg": {
                    "& path": {
                      d: "path('M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z')",
                    },
                  },
                },
              }}
              renderInput={(params) => (
                <TextField
                  placeholder={t.map.placeholderGovernate}
                  sx={{
                    borderRadius: 1,
                    bgcolor: "white",
                    width: "100%",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "lightgrey",
                      },
                      "&:hover fieldset": {
                        borderColor: "transparent",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "transparent",
                      },
                    },
                  }}
                  {...params}
                />
              )}
            />
          </Box>

          <Select
            IconComponent={() => (
              <Box
                component="img"
                src="/images/Icon.png"
                sx={{
                  width: 15,
                  display: "inline-block",
                  mx: 1,
                }}
              />
            )}
            sx={{
              borderRadius: 1,
              bgcolor: "white",
              width: 250,
              mx: 1,
              mt: 1,
              ".MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(228, 219, 233, 0.25)",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(228, 219, 233, 0.25)",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(228, 219, 233, 0.25)",
              },
              ".MuiSvgIcon-root ": {
                fill: "white !important",
              },
            }}
            size="small"
            defaultValue="none"
            onChange={handleBranchChange}
          >
            <MenuItem sx={{ color: "#bcbcbc" }} value="none" disabled>
              {t.map.placeholderBranch}
            </MenuItem>
            <MenuItem value={10}>1</MenuItem>
            <MenuItem value={20}>2</MenuItem>
            <MenuItem value={30}>3</MenuItem>
          </Select>
        </Box>
      </Box>
      <Box sx={{ background: "white" }}>
        <LoadScript googleMapsApiKey="AIzaSyBUQUZh1KHcrl2R-tbouYTowdRxjZcLODE">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={{ lat: 30.04048, lng: 31.20948 }}
            zoom={10}
            onLoad={(map) => setTimeout(() => setMapInstance(map))}
          >
            {mapInstance &&
              markers.map(({ id, name, position }) => (
                <Marker
                  key={id}
                  position={position}
                  onLoad={onLoad}
                  onClick={() => console.log(position)}
                  icon={
                    "/images/marker.png"
                    // "https://cdn.iconscout.com/icon/premium/png-512-thumb/map-824-341998.png?f=avif&w=42"
                  }
                />
              ))}
          </GoogleMap>
        </LoadScript>
      </Box>
    </Box>
  );
}
