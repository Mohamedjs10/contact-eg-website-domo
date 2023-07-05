import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Autocomplete as AutocompleteInput } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useRouter } from "next/router";
import en from "../../../locales/en";
import ar from "../../../locales/ar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

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
  const [markers, setMarkers] = useState([]);
  const [branches, setBranches] = useState([]);
  const [selected, setSelected] = useState([]);
  const [center, setCenter] = useState({ lat: 30.04048, lng: 31.20948 });
  const [zoom, setZoom] = useState(10);

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
        const branches = value?.map((item, index) => {
          return {
            id: index + 1,
            label: item.address,
            name: item.address,
            position: { lat: item.latitude, lng: item.longitude },
          };
        });

        setMarkers(branches);
        setBranches(branches);
        setCenter({ lat: 30.04048, lng: 31.20948 });
        setZoom(10);
        setMapInstance(true);
      })
      .catch((err) => {
        setMapInstance(false);
      });
  }, []);

  const onLoad = (marker) => {};

  const handleBranchChange = (event, newVal, reason) => {
    if (reason === "clear") {
      setMarkers(branches);
      setZoom(10);
      setCenter({ lat: 30.04048, lng: 31.20948 });
      return;
    } else {
      let branch = branches.find(
        (marker, index) =>
          index == event?.target?.getAttribute("data-option-index")
      );
      setZoom(14);
      setMarkers([branch]);
      setCenter(branch?.position);
    }
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
          <AutocompleteInput
            noOptionsText={t.map.noOption}
            size="small"
            disablePortal
            id="search-box"
            options={branches}
            onChange={handleBranchChange}
            sx={{
              width: 350,
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
            renderInput={(params) => {
              return (
                <TextField
                  placeholder={t.map.placeholderBranch}
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
              );
            }}
          />
        </Box>
      </Box>
      <Box sx={{ background: "white" }}>
        <LoadScript googleMapsApiKey="AIzaSyBUQUZh1KHcrl2R-tbouYTowdRxjZcLODE">
          <GoogleMap
            id="map"
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={zoom}
            // onLoad={(map) => setTimeout(() => setMapInstance(map))}
          >
            {mapInstance &&
              markers?.map(({ id, name, position }) => (
                <Box key={id}>
                  <Marker
                    // key={id}
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
                </Box>
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
