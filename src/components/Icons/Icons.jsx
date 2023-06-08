import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faCloudBolt,
  faCloudRain,
  faUmbrella,
  faSnowflake,
  faSun,
  faSmog,
  faHurricane,
  faDroplet,
  faWind,
  faCircleExclamation,
  faRainbow,
} from "@fortawesome/free-solid-svg-icons";

export const Icons = ({ iconName, fontSize }) => {
  const weather = [
    { name: "Thunderstorm", icon: faCloudBolt },
    { name: "Clouds", icon: faCloud },
    { name: "Drizzle", icon: faUmbrella },
    { name: "Rain", icon: faCloudRain },
    { name: "Snow", icon: faSnowflake },
    { name: "Clear", icon: faSun },
    { name: "Mist", icon: faSmog },
    { name: "Smoke", icon: faSmog },
    { name: "Haze", icon: faSmog },
    { name: "Dust", icon: faSmog },
    { name: "Fog", icon: faSmog },
    { name: "Sand", icon: faSmog },
    { name: "Ash", icon: faSmog },
    { name: "Squall", icon: faSmog },
    { name: "Tornado", icon: faHurricane },
    { name: "Humidity", icon: faDroplet },
    { name: "Wind", icon: faWind },
    { name: "Error", icon: faCircleExclamation },
    { name: "Rainbow", icon: faRainbow },
  ];
  const item = weather.find((item) => item.name === iconName);

  return (
    <FontAwesomeIcon
      icon={iconName !== "" ? item.icon : faCircleExclamation}
      fontSize={fontSize}
      color="#ff2c55"
    />
  );
};
