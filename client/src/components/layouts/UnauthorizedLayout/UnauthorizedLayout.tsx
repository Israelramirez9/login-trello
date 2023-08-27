import React from 'react'
import style from './UnauthorizedLayout.module.scss'
type UnauthorizedProps = {
  children: React.ReactNode
}

function Unauthorized({ children }: UnauthorizedProps) {
  return (
    <section className={style["form-main"]}>
      <div className={style["form-content"]}>
        <div className={style["box"]}>
          {
            children
          }
        </div>
      </div>
    </section>
  )
}

export default Unauthorized