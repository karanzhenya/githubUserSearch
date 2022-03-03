import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import PersonIcon from '@mui/icons-material/Person';
import s from '../Profile.module.scss'

type SubscriptionsPropsType = {
    followers: number,
    following: number
}

export const Subscriptions = (props: SubscriptionsPropsType) => {
    return (
        <div className={s.subscriptions}>
            <SupervisorAccountIcon style={{color: "grey"}}/>
            <span className={s.followers}>{props.followers} followers</span>
            <PersonIcon style={{color: "grey"}}/>
            <span className={s.following}>{props.following} following</span>
        </div>
    )
}
