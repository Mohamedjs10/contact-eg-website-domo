import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Autocomplete as AutocompleteInput } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useRouter } from "next/router";
import { colors } from "../../utils/const";
import en from "../../../locales/en";
import ar from "../../../locales/ar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  GoogleMap,
  LoadScript,
  ScriptLoaded,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
const governates = [
  { label: "القاهرة", id: 1 },
  { label: "الجيزة", id: 2 },
  { label: "الاسكندرية", id: 3 },
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
  const [markers, setMarkers] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    setMapInstance(false);
    fetch(`https://api-mobile.contact.eg/general/branches?lang=${locale}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((value) => {
        console.log(value);
        const branches = value?.map((item, index) => {
          return {
            id: index + 1,
            name: item.address,
            position: { lat: item.latitude, lng: item.longitude },
          };
        });
        console.log(branches);
        setMarkers(branches);
        setMapInstance(true);
      })
      .catch((err) => console.log(err));
  }, []);

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
              options={governates}
              onChange={(e) => {
                console.log(e.target.innerHTML);
                setMarkers([
                  {
                    id: 1,
                    name: "name",
                    position: { lat: 30.04048, lng: 31.20948 },
                  },
                ]);
              }}
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
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
          </Select>
        </Box>
      </Box>
      <Box sx={{ background: "white" }}>
        <LoadScript googleMapsApiKey="AIzaSyBUQUZh1KHcrl2R-tbouYTowdRxjZcLODE">
          <GoogleMap
            id="map"
            mapContainerStyle={mapContainerStyle}
            center={{ lat: 30.04048, lng: 31.20948 }}
            zoom={10}
            // onLoad={(map) => setTimeout(() => setMapInstance(map))}
          >
            {mapInstance &&
              markers?.map(({ id, name, position }) => (
                <>
                  <Marker
                    key={id}
                    position={position}
                    onLoad={onLoad}
                    onClick={(marker) => {
                      setSelected([id]);
                    }}
                    icon={"/images/marker.png"}
                  />
                  {selected.includes(id) && (
                    <InfoWindow
                      onCloseClick={() => setSelected([])}
                      onLoad={onLoad}
                      position={position}
                    >
                      <Box
                        sx={{
                          color: "#1169a8",
                          background: `white`,
                          width: "350px",
                          textAlign: t.textAlign,
                          padding: "10px 25px",
                        }}
                      >
                        <ContentCopyIcon
                          sx={{ cursor: "pointer" }}
                          onClick={() => {
                            navigator.clipboard.writeText(
                              `http://maps.google.com/maps?z=12&t=m&q=loc:${position.lat}+${position.lng}`
                            );
                            toast.success(t.clipboardMsg, {
                              position: "top-center",
                              autoClose: 5000,
                              hideProgressBar: true,
                              closeOnClick: true,
                              pauseOnHover: true,
                              draggable: true,
                              progress: undefined,
                              theme: "colored",
                            });
                          }}
                        />
                        <Typography
                          onClick={() =>
                            window.open(
                              `http://maps.google.com/maps?z=12&t=m&q=loc:${position.lat}+${position.lng}`,
                              "_blank"
                            )
                          }
                          sx={{ cursor: "pointer", mt: 2, lineHeight: 1.2 }}
                          variant="h6"
                        >
                          {name}
                        </Typography>
                      </Box>
                    </InfoWindow>
                  )}
                </>
              ))}
          </GoogleMap>
        </LoadScript>
      </Box>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={locale === "en" ? false : true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Box>
  );
}
