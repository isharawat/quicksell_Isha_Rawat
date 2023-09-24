import './SingleCard.css'
export default function UserProfile({currUserId, userInfo}) {
    let color = "grey";
    if (userInfo[currUserId] && userInfo[currUserId].available) {
      color  = "green";
    } else {
      color = "grey";
    }
    let userInitials = "";
    if(userInfo[currUserId]) {
      const myArray = userInfo[currUserId].name.split(" ");
      for(let ind in myArray) {
        userInitials += myArray[ind][0];
      }
    }
    return (
        <div className="profile-image">
          {userInfo[currUserId] && 
            <img className = "profile" src={`https://via.placeholder.com/50?text=${userInitials}`} alt={`${userInitials}`} />
          }
          <div className="online-dot" style={{backgroundColor: `${color}`}}></div>
        </div>
    )
}