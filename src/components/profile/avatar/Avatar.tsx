import React from 'react';
import s from './Avatar.module.css'

type AvatarPropsType = {
    avatar_url: string
}

export const Avatar = (props: AvatarPropsType) => {
    return (
        <div className={s.avatar}>
            <img alt='avatar' src={props.avatar_url}/>
        </div>
    )
}
