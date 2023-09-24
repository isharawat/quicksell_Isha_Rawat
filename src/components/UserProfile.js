export default function UserProfile({userId, userInfo}) {
    let color = "grey";
    if (userInfo[userId] && userInfo[userId].available) {
      color  = "green";
    } else {
      color = "grey";
    }
    let userInitials = "";
    if(userInfo[userId]) {
      const myArray = userInfo[userId].name.split(" ");
      for(let ind in myArray) {
        userInitials += myArray[ind][0];
      }
    }
    return (
        <div className="profile-image">
          {userInfo[userId] && 
            <img className = "profile" src={`https://via.placeholder.com/50?text=${userInitials}`} alt={`${userInitials}`} />
          }
          <div className="online-dot" style={{backgroundColor: `${color}`}}></div>
        </div>
    )
}