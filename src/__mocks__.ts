import faker from "faker";

export const weatherResponseMock = {
  // data: {
    message: "data fetched successfully",
    data: {
      "lat": 36.78,
      "lon": -122.08,
      "timezone": "America/Los_Angeles",
      "timezone_offset": -25200,
      "current": {
          "dt": 1633908277,
          "sunrise": 1633875087,
          "sunset": 1633916319,
          "temp": 291.31,
          "feels_like": 291.09,
          "pressure": 1016,
          "humidity": 73,
          "dew_point": 286.4,
          "uvi": 2.1,
          "clouds": 2,
          "visibility": 10000,
          "wind_speed": 5.37,
          "wind_deg": 293,
          "wind_gust": 6.17,
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ]
      },
      "hourly": [
          {
              "dt": 1633824000,
              "temp": 291.24,
              "feels_like": 291.14,
              "pressure": 1019,
              "humidity": 78,
              "dew_point": 287.35,
              "uvi": 0.92,
              "clouds": 0,
              "visibility": 10000,
              "wind_speed": 6.74,
              "wind_deg": 295,
              "wind_gust": 9.07,
              "weather": [
                  {
                      "id": 800,
                      "main": "Clear",
                      "description": "clear sky",
                      "icon": "01d"
                  }
              ]
          },
          {
              "dt": 1633827600,
              "temp": 292.77,
              "feels_like": 291.96,
              "pressure": 1019,
              "humidity": 45,
              "dew_point": 280.52,
              "uvi": 0.22,
              "clouds": 0,
              "visibility": 10000,
              "wind_speed": 7.4,
              "wind_deg": 298,
              "wind_gust": 9.61,
              "weather": [
                  {
                      "id": 800,
                      "main": "Clear",
                      "description": "clear sky",
                      "icon": "01d"
                  }
              ]
          },
          {
              "dt": 1633831200,
              "temp": 290.38,
              "feels_like": 290.2,
              "pressure": 1019,
              "humidity": 78,
              "dew_point": 286.51,
              "uvi": 0,
              "clouds": 0,
              "visibility": 10000,
              "wind_speed": 6.36,
              "wind_deg": 321,
              "wind_gust": 7.7,
              "weather": [
                  {
                      "id": 800,
                      "main": "Clear",
                      "description": "clear sky",
                      "icon": "01n"
                  }
              ]
          },
          {
              "dt": 1633834800,
              "temp": 288.93,
              "feels_like": 288.52,
              "pressure": 1020,
              "humidity": 75,
              "dew_point": 284.51,
              "uvi": 0,
              "clouds": 0,
              "visibility": 10000,
              "wind_speed": 4.45,
              "wind_deg": 2,
              "wind_gust": 6.4,
              "weather": [
                  {
                      "id": 800,
                      "main": "Clear",
                      "description": "clear sky",
                      "icon": "01n"
                  }
              ]
          },
          {
              "dt": 1633838400,
              "temp": 287.67,
              "feels_like": 287.45,
              "pressure": 1021,
              "humidity": 87,
              "dew_point": 285.53,
              "uvi": 0,
              "clouds": 0,
              "visibility": 10000,
              "wind_speed": 3.29,
              "wind_deg": 24,
              "wind_gust": 5.64,
              "weather": [
                  {
                      "id": 800,
                      "main": "Clear",
                      "description": "clear sky",
                      "icon": "01n"
                  }
              ]
          },
          {
              "dt": 1633842000,
              "temp": 287.05,
              "feels_like": 286.77,
              "pressure": 1021,
              "humidity": 87,
              "dew_point": 284.92,
              "uvi": 0,
              "clouds": 0,
              "visibility": 10000,
              "wind_speed": 3.71,
              "wind_deg": 13,
              "wind_gust": 4.94,
              "weather": [
                  {
                      "id": 800,
                      "main": "Clear",
                      "description": "clear sky",
                      "icon": "01n"
                  }
              ]
          },
          {
              "dt": 1633845600,
              "temp": 286.15,
              "feels_like": 285.78,
              "pressure": 1021,
              "humidity": 87,
              "dew_point": 284.04,
              "uvi": 0,
              "clouds": 0,
              "visibility": 10000,
              "wind_speed": 2.81,
              "wind_deg": 355,
              "wind_gust": 3.72,
              "weather": [
                  {
                      "id": 800,
                      "main": "Clear",
                      "description": "clear sky",
                      "icon": "01n"
                  }
              ]
          },
          {
              "dt": 1633849200,
              "temp": 285.55,
              "feels_like": 285.04,
              "pressure": 1021,
              "humidity": 84,
              "dew_point": 282.93,
              "uvi": 0,
              "clouds": 0,
              "visibility": 10000,
              "wind_speed": 2.34,
              "wind_deg": 338,
              "wind_gust": 3.05,
              "weather": [
                  {
                      "id": 800,
                      "main": "Clear",
                      "description": "clear sky",
                      "icon": "01n"
                  }
              ]
          },
          {
              "dt": 1633852800,
              "temp": 284.81,
              "feels_like": 284.22,
              "pressure": 1021,
              "humidity": 84,
              "dew_point": 282.2,
              "uvi": 0,
              "clouds": 0,
              "visibility": 10000,
              "wind_speed": 1.69,
              "wind_deg": 337,
              "wind_gust": 3.36,
              "weather": [
                  {
                      "id": 800,
                      "main": "Clear",
                      "description": "clear sky",
                      "icon": "01n"
                  }
              ]
          },
          {
              "dt": 1633856400,
              "temp": 285.44,
              "feels_like": 284.63,
              "pressure": 1021,
              "humidity": 73,
              "dew_point": 280.75,
              "uvi": 0,
              "clouds": 0,
              "visibility": 10000,
              "wind_speed": 1.82,
              "wind_deg": 355,
              "wind_gust": 3.42,
              "weather": [
                  {
                      "id": 800,
                      "main": "Clear",
                      "description": "clear sky",
                      "icon": "01n"
                  }
              ]
          },
          {
              "dt": 1633860000,
              "temp": 284.55,
              "feels_like": 283.81,
              "pressure": 1020,
              "humidity": 79,
              "dew_point": 281.04,
              "uvi": 0,
              "clouds": 0,
              "visibility": 10000,
              "wind_speed": 2.15,
              "wind_deg": 19,
              "wind_gust": 3.45,
              "weather": [
                  {
                      "id": 800,
                      "main": "Clear",
                      "description": "clear sky",
                      "icon": "01n"
                  }
              ]
          },
          {
              "dt": 1633863600,
              "temp": 284.14,
              "feels_like": 283.28,
              "pressure": 1020,
              "humidity": 76,
              "dew_point": 280.08,
              "uvi": 0,
              "clouds": 0,
              "visibility": 10000,
              "wind_speed": 1.93,
              "wind_deg": 21,
              "wind_gust": 3.06,
              "weather": [
                  {
                      "id": 800,
                      "main": "Clear",
                      "description": "clear sky",
                      "icon": "01n"
                  }
              ]
          },
          {
              "dt": 1633867200,
              "temp": 284.17,
              "feels_like": 283.18,
              "pressure": 1020,
              "humidity": 71,
              "dew_point": 279.12,
              "uvi": 0,
              "clouds": 0,
              "visibility": 10000,
              "wind_speed": 1.69,
              "wind_deg": 5,
              "wind_gust": 2.64,
              "weather": [
                  {
                      "id": 800,
                      "main": "Clear",
                      "description": "clear sky",
                      "icon": "01n"
                  }
              ]
          },
          {
              "dt": 1633870800,
              "temp": 283.96,
              "feels_like": 282.98,
              "pressure": 1020,
              "humidity": 72,
              "dew_point": 279.12,
              "uvi": 0,
              "clouds": 0,
              "visibility": 10000,
              "wind_speed": 2.01,
              "wind_deg": 7,
              "wind_gust": 2.55,
              "weather": [
                  {
                      "id": 800,
                      "main": "Clear",
                      "description": "clear sky",
                      "icon": "01n"
                  }
              ]
          },
          {
              "dt": 1633874400,
              "temp": 284.2,
              "feels_like": 283.24,
              "pressure": 1020,
              "humidity": 72,
              "dew_point": 279.35,
              "uvi": 0,
              "clouds": 0,
              "visibility": 10000,
              "wind_speed": 2.01,
              "wind_deg": 7,
              "wind_gust": 2.43,
              "weather": [
                  {
                      "id": 800,
                      "main": "Clear",
                      "description": "clear sky",
                      "icon": "01n"
                  }
              ]
          },
          {
              "dt": 1633878000,
              "temp": 284.65,
              "feels_like": 283.74,
              "pressure": 1020,
              "humidity": 72,
              "dew_point": 279.78,
              "uvi": 0,
              "clouds": 0,
              "visibility": 10000,
              "wind_speed": 1.89,
              "wind_deg": 359,
              "wind_gust": 2.39,
              "weather": [
                  {
                      "id": 800,
                      "main": "Clear",
                      "description": "clear sky",
                      "icon": "01d"
                  }
              ]
          },
          {
              "dt": 1633881600,
              "temp": 287.08,
              "feels_like": 286.49,
              "pressure": 1020,
              "humidity": 75,
              "dew_point": 282.73,
              "uvi": 0.62,
              "clouds": 0,
              "visibility": 10000,
              "wind_speed": 2.2,
              "wind_deg": 339,
              "wind_gust": 2.66,
              "weather": [
                  {
                      "id": 800,
                      "main": "Clear",
                      "description": "clear sky",
                      "icon": "01d"
                  }
              ]
          },
          {
              "dt": 1633885200,
              "temp": 288.14,
              "feels_like": 287.63,
              "pressure": 1020,
              "humidity": 74,
              "dew_point": 283.55,
              "uvi": 1.7,
              "clouds": 0,
              "visibility": 10000,
              "wind_speed": 2.47,
              "wind_deg": 311,
              "wind_gust": 2.94,
              "weather": [
                  {
                      "id": 800,
                      "main": "Clear",
                      "description": "clear sky",
                      "icon": "01d"
                  }
              ]
          },
          {
              "dt": 1633888800,
              "temp": 289.25,
              "feels_like": 288.87,
              "pressure": 1020,
              "humidity": 75,
              "dew_point": 284.82,
              "uvi": 3.12,
              "clouds": 0,
              "visibility": 10000,
              "wind_speed": 3.61,
              "wind_deg": 302,
              "wind_gust": 3.88,
              "weather": [
                  {
                      "id": 800,
                      "main": "Clear",
                      "description": "clear sky",
                      "icon": "01d"
                  }
              ]
          },
          {
              "dt": 1633892400,
              "temp": 290.34,
              "feels_like": 290.05,
              "pressure": 1019,
              "humidity": 74,
              "dew_point": 285.67,
              "uvi": 4.39,
              "clouds": 0,
              "visibility": 10000,
              "wind_speed": 4.63,
              "wind_deg": 304,
              "wind_gust": 4.86,
              "weather": [
                  {
                      "id": 800,
                      "main": "Clear",
                      "description": "clear sky",
                      "icon": "01d"
                  }
              ]
          },
          {
              "dt": 1633896000,
              "temp": 291.12,
              "feels_like": 290.75,
              "pressure": 1019,
              "humidity": 68,
              "dew_point": 285.13,
              "uvi": 5,
              "clouds": 1,
              "visibility": 10000,
              "wind_speed": 4.78,
              "wind_deg": 296,
              "wind_gust": 5.08,
              "weather": [
                  {
                      "id": 800,
                      "main": "Clear",
                      "description": "clear sky",
                      "icon": "01d"
                  }
              ]
          },
          {
              "dt": 1633899600,
              "temp": 291.55,
              "feels_like": 291.27,
              "pressure": 1018,
              "humidity": 70,
              "dew_point": 285.99,
              "uvi": 4.69,
              "clouds": 1,
              "visibility": 10000,
              "wind_speed": 6.29,
              "wind_deg": 294,
              "wind_gust": 6.75,
              "weather": [
                  {
                      "id": 800,
                      "main": "Clear",
                      "description": "clear sky",
                      "icon": "01d"
                  }
              ]
          },
          {
              "dt": 1633903200,
              "temp": 290.68,
              "feels_like": 290.42,
              "pressure": 1017,
              "humidity": 74,
              "dew_point": 286,
              "uvi": 3.54,
              "clouds": 1,
              "visibility": 10000,
              "wind_speed": 5.98,
              "wind_deg": 294,
              "wind_gust": 6.69,
              "weather": [
                  {
                      "id": 800,
                      "main": "Clear",
                      "description": "clear sky",
                      "icon": "01d"
                  }
              ]
          },
          {
              "dt": 1633906800,
              "temp": 290.84,
              "feels_like": 290.6,
              "pressure": 1016,
              "humidity": 74,
              "dew_point": 286.15,
              "uvi": 2.1,
              "clouds": 2,
              "visibility": 10000,
              "wind_speed": 5.37,
              "wind_deg": 293,
              "wind_gust": 6.17,
              "weather": [
                  {
                      "id": 800,
                      "main": "Clear",
                      "description": "clear sky",
                      "icon": "01d"
                  }
              ]
          }
      ]
    }
  // }
}

