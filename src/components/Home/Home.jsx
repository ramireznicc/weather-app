import { useState } from "react";
import {
  IconButton,
  TextField,
  Typography,
  Stack,
  Box,
  Slide,
} from "@mui/material";
import { Icons } from "../Icons/Icons";
import { Search } from "@mui/icons-material";
import axios from "axios";

export const Home = () => {
  const [error, setError] = useState(false);
  const [data, setData] = useState({
    name: "",
    country: "",
    temp: 0,
    weather: "",
    wind: 0,
    humidity: 0,
  });
  const [city, setCity] = useState("");

  const handleSearch = () => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=277e668a19c681cb57cf26eec78b2b4d&&units=metric`;
    axios
      .get(apiUrl)
      .then((res) => {
        setData({
          ...data,
          name: res.data.name,
          country: res.data.sys.country,
          temp: res.data.main.temp,
          weather: res.data.weather[0].main,
          wind: (res.data.wind.speed * 3.6).toFixed(1),
          humidity: res.data.main.humidity,
        });
        setError(false);
      })
      .catch(() => setError(true));
    setCity("");
  };

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") if (city !== "") handleSearch();
  };

  return (
    <>
      <Typography
        color="text.light"
        variant="h4"
        fontWeight={700}
        py="16px"
        alignSelf="flex-start"
      >
        The Weather app.
      </Typography>
      <Stack direction="row" alignItems="center" gap="12px" width="100%">
        <TextField
          value={city}
          color="primary"
          id="city"
          size="small"
          variant="outlined"
          label="Enter city name"
          fullWidth={true}
          sx={{ input: { color: "text.light" } }}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <IconButton color="primary" onClick={handleSearch}>
          <Search />
        </IconButton>
      </Stack>
      {data.name === "" ? null : (
        <Slide timeout={1000} direction="up" mountOnEnter in={true}>
          <Box
            my="16px"
            sx={{
              height: "450px",
              maxWidth: "500px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-evenly",
              backgroundColor: "background.paper",
              width: "100%",
              borderRadius: "12px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
              p: "16px",
              gap: "16px",
            }}
          >
            {error ? (
              <Stack gap="1rem">
                <Typography variant="h6" fontWeight={500}>
                  Please, enter a valid city name.
                </Typography>
                <Icons iconName="Error" fontSize="3rem" />
              </Stack>
            ) : (
              <>
                <Typography color="text.dark" variant="h4" fontWeight={700}>
                  {data.name}, {data.country}
                </Typography>
                <Typography variant="h5" fontWeight={500}>
                  {data.weather}
                </Typography>
                <Icons iconName={data.weather} fontSize="9.4rem" />
                <Typography letterSpacing=".2rem" variant="h3" fontWeight={700}>
                  {data.temp.toFixed(1)}°
                </Typography>
                <Stack direction="row" gap="4rem">
                  <Stack
                    direction="row"
                    alignItems="center"
                    gap="1rem"
                    justifyContent="center"
                  >
                    <Icons iconName="Humidity" fontSize="2.6rem" />
                    <Stack direction="column" alignItems="center">
                      <Typography lineHeight="22px" variant="h6">
                        {data.humidity}%
                      </Typography>
                      <Typography lineHeight="22px" fontWeight={500}>
                        Humidity
                      </Typography>
                    </Stack>
                  </Stack>
                  <Stack
                    direction="row"
                    alignItems="center"
                    gap="1rem"
                    justifyContent="center"
                  >
                    <Icons iconName="Wind" fontSize={"2.6rem"} />
                    <Stack direction="column" alignItems="center">
                      <Typography lineHeight="22px" variant="h6">
                        {data.wind} km/h
                      </Typography>
                      <Typography lineHeight="22px" fontWeight={500}>
                        Wind
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </>
            )}
          </Box>
        </Slide>
      )}
    </>
  );
};
