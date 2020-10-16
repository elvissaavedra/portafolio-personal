import {
  SEARCH_JOBS_START,
  SEARCH_JOBS_BY_ID_START,
} from '../../consts/actionTypes'

export const searchJobs = (payload) => ({
  type: SEARCH_JOBS_START,
  payload,
})

export const searchJobsById = (payload) => ({
  type: SEARCH_JOBS_BY_ID_START,
  payload,
})
