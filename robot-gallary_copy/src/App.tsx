import React, { useState, useEffect } from "react";
import logo from "./assets/images/logo.svg";
import robots from "./mockdata/robots.json";
import Robot from "./components/Robot";
import styles from "./App.module.css";
import ShoppingCart from "./components/ShoppingCart";
import { response } from "express";

interface Props {}

interface State {
  robotGallery: any[];
  count: number;
}

// 函数组件

const App: React.FC = (props) => {
  const [count, setCount] = useState<number>(0);
  const [robotGallery, setRobotGallery] = useState<any>([]);

  useEffect(()=>{
    document.title= `点击 ${count} 次`
  },[count]
  )

  //副作用函数 第二个参数是被紧盯的
  //如果第二参数是空的，useEffect相当于模拟类组件的生命周期函数，componentDidMount
  //只会在组件加载的时候调用一次
  //非常适合从api访问数据， 初始化state
  //如果去掉第二个参数，会陷入无限call问题
  useEffect(() => {
    fetch ("https://jsonplaceholder.typicode.com/users")
    //获取数据
    .then(response => response.json())
    //更新组件状态
    .then(data =>setRobotGallery(data) )
  }, []);

  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <h1>罗伯特机器人炫酷吊炸天online购物平台的名字要长</h1>
      </div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
      <span>count: {count}</span>
      <ShoppingCart />
      {/* 处理显示 */}
      <div className={styles.robotList}>
          {robotGallery.map((r) => (
            <Robot id={r.id} email={r.email} name={r.name} />
          ))}
        </div>
    </div>
  );
};

export default App;