export const searchStr = "Mali";
export const wrongSearchStr = "jhgvfcjvgkhjlhgvf";

export const searchErrorMsg = "city not found"

export const searchError = {
  error: {
    message: searchErrorMsg
  }
}

export const searchMock = {
  // data: {
    message: "search returned successfully",
    data: {
      lat: 12.079,
      lon: -12.2982,
      timezone: searchStr,
      current: {
        dt: 1634137637,
        temp: 24.11,
        feels_like: 24.06,
        humidity: 57,
        visibility: 10000,
        wind_speed: 1.42,
        pressure: 1011,
        weather: [
          {
              "id": 804,
              "main": "Clouds",
              "description": "overcast clouds",
              "icon": "04d"
          }
      ],
      },
      hourly: [
        {
            "dt": 1634083200,
            "temp": 16.27,
            "feels_like": 16.25,
            "pressure": 1015,
            "humidity": 88,
            "dew_point": 14.28,
            "uvi": 0,
            "clouds": 90,
            "visibility": 10000,
            "wind_speed": 1.06,
            "wind_deg": 179,
            "wind_gust": 1.16,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ]
        },
        {
            "dt": 1634086800,
            "temp": 16.21,
            "feels_like": 16.16,
            "pressure": 1014,
            "humidity": 87,
            "dew_point": 14.05,
            "uvi": 0,
            "clouds": 99,
            "visibility": 10000,
            "wind_speed": 1.15,
            "wind_deg": 194,
            "wind_gust": 1.26,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ]
        },
        {
            "dt": 1634090400,
            "temp": 16.02,
            "feels_like": 15.92,
            "pressure": 1013,
            "humidity": 86,
            "dew_point": 13.68,
            "uvi": 0,
            "clouds": 91,
            "visibility": 10000,
            "wind_speed": 1.36,
            "wind_deg": 205,
            "wind_gust": 1.4,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ]
        },
        {
            "dt": 1634094000,
            "temp": 15.62,
            "feels_like": 15.46,
            "pressure": 1013,
            "humidity": 85,
            "dew_point": 13.11,
            "uvi": 0,
            "clouds": 93,
            "visibility": 10000,
            "wind_speed": 1.22,
            "wind_deg": 186,
            "wind_gust": 1.26,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "rain": {
                "1h": 0.15
            }
        },
        {
            "dt": 1634097600,
            "temp": 15.62,
            "feels_like": 15.51,
            "pressure": 1013,
            "humidity": 87,
            "dew_point": 13.47,
            "uvi": 0,
            "clouds": 95,
            "visibility": 10000,
            "wind_speed": 1.17,
            "wind_deg": 169,
            "wind_gust": 1.2,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "rain": {
                "1h": 0.66
            }
        },
        {
            "dt": 1634101200,
            "temp": 15.51,
            "feels_like": 15.39,
            "pressure": 1013,
            "humidity": 87,
            "dew_point": 13.36,
            "uvi": 0,
            "clouds": 96,
            "visibility": 10000,
            "wind_speed": 1.17,
            "wind_deg": 199,
            "wind_gust": 1.24,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "rain": {
                "1h": 0.32
            }
        },
        {
            "dt": 1634104800,
            "temp": 15.62,
            "feels_like": 15.54,
            "pressure": 1013,
            "humidity": 88,
            "dew_point": 13.64,
            "uvi": 0,
            "clouds": 88,
            "visibility": 10000,
            "wind_speed": 1.03,
            "wind_deg": 208,
            "wind_gust": 1.08,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "rain": {
                "1h": 0.14
            }
        },
        {
            "dt": 1634108400,
            "temp": 15.62,
            "feels_like": 15.54,
            "pressure": 1014,
            "humidity": 88,
            "dew_point": 13.64,
            "uvi": 0,
            "clouds": 89,
            "visibility": 10000,
            "wind_speed": 0.68,
            "wind_deg": 196,
            "wind_gust": 0.91,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "rain": {
                "1h": 0.31
            }
        },
        {
            "dt": 1634112000,
            "temp": 16.62,
            "feels_like": 16.58,
            "pressure": 1014,
            "humidity": 86,
            "dew_point": 14.27,
            "uvi": 0.47,
            "clouds": 91,
            "visibility": 10000,
            "wind_speed": 0.37,
            "wind_deg": 152,
            "wind_gust": 0.55,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ]
        },
        {
            "dt": 1634115600,
            "temp": 19.62,
            "feels_like": 19.7,
            "pressure": 1014,
            "humidity": 79,
            "dew_point": 15.88,
            "uvi": 1.88,
            "clouds": 88,
            "visibility": 10000,
            "wind_speed": 0.21,
            "wind_deg": 313,
            "wind_gust": 0.47,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ]
        },
        {
            "dt": 1634119200,
            "temp": 21.62,
            "feels_like": 21.69,
            "pressure": 1014,
            "humidity": 71,
            "dew_point": 16.14,
            "uvi": 4.37,
            "clouds": 88,
            "visibility": 10000,
            "wind_speed": 0.65,
            "wind_deg": 322,
            "wind_gust": 0.81,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ]
        },
        {
            "dt": 1634122800,
            "temp": 23.62,
            "feels_like": 23.71,
            "pressure": 1014,
            "humidity": 64,
            "dew_point": 16.42,
            "uvi": 7.12,
            "clouds": 89,
            "visibility": 10000,
            "wind_speed": 0.62,
            "wind_deg": 357,
            "wind_gust": 0.9,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ]
        },
        {
            "dt": 1634126400,
            "temp": 25.62,
            "feels_like": 25.78,
            "pressure": 1013,
            "humidity": 59,
            "dew_point": 17.02,
            "uvi": 9.2,
            "clouds": 87,
            "visibility": 10000,
            "wind_speed": 1.14,
            "wind_deg": 11,
            "wind_gust": 1.46,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ]
        },
        {
            "dt": 1634130000,
            "temp": 25.62,
            "feels_like": 25.78,
            "pressure": 1012,
            "humidity": 59,
            "dew_point": 17.02,
            "uvi": 9.66,
            "clouds": 79,
            "visibility": 10000,
            "wind_speed": 1.54,
            "wind_deg": 20,
            "wind_gust": 1.71,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ]
        },
        {
            "dt": 1634133600,
            "temp": 24.17,
            "feels_like": 24.13,
            "pressure": 1011,
            "humidity": 57,
            "dew_point": 15.12,
            "uvi": 8.54,
            "clouds": 87,
            "visibility": 10000,
            "wind_speed": 1.52,
            "wind_deg": 19,
            "wind_gust": 1.53,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ]
        },
        {
            "dt": 1634137200,
            "temp": 24.11,
            "feels_like": 24.06,
            "pressure": 1011,
            "humidity": 57,
            "dew_point": 15.07,
            "uvi": 6.16,
            "clouds": 85,
            "visibility": 10000,
            "wind_speed": 1.42,
            "wind_deg": 26,
            "wind_gust": 1.43,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ]
        }
      ],
      id: faker.datatype.uuid(),
      updatedAt: faker.date.recent(),
      createdAt: faker.date.past()
    },
  // }
}
export const searchHistoryMock = {
  // data:{
    message: "data retrieved successfully",
    data: Array(4).fill("-").map(arr => {
      const a = JSON.parse(JSON.stringify(searchMock.data));
      a.timezone = faker.address.country();
      a.id = faker.datatype.uuid();
      a.updatedAt = faker.date.recent();
      a.createdAt = faker.date.past();
      return a;
    })
  // }
}