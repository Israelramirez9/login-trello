import { updateUser } from '@/services/users.services'
import React, { useState } from 'react'

function useProfileSetting() {
  const [dataUser, setDataUser] = useState([
    {
      category: 'name',
      isVisible: false,
      value: 'israel'
    },
    {
      category: 'email',
      isVisible: false,
      value: 'israel@gmail.com'
    },
    {
      category: 'password',
      isVisible: false,
      value: '****'
    }
  ])

  const handleVisibility = (indexData: number) => {

    setDataUser(dataUser.map((data, index) => {
      if (index === indexData) {
        data.isVisible = !data.isVisible
      }
      return data
    }
    ))
  }

  const handleSendData = (category: string, index: number) => {
    updateUser({ [category]: dataUser[index].value })
      .then(data => {

      })
      .catch(error => {
        console.log(error)
      })
      .finally()
  }
  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>, indexData: number) => {
    setDataUser(dataUser.map((data, index) => {
      if (index === indexData) {
        data.value = event.target.value
      }
      return data
    }))
  }

  return {
    dataUser,
    handleChangeValue,
    handleSendData,
    handleVisibility,
  }
}

export default useProfileSetting