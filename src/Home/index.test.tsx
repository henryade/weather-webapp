/* eslint-disable jest/no-mocks-import */
// import ApexCharts from "apexcharts";
import { findByText, fireEvent, render, screen, waitForElementToBeRemoved } from "../customRender";
import nock from "nock";
import URLCONFIG from "../url.config";
// import App from "../App";

import { searchHistoryMock, searchMock, weatherResponseMock, searchStr, wrongSearchStr, searchError, searchErrorMsg } from '../__mocks__';

jest.mock("apexcharts");
jest.setTimeout(20000)

const {
  WEATHER_URL,
  SEARCH_HISTORY_URL,
  SEARCH_URL_TEST
} = URLCONFIG
const { REACT_APP_SERVER_URL } = process.env;

describe("Search Test", () => {
  beforeEach(() => {
    nock(REACT_APP_SERVER_URL || "")
      .get(`/${WEATHER_URL}`)
      .reply(200, weatherResponseMock);
    nock(REACT_APP_SERVER_URL || "")
      .get(`/${SEARCH_HISTORY_URL}`)
      .reply(200, searchHistoryMock);
    nock(REACT_APP_SERVER_URL || "")
      .post(`/${SEARCH_URL_TEST}`)
      .query({
        searchQuery: searchStr
      })
      .reply(200, searchMock);
  });
  it("returns a valid result when a valid state is searched", async () => {
    const { queryByText, getByText, getAllByPlaceholderText } = render()
    await waitForElementToBeRemoved(() => queryByText("L..."));
    const input = getAllByPlaceholderText("Search by city name")[0];
    fireEvent.change(input, { target: { value: searchStr } })
    fireEvent.keyPress(input, { charCode: 13 });
    await waitForElementToBeRemoved(() => queryByText("hidden"));
    await waitForElementToBeRemoved(() => queryByText("L..."));
    expect(getByText(/Search Result/i)).toBeInTheDocument();
    const btn = getByText("Close");
    fireEvent.click(btn, { bubbles: true, button: 1 });
    // await waitForElementToBeRemoved(() => screen.queryByText(/Search Result/i));
    // expect(screen.getByText(/Search Result/i)).not.toBeInTheDocument();
  })
  it("returns an error message when no city is inputed", async () => {
    const { getAllByPlaceholderText, getByText } = render()
    const input = getAllByPlaceholderText("Search by city name")[0];
    fireEvent.keyPress(input, { charCode: 13 });
    expect(getByText(/please enter a city name/i)).toBeInTheDocument();
  });
})
// describe("Search Error Test", () => {
//   beforeAll(() => {
//     nock(REACT_APP_SERVER_URL || "")
//       .get(`/${WEATHER_URL}`)
//       .reply(200, weatherResponseMock);
//     nock(REACT_APP_SERVER_URL || "")
//       .get(`/${SEARCH_HISTORY_URL}`)
//       .reply(200, searchHistoryMock);
//     nock(REACT_APP_SERVER_URL || "")
//       .post(`/${SEARCH_URL_TEST}`)
//       .query({
//         searchQuery: wrongSearchStr
//       })
//       .reply(200, searchError);
//   });
//   it("returns an error message when an invalid city is inputed", async () => {
//     const { queryByText, getByText, getByTestId } = render();
//     const input1 = getByTestId('search');
//     fireEvent.change(input1, { target: { value: wrongSearchStr } });
//     fireEvent.keyPress(input1, { key: 'Enter' });
//     // await waitForElementToBeRemoved(() => queryByText("please enter a city name"));
//     expect(getByText(searchErrorMsg)).toBeInTheDocument();
//     await waitForElementToBeRemoved(() => queryByText(searchErrorMsg));
//     expect(getByText(searchErrorMsg)).not.toBeInTheDocument();
//   });
// });

describe("View History Test", () => {
  beforeEach(() => {
    nock(REACT_APP_SERVER_URL || "")
      .get(`/${WEATHER_URL}`)
      .reply(200, weatherResponseMock);
    nock(REACT_APP_SERVER_URL || "")
      .get(`/${SEARCH_HISTORY_URL}`)
      .reply(200, searchHistoryMock);
  });
  it("returns an error message when an invalid city is inputed", async () => {
    const { getByText } = render()
    const btn = getByText(/view all/i)
    fireEvent.click(btn)
    expect(getByText("Search History")).toBeInTheDocument();
  });
});
