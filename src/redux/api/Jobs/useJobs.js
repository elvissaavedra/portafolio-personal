import useSWR from 'swr'
import fetch from 'api/fetch'

function useJobs() {
  const { data, error } = useSWR('https://apiJobs/list', fetch)

  return {
    jobs: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export default useJobs
