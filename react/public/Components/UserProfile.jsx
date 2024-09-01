import { UserFavoriteFoods } from "./UserFavoriteFoods"
import { UserUsername } from "./UserUsername"

export function UserProfile() {
    return(
    <div id='user-profile'>
    <UserUsername username='Bob' />
    <div>
        <span>Email: </span>
        <span>anson@ansonthedev.com</span>
    </div>
    
    <UserFavoriteFoods />
    </div>
  )
} 