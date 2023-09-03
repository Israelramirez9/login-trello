import { updateUser } from '@/services/users.services'
import { useAppDispatch, useAppSelector } from '@/store'
import React, { useEffect, useState } from 'react'
import swal from 'sweetalert'

type ProfileSettings = {
  category: string
  isVisible: boolean
  value?: string
}
function useProfileSetting() {

  const dispatch = useAppDispatch()
  const user = useAppSelector(state => state.user)

  const [profileSettings, setProfileSettings] = useState<Array<ProfileSettings>>([])

  useEffect(() => {
    if (!user) {
      return
    }
    const { email, name } = user;
    setProfileSettings([
      {
        category: 'name',
        isVisible: false,
        value: name
      },
      {
        category: 'email',
        isVisible: false,
        value: email
      },
      {
        category: 'password',
        isVisible: false,
        value: '*******'
      }
    ])
  }, [user])

  const handleEditing = (indexData: number) => {

    setProfileSettings(profileSettings.map((data, index) => {
      if (index === indexData) {
        data.isVisible = !data.isVisible
      }
      return data
    }
    ))
  }
  const handleStopEditing = (indexData: number) => {
    setProfileSettings(profileSettings.map((data, index) => {
      if (index === indexData) {
        data.isVisible = false
      }
      return data
    }
    ))
  }
  const handleSendData = (category: string, index: number) => {

    const data = profileSettings[index]
    if (data === undefined) return
    if (data.value === undefined) return

    if (data.value.trim() === '') {
      swal("you must fill in", "try again", "info")
      return
    }

    // updateUser({ name: data.value })
    //   .then((data) => {
    //     console.log(data)
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })

    // console.log(category)

  }
  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>, indexData: number) => {
    setProfileSettings(profileSettings.map((data, index) => {
      if (index === indexData) {
        data.value = event.target.value
      }
      return data
    }))
  }

  return {
    profileSettings,
    handleChangeValue,
    handleSendData,
    handleEditing,
    handleStopEditing
  }
}

export default useProfileSetting