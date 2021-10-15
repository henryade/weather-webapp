import { GetData, PostData } from "./query";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import ApexCharts from 'apexcharts';
import options from "./chart";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { Drawer } from 'rsuite';
import toast from "react-hot-toast";
import { Toaster } from 'react-hot-toast';
import useMediaQuery from '../helpers/useMediaQuery';
import URLCONFIG from "../url.config";



const {
  WEATHER_URL,
  SEARCH_HISTORY_URL,
  SEARCH_URL
} = URLCONFIG

const formatDate = (val: any) => {
  if (typeof val === "number") {
    const remainder = 13 - val.toString().length;
    const dataInteger = val * (10 ** remainder);
    return new Date(dataInteger)
  }
  return val;
}

const createChat = (data: any, id: string, small: any) => {
  const xAxis = data.hourly.map((item: any) => new Date(formatDate(item.dt)).toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  }));
  const yAxis = [{ name: "Temperature", type: "column", data: data.hourly.map((item: any) => item.temp) }]
  if (!small) {
    yAxis.push({ name: "Humidity", type: "column", data: data.hourly.map((item: any) => item.humidity) })
  }
  setTimeout(() => {
    var chart = new ApexCharts(document.querySelector(id), options(xAxis, yAxis));
    chart && chart.render();
  }, 1500);
}



const meterToKm = 1000;

