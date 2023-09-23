import React from "react";
import styles from "./Robot.module.css"

interface RobotProps {
  id: number;
  name: string;
  email: string;
}

const Robot: React.FC<RobotProps> = ({ id, name, email }) => {
  return (
    <div className ={styles.cardContainer}>
      <img alt="robot" src={`https://robohash.org/${id}`} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};


// const Robot: React.FC<RobotProps> = (props) => {
//     const id = props.id
//     const name = props.name
//     const emial = props.email
//     // return (
//     //   <li>
//     //     <img alt="robot" src={`https://robohash.org/${id}`} />
//     //     <h2>{name}</h2>
//     //     <p>{email}</p>
//     //   </li> 
//     // );
//   };

export default Robot;