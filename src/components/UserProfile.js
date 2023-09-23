export default function UserProfile({userId, userInfo, users}) {
    let color = "grey";
    console.log("sac", userId);
      if (userInfo[userId].available) {
        color  = "green";
      } else {
        color = "grey";
      }
    
  
    return (
        <div className="profile-image">
            <img className = "profile"  src={`https://via.placeholder.com/50?text=${userInfo[userId].name}`} alt={`${userInfo[userId].name}`} />
            <div className="online-dot" style={{backgroundColor: `${color}`}}></div>
        </div>
    )
}