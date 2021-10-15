/* eslint-disable jest/no-mocks-import */

import { render, screen, waitForElementToBeRemoved } from "./customRender";
import nock from "nock";
import URLCONFIG from "./url.config";

import { searchHistoryMock, weatherResponseMock } from './__mocks__';

const {
  WEATHER_URL,
  SEARCH_HISTORY_URL
} = URLCONFIG
const { REACT_APP_SERVER_URL } = process.env;

beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query: any) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }),
  });
});

test('Rendering Test', async () => {
  nock(REACT_APP_SERVER_URL || "")
    .get(`/${WEATHER_URL}`)
    .reply(200, weatherResponseMock);
  nock(REACT_APP_SERVER_URL || "")
    .get(`/${SEARCH_HISTORY_URL}`)
    .reply(200, searchHistoryMock);

  render();

  const linkElement = screen.getByText(/L\.\./i);
  expect(linkElement).toBeInTheDocument();
  await waitForElementToBeRemoved(() => screen.queryByText("L..."));
  expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
  expect(screen.getByText("Today")).not.toBeNull();
  expect(screen.getByText("Weather Chart")).not.toBeNull();
  expect(screen.getByText("Recent Searches")).not.toBeNull();
});
