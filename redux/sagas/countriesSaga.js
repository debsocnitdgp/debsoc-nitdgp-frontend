import { takeEvery, put } from "redux-saga/effects";
import { fetchCountriesAction, ACTION_TYPES } from "../actions/countriesAction";

function* fetchCountries() {
  const countriesData = yield fetch(`https://api.publicapis.org/entries`); // Fetch call.
  const countries = yield countriesData.json(); // Convert to JSON.
  console.log(countries);
  yield put(fetchCountriesAction(countries)); // Initiate the action on fetch success.
}

export default function* watchCountries() {
  yield takeEvery(ACTION_TYPES.FETCH_COUNTRIES, fetchCountries);
}
