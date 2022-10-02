import React, { useEffect, useState } from 'react'


const usersKey = ['firstName', 'lastName', 'email', 'company'];

export default function useFilter(data, term) {
  const [filterData, setFilterData] = useState([])

  const filterRecords = () => {

    const filterRecords = data.filter((item) => {
      return usersKey.some((userKey) => item[userKey].toLowerCase().includes(term))
    });
    setFilterData([...filterRecords])
  }

  useEffect(() => {
    filterRecords()
  }, [term, data])
  return { filterData };
}
