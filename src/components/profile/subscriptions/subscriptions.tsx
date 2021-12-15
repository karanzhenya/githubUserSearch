import React from 'react';
import s from './subscriptions.module.css'

type SubscriptionsPropsType = {
    followers: number,
    following: number
}

export const Subscriptions = (props: SubscriptionsPropsType) => {

    return (
        <div className={s.subscriptions}>
            <span className={s.followers}>{props.followers} followers</span>
            <span className={s.following}>{props.following} following</span>
        </div>
    )
}
