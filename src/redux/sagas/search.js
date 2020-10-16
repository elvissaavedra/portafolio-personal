import { put, call, takeLatest } from 'redux-saga/effects'

import {
  SEARCH_JOBS_START,
  SEARCH_JOBS_ERROR,
  SEARCH_JOBS_COMPLETE,
  SEARCH_JOBS_BY_ID_START,
  SEARCH_JOBS_BY_ID_COMPLETE,
  SEARCH_JOBS_BY_ID_ERROR,
} from '../../consts/actionTypes'
import { apiCall } from '../api'

export function* searchJobs({ payload }) {
  try {
    const results = yield call(
      apiCall,
      `&s=${payload.movieName}`,
      null,
      null,
      'GET'
    )
    yield put({ type: SEARCH_JOBS_COMPLETE, results })
  } catch (error) {
    yield put({ type: SEARCH_JOBS_ERROR, error })
  }
}

export function* searchJobsById({ payload }) {
  try {
    const movie = yield call(
      apiCall,
      `&i=${payload.movieId}`,
      null,
      null,
      'GET'
    )
    yield put({ type: SEARCH_JOBS_BY_ID_COMPLETE, movie })
  } catch (error) {
    yield put({ type: SEARCH_JOBS_BY_ID_ERROR, error })
  }
}

export default function* search() {
  yield takeLatest(SEARCH_JOBS_START, searchJobs)
  yield takeLatest(SEARCH_JOBS_BY_ID_START, searchJobsById)
}
