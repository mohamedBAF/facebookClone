import React from 'react'
import './Header.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import FlagIcon from '@material-ui/icons/Flag';
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search';
import {Avatar,IconButton} from '@material-ui/core'
import { useStateValue } from './StateProvider';
function Header() {
    const [{user}, dispatch] = useStateValue();
    return (
        <div className="header">

<div className="header_left">
    <img src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512h=512"/>
    <div className="header_input">
    <SearchIcon/>
    <input placeholder="Search Facebook" type="text"/>
    
    </div>
</div>
<div className="header_center">
    <div className="header_option
    header_option--Active">
<HomeIcon fontSize="large"/>
    </div>
    <div className="header_option">
<FlagIcon fontSize="large"/>
    </div>
    <div className="header_option">
<SubscriptionsOutlinedIcon fontSize="large"/>
    </div>
    <div className="header_option">
<StorefrontIcon fontSize="large"/>
    </div>
    <div className="header_option">
<SupervisedUserCircleIcon fontSize="large"/>
    </div>
</div>
<div className="header_right">
    <div className="header_info">
<Avatar src={user.photoURL}/>
    <h4>{user.displayName}</h4>
<IconButton>
<AddIcon/>
</IconButton>
<IconButton>
<ForumIcon/>
</IconButton>
<IconButton>
<NotificationsActiveIcon/>
</IconButton>
<IconButton>
<ExpandMoreIcon/>
</IconButton>

    </div>
</div>


        </div>
        
    )
}

export default Header
