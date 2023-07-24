import React from "react";
import SideBarHeader from "./SideBarHeader";
import Friends from "../Friends";


const SideBar = (props) => {


  const friends = [
    {
      userName: "Timi Maliki",
      image:
        "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
      text: "sup",
    },

    {
      userName: "Okacha Emmanuel",
      image:
        "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80",
      text: "howfa",
    },

    {
      userName: "Orjimba Cornelius",
      image:
        "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      text: "whatsup",
    },

    {
      userName: "Uche Emmanuel",
      image:
        "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      text: "join the meeting",
    },
    {
      userName: "Uzo Samuel",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      text: "chief",
    },
  ];

  return (
    <div>
      <SideBarHeader />
      {friends.map((item, index) => {
        return <div onClick={() => {
            props.getUser(item);
          
          }}>
            
          <Friends
            username={item.userName}
            
            image={item.image}
            message={item.text}
            
          />
          {props.tx}
        </div>;
      })}
    </div>
  );
};

export default SideBar;
