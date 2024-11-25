import React from "react";
import "./Profile.scss";
import profileBanner from "../../assets/images/business.jpg";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../store/authSlice";

const Profile = () => {
  const { profileData } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div className="profile-container">
      <div id="profile">
        <div className="__banner">
          <div className="__banner-img">
            <img src={profileBanner} alt="Profile Banner" />
          </div>

          <div className="__profile-details">
            <div className="__profile-data">
              <div className="__name">
                <span>Name *</span>
                <h4>{profileData?.name || "N/A"}</h4>
              </div>
              <div className="__name">
                <span>Age *</span>
                <h4>{profileData?.age || "N/A"}</h4>
              </div>
              <div className="__name">
                <span>Gender *</span>
                <h4>{profileData?.gender || "N/A"}</h4>
              </div>
              <div className="__name">
                <span>Phone *</span>
                <h4>{profileData?.phoneNumber || "xxxxx xxxxx"}</h4>
              </div>
              <div className="__name">
                <span>Email *</span>
                <h4>{profileData?.email || "N/A"}</h4>
              </div>
              <div className="__name">
                <span>Address *</span>
                <h4>{profileData?.address || "N/A"}</h4>
              </div>
              <div className="__name">
                <span>City *</span>
                <h4>{profileData?.city || "N/A"}</h4>
              </div>
              <div className="__name">
                <span>State *</span>
                <h4>{profileData?.state || "N/A"}</h4>
              </div>

              <div className="__name">
                <span>Postal Code *</span>
                <h4>{profileData?.postalCode || "N/A"}</h4>
              </div>

              <div className="__logout-btn">
                <button onClick={handleLogout} type="button">
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
