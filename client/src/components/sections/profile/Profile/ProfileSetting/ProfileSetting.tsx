import React from 'react'
import styles from './ProfileSetting.module.scss'
import useProfileSetting from './useProfileSetting'
import { AiFillEdit } from 'react-icons/ai'
function ProfileSetting() {

    const { handleChangeValue,
        dataUser,
        handleSendData,
        handleVisibility } = useProfileSetting();
    return (
        <section className={styles['setting']}>
            <h3 className={styles['section-title']}>Profile Setting</h3>
            <div className={styles['setting-container']}>
                {
                    dataUser.map((data, index) => (
                        <div className={styles['container-category']} key={index}>
                            <p className={styles['category']}>
                                {data.category}
                            </p>
                            <div className={styles['value']}>
                                <span> {data.value}</span>
                                <button className={styles['icon-button']}>
                                    <AiFillEdit className={styles['icon']} />
                                </button>
                            </div>
                        </div>
                    ))
                }

            </div>
        </section>
    )
}

export default ProfileSetting