const Home = () => {
  const { isLoading, isError, data: weatherData, error } = GetData(WEATHER_URL, true);
  const { isLoading: loadingHistory, data: historyData, refetch: refetchHistory } = GetData(SEARCH_HISTORY_URL, true);
  const { mutate, error: searchError, isLoading: isSearching, data: searchData, reset, ...Search } = PostData();

  const [open, setOpen] = useState(false);
  const small = useMediaQuery("(max-width: 475px)");
  const { data } = weatherData || {};

  useEffect(() => {
    if (data) {
      createChat(data, "#chart", small)
    }
    if (searchData) {
      createChat(searchData.data, "#searchChart", small)
    }
  }, [data, small, searchData]);

  useEffect(() => {
  //   // console.log("here", Search, searchError && searchError.response, searchData, isSearching);
    if (Search.isError) {
      toast.error(searchError.response && (searchError.response.data.error.message || searchError.response.data.message || "Error searching"))
    }
  }, [Search.isError])

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <Loading />
      </div>
    )
  }
  if (isError) {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center min-vh-100">
        <p>{error?.message}</p>
        <p>
          Couldn't load requested page
        </p>
      </div>
    )
  }

  const removeSearch = () => {
    reset();
  }
  const handleClick = (e: any) => {

    if (e.which !== 13) {
      return;
    }
    e.preventDefault();
    const query = e.target.value;
    // console.log(query, "query");
    if (!query) {
      return toast.error("please enter a city name")
    }
    mutate(SEARCH_URL + query);
    e.target.value = "";
    refetchHistory();
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      <Toaster position={`${small ? "bottom" : "top"}-right`}
        reverseOrder={false} />

      {isSearching && <div className="backdrop d-flex justify-content-center align-items-center"><Loading /></div>}
      {!isSearching && <div className="invisible" style={{ width: 0, height: 0 }}>hidden</div>}
      <main>
        <header className="w-100 px-3 px-sm-5 d-flex align-items-center">
          <div className="logo mt-1">
            <img src="logo.png" alt="logo" />
          </div>
          <div className="w-100 d-flex justify-content-center">
            <div className="search-input d-flex flex-row align-items-center">
              <label htmlFor="search">
                <FontAwesomeIcon icon={faSearch} />
              </label>
              <input type="text" data-testid="search" name="search" id="search" onKeyPress={handleClick} className="input-field px-2" placeholder="Search by city name" />
            </div>
          </div>
        </header>
        {searchData && searchData.data && <section className="px-3 px-sm-5 m-0">
          <div>
            <div className="d-flex justify-content-end pt-2">
              <button className="btn btn-link" onClick={() => removeSearch()}>Close</button>
            </div>
            <div className="d-flex flex-column flex-sm-row justify-content-between">
              <div className="d-flex flex-column w-100 w-sm-50 pr-3">
                <h6 className="pb-3 m-0">Search Result</h6>
                <div className="card card_big p-4 mr-sm-4">
                  <div className="d-flex flex-row justify-content-between" style={{ minHeight: '40px' }}>
                    {/* <p className="m-0">{new Intl.DateTimeFormat('en-GB', { weekday: 'long' }).format(formatDate(data.current.dt))}</p> */}
                    <p className="m-0">{searchData.data.timezone}</p>
                    <img src={`http://openweathermap.org/img/wn/${searchData.data.current.weather[0].icon}@2x.png`} alt="" className="weather_icon" />
                  </div>
                  <div className="d-flex justify-content-center align-items-center temperature mb-4"><span>{searchData.data.current.temp}&deg;C</span></div>
                  <div className="d-flex flex-wrap flex-row card_details mt-3">
                    <div className="w-50 mb-3 d-flex">
                      <strong>Wind</strong>
                      <span>{searchData.data.current.wind_speed ? `${searchData.data.current.wind_speed}m/s` : "null"}</span>
                    </div>
                    <div className="w-50 mb-3 d-flex">
                      <strong>Humidity</strong>
                      <span>{searchData.data.current.humidity ? `${searchData.data.current.humidity}%` : "null"}</span>
                    </div>
                    <div className="w-50 mb-3 d-flex">
                      <strong>Visibility</strong>
                      <span>{searchData.data.current.visibility ? `${Math.floor(searchData.data.current.visibility / meterToKm)}km` : "null"}</span>
                    </div>
                    <div className="w-50 mb-3 d-flex">
                      <strong>UV</strong>
                      <span>{searchData.data.current.uvi || "null"}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column w-100 w-sm-50">
                <h6 className="py-3">Weather Chart</h6>
                <div id="searchChart"></div>
              </div>
            </div>
          </div>
          <hr />
        </section>}
        <section className="px-3 px-sm-5 py-4 app-section">
          <div className="py-3"><h2>Dashboard</h2></div>
          <div className="d-flex flex-column flex-sm-row justify-content-between">
            <div className="d-flex flex-column w-100 w-sm-50 pr-3">
              <h6 className="py-3">Today</h6>
              <div className="card card_big p-4 mr-sm-4">
                <div className="d-flex flex-row justify-content-between" style={{ minHeight: '40px' }}>
                  {/* <p className="m-0">{new Intl.DateTimeFormat('en-GB', { weekday: 'long' }).format(formatDate(data.current.dt))}</p> */}
                  <p className="m-0">{data.timezone}</p>
                  <img src={`http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`} alt="" className="weather_icon" />
                </div>
                <div className="d-flex justify-content-center align-items-center temperature mb-4"><span>{data.current.temp}&deg;C</span></div>
                <div className="d-flex flex-wrap flex-row card_details mt-3">
                  <div className="w-50 mb-3 d-flex">
                    <strong>Wind</strong>
                    <span>{data.current.wind_speed ? `${data.current.wind_speed}m/s` : "null"}</span>
                  </div>
                  <div className="w-50 mb-3 d-flex">
                    <strong>Humidity</strong>
                    <span>{data.current.humidity ? `${data.current.humidity}%` : "null"}</span>
                  </div>
                  <div className="w-50 mb-3 d-flex">
                    <strong>Visibility</strong>
                    <span>{data.current.visibility ? `${Math.floor(data.current.visibility / meterToKm)}km` : "null"}</span>
                  </div>
                  <div className="w-50 mb-3 d-flex">
                    <strong>UV</strong>
                    <span>{data.current.uvi || "null"}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column w-100 w-sm-50">
              <h6 className="py-3">Weather Chart</h6>
              <div id="chart"></div>
            </div>
          </div>
          <div className="mt-4">
            <div className="d-flex flex-column w-30 pr-3">
              <div className="d-flex flex-row justify-content-between">
                <h6 className="py-3">Recent Searches</h6>
                <button type="button" className="btn btn-link view-all" onClick={() => setOpen(true)}>View all history</button>
              </div>
              {loadingHistory && <Loading />}
              {!loadingHistory && (!historyData || !historyData.data.length) && <div className="d-flex justify-content-center align-items-center" style={{ height: "50px" }}>
                <p>No Recent Searches</p>
              </div>}
              {!loadingHistory && historyData && <div className={`d-flex flex-wrap flex-row justify-content-${historyData.data.length > 3 ? "between" : "start"}`}>
                {historyData.data.sort((a: any, b: any) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()).slice(0, 4).map((searchHistory: any) => (
                  <div className="card p-3 p-sm-4 me-sm-3 mb-3 mb-sm-0 w-100 w-sm-23" key={searchHistory.id}>
                    <div className="d-flex flex-row justify-content-between" style={{ minHeight: '25px' }}>
                      <p className="m-0">{searchHistory.timezone}</p>
                      <img src={`http://openweathermap.org/img/wn/${searchHistory.current.weather[0].icon}@2x.png`} alt="" className="weather_icon_small" />
                    </div>
                    <div className="d-flex justify-content-center align-items-center temperature_small mt-0 mb-2"><span>{searchHistory.current.temp}&deg;C</span></div>
                    <div className="d-flex flex-wrap flex-row card_details mt-3">
                      <div className="w-100 mb-3 d-flex">
                        <strong>Wind</strong>
                        <span>{searchHistory.current.wind_speed ? `${searchHistory.current.wind_speed}m/s` : "null"}</span>
                      </div>
                      <div className="w-100 mb-3 d-flex">
                        <strong>Humidity</strong>
                        <span>{searchHistory.current.humidity ? `${searchHistory.current.humidity}%` : "null"}</span>
                      </div>
                      <div className="w-100 mb-3 d-flex">
                        <strong>Visibility</strong>
                        <span>{searchHistory.current.visibility ? `${Math.floor(searchHistory.current.visibility / meterToKm)}km` : "null"}</span>
                      </div>
                      <div className="w-100 mb-3 d-flex">
                        <strong>UV</strong>
                        <span>{searchHistory.current.uvi || "null"}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>}
            </div>
          </div>
        </section>
        <Drawer backdrop={true} open={open} onClose={() => setOpen(false)}>
          <Drawer.Header>
            <Drawer.Title>Search History</Drawer.Title>
          </Drawer.Header>
          <Drawer.Body>
            {loadingHistory && <Loading />}
            {!loadingHistory && (!historyData || !historyData.data.length) && <div className="d-flex justify-content-center align-items-center" style={{ height: "50px" }}>
              <p>No History yet</p>
            </div>}
            {!loadingHistory && historyData && historyData.data && <div className="d-flex flex-wrap flex-row justify-content-start">
              {historyData.data.sort((a: any, b: any) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()).map((searchHistory: any) => (
                <div className="card p-3 p-sm-4 mb-3 w-100 d-flex flex-sm-row flex-column justify-content-center" key={searchHistory.id}>
                  <div className="w-sm-50 w-100">
                    <div className="d-flex flex-row justify-content-between" style={{ minHeight: '25px' }}>
                      {/* <p className="m-0">{new Intl.DateTimeFormat('en-GB', { weekday: 'long' }).format(formatDate(data.current.dt))}</p> */}
                      <p className="m-0">{searchHistory.timezone}</p>
                      <div className="weather_icon_detail">
                        <img src={`http://openweathermap.org/img/wn/${searchHistory.current.weather[0].icon}@2x.png`} alt="" className="w-100 h-100" />
                      </div>
                    </div>
                    <div className="d-flex align-items-center temperature_small justify-content-center justify-content-sm-start"><span>{searchHistory.current.temp}&deg;C</span></div>
                  </div>
                  <div className="d-flex flex-wrap flex-row card_details ml-3 mt-sm-0 mt-3">
                    <div className="w-100 mb-3 d-flex">
                      <strong>Wind</strong>
                      <span>{searchHistory.current.wind_speed ? `${searchHistory.current.wind_speed}m/s` : "null"}</span>
                    </div>
                    <div className="w-100 mb-3 d-flex">
                      <strong>Humidity</strong>
                      <span>{searchHistory.current.humidity ? `${searchHistory.current.humidity}%` : "null"}</span>
                    </div>
                    <div className="w-100 mb-3 d-flex">
                      <strong>Visibility</strong>
                      <span>{searchHistory.current.visibility ? `${Math.floor(searchHistory.current.visibility / meterToKm)}km` : "null"}</span>
                    </div>
                    <div className="w-100 mb-3 d-flex">
                      <strong>UV</strong>
                      <span>{searchHistory.current.uvi || "null"}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>}
          </Drawer.Body>
        </Drawer>
      </main>
    </div >

  )
}

export default Home;
