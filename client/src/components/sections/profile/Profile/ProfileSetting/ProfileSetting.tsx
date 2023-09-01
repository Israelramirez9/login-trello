import React from 'react'
import styles from './ProfileSetting.module.scss'
import useProfileSetting from './useProfileSetting'
import { AiFillEdit, AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'
function ProfileSetting() {

    const { handleChangeValue,
        profileSettings,
        handleSendData,
        handleEditing,
        handleStopEditing } = useProfileSetting();

    return (
        <>
            <section className={styles['setting']}>
                <h3 className={styles['section-title']}>Profile Setting</h3>
                <div className={styles['setting-container']}>
                    {
                        profileSettings.map((data, index) => (
                            <div className={styles['container-category']} key={index}>
                                <p className={styles['category']}>
                                    {data.category}
                                </p>
                                <div className={styles['value']}>
                                    <input
                                        placeholder={data.category !== 'password' ? data.value : data.isVisible ? 'old password' : data?.value}
                                        disabled={!data.isVisible} className={`${data.isVisible ? styles['input-enabled'] : styles['input-disabled']} ${styles['input']}`}
                                        onChange={(event) => handleChangeValue(event, index)}
                                        value={data.value ? data.value : ''} />
                                    <button className={styles['icon-button']} onClick={() => handleEditing(index)}>
                                        <AiFillEdit className={styles['icon']} />
                                    </button>
                                </div>
                                <>
                                    {
                                        data.isVisible && data.category === 'password' ?
                                            <div className={styles['container-inputs-password']}>
                                                <input
                                                    placeholder='new password'
                                                    className={`${data.isVisible ? styles['input-enabled'] : styles['input-disabled']} ${styles['input']}`}
                                                />
                                                <input
                                                    placeholder='repeat password'
                                                    className={`${data.isVisible ? styles['input-enabled'] : styles['input-disabled']} ${styles['input']}`}
                                                />
                                            </div> : null
                                    }
                                    {
                                        data.isVisible ?
                                            <div className={styles['buttons-container']}>
                                                <button className={styles['icon-button']} onClick={() => handleSendData(data.category, index)}>
                                                    <AiOutlineCheck className={styles['icon']} />
                                                </button>
                                                <button className={styles['icon-button']} onClick={() => handleStopEditing(index)}>
                                                    <AiOutlineClose className={styles['icon']} />
                                                </button>
                                            </div> : null
                                    }
                                </>
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default ProfileSetting