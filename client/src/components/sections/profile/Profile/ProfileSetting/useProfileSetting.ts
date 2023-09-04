import { startSession } from '@/services/session.services'
import { updateUser } from '@/services/users.services'
import { useAppDispatch, useAppSelector } from '@/store'
import { handleChangeDataUser } from '@/store/reducers/user'
import React, { useEffect, useState } from 'react'

import swal from 'sweetalert'

type ProfileSettings = {
  category: string
  isVisible: boolean
  value?: string
  newPassword?: string
  confirmNewPassword?: string
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
        value: '*******',
        newPassword: '',
        confirmNewPassword: ''

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
    if (category === 'password') {
      if (data.newPassword !== data.confirmNewPassword || (data.newPassword as string).length === 0) {
        swal('Oopss!', 'you should fill in the passwords fields and match it', 'error')
        return
      }

      if (user.email === undefined) return

      startSession({ email: user.email, password: data.value })
        .then(response => {
          const RegexCases = [/^\S{8,16}$/, /[0-9]/g, /[A-Z]/g];
          if (RegexCases.every(regex => regex.test(data.newPassword as string))) {
            updateUser({ password: data.newPassword })
              .then(response => {
                swal('Done', 'chenged password', 'success')
              })
              .catch(error => {
                console.log(error)
                swal('Ooopss!', 'error in the server', 'error')
              })
          } else {
            swal('the password does not follow the instructions', 'password must be between 8 and 16 characters, at least one digit, at least one lowercase and at least one uppercase', 'info')
          }

        })
        .catch(error => {
          swal('Oopss!', 'incorrect password!', 'error')
        })

    } else {
      updateUser({ [category]: data.value })
        .then((data) => {
          dispatch(handleChangeDataUser(data))
          swal('Done!', 'changed data', 'success')
        })
        .catch(error => {
          if (error.response.status === 409) {
            swal('Oopss!', 'email registered', 'error')
          }

        })
    }
  }


  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>, indexData: number) => {


    setProfileSettings(profileSettings.map((data, index) => {
      if (indexData === index) {
        data[event.target.name] = event.target.value
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