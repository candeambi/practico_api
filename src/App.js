import './App.css';
import Temp from './componentes/Temp.js';
//import Hours from './componentes/Hours';
import styled from 'styled-components';
import UvIndex from './componentes/UvIndex';
import Wind from './componentes/Wind';
import SunriseSunset from './componentes/SunriseSunset';
import Humidity from './componentes/Humidity';
import Visibility from './componentes/Visibility';
import AirQuality from './componentes/AirQuality'


const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: 30% 70%; /* Columna 1: 30%, Columna 2: 70% */
  gap: 20px;
  padding: 20px;
  background-color: #0b83b3;
  color: #fff;

`;

const Temperature= styled.div`
  grid-column: 1 / 2; 
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Information = styled.div`
  grid-column: 2 / 3; 
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const DetailsContainer = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 5px;
`;

const data = {
    "latitude": 52.52,
    "longitude": 13.419998,
    "generationtime_ms": 0.1150369644165039,
    "utc_offset_seconds": -10800,
    "timezone": "America/Sao_Paulo",
    "timezone_abbreviation": "-03",
    "elevation": 38.0,
    "current_weather": {
        "temperature": 12.7,
        "windspeed": 18.6,
        "winddirection": 261,
        "weathercode": 2,
        "is_day": 0,
        "time": "2023-10-03T21:30"
    },
    "hourly_units": {
        "time": "iso8601",
        "temperature_2m": "°C",
        "relativehumidity_2m": "%",
        "visibility": "m"
    },
    "hourly": {
        "time": [
            "2023-10-03T00:00",
            "2023-10-03T01:00",
            "2023-10-03T02:00",
            "2023-10-03T03:00",
            "2023-10-03T04:00",
            "2023-10-03T05:00",
            "2023-10-03T06:00",
            "2023-10-03T07:00",
            "2023-10-03T08:00",
            "2023-10-03T09:00",
            "2023-10-03T10:00",
            "2023-10-03T11:00",
            "2023-10-03T12:00",
            "2023-10-03T13:00",
            "2023-10-03T14:00",
            "2023-10-03T15:00",
            "2023-10-03T16:00",
            "2023-10-03T17:00",
            "2023-10-03T18:00",
            "2023-10-03T19:00",
            "2023-10-03T20:00",
            "2023-10-03T21:00",
            "2023-10-03T22:00",
            "2023-10-03T23:00"
        ],
        "temperature_2m": [
            14.3,
            14.0,
            14.2,
            15.5,
            16.8,
            19.0,
            21.3,
            23.2,
            24.8,
            24.2,
            22.9,
            22.4,
            22.4,
            20.1,
            17.2,
            16.0,
            15.5,
            14.8,
            14.2,
            13.5,
            13.0,
            12.8,
            12.5,
            12.4
        ],
        "relativehumidity_2m": [
            86,
            87,
            89,
            80,
            73,
            66,
            61,
            56,
            50,
            50,
            58,
            61,
            58,
            70,
            88,
            82,
            75,
            74,
            80,
            81,
            82,
            81,
            83,
            83
        ],
        "visibility": [
            24140.00,
            24140.00,
            24140.00,
            24140.00,
            24140.00,
            24140.00,
            24140.00,
            24140.00,
            24140.00,
            24140.00,
            24140.00,
            24140.00,
            24140.00,
            4300.00,
            11400.00,
            14200.00,
            24140.00,
            22720.00,
            18660.00,
            24140.00,
            24140.00,
            24140.00,
            24140.00,
            24140.00
        ],
        "european_aqi": [
            28,
            27,
            26,
            24,
            23,
            21,
            20,
            18,
            17,
            15,
            15,
            14,
            15,
            18,
            23,
            27,
            29,
            31,
            32,
            34,
            36,
            37,
            38,
            39,
            39,
            37,
            34,
            32,
            30,
            28,
            26,
            25,
            24,
            24,
            24,
            24,
            24,
            25,
            26,
            26,
            27,
            28,
            28,
            26,
            22,
            20,
            18,
            16,
            15,
            15,
            14,
            14,
            14,
            14,
            14,
            15,
            16,
            18,
            22,
            26,
            30,
            32,
            34,
            34,
            35,
            36,
            35,
            32,
            27,
            24,
            23,
            22,
            23,
            24,
            25,
            26,
            26,
            26,
            26,
            24,
            22,
            20,
            22,
            24,
            26,
            28,
            28,
            29,
            30,
            30,
            29,
            27,
            23,
            20,
            20,
            19,
            19,
            18,
            16,
            15,
            14,
            12,
            11,
            12,
            14,
            17,
            21,
            26,
            29,
            31,
            32,
            32,
            33,
            33,
            33,
            30,
            28,
            25,
            25,
            26
        ]
    },
    "daily_units": {
        "time": "iso8601",
        "weathercode": "wmo code",
        "temperature_2m_max": "°C",
        "temperature_2m_min": "°C",
        "sunrise": "iso8601",
        "sunset": "iso8601",
        "uv_index_max": "",
        "windspeed_10m_max": "km/h"
    },
    "daily": {
        "time": [
            "2023-10-03"
        ],
        "weathercode": [
            61
        ],
        "temperature_2m_max": [
            24.8
        ],
        "temperature_2m_min": [
            12.4
        ],
        "sunrise": [
            "2023-10-03T02:10"
        ],
        "sunset": [
            "2023-10-03T13:40"
        ],
        "uv_index_max": [
            3.30
        ],
        "windspeed_10m_max": [
            25.5
        ]
    }
}


function App() {
  return (
    <DashboardContainer>
            <h1>Córdoba, Argentina</h1>
      <Temperature>
        <Temp />
      </Temperature>
      <Information>
        <h2>Hoy</h2>
        {/* <Hours /> */}
        <h2>Información destacada</h2>
        <DetailsContainer>
          <UvIndex />
          <Wind />
          <SunriseSunset />
          <Humidity />
          <Visibility />
          <AirQuality />
        </DetailsContainer>
        
      </Information>
    </DashboardContainer>
  );
}

export default App;
