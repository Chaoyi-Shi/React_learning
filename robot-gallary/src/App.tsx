import React from 'react';
import logo from "./assets/images/logo.svg";
// import './App.css';
import robots from './mockdata/robots.json'
import Robot from './components/Robot'

import styles from './App.module.css'
import ShoppingCart from './components/ShoppingCart';


// 这里用的是function组建
// function App() {
//   return (
//     <div className={styles.app}>
//       <div className={styles.appHeader}>
//         <img src = {logo} className={styles.appLogo} alt="logo"></img>
//         <h1>
//           hello steven hahahaha
//         </h1>
//       </div>
//       <ShoppingCart />
//       <div className= {styles.robotList}>
//         {robots.map((r) => (
//           <Robot id={r.id} email={r.email} name={r.name} />
//         ))}
//       </div>
      
//     </div>
//   );
// }

interface Props {}

//用any比较好
interface State {
  robotGallery: any[];
  //创建一个计数器
  count:number;
}

//使用类组件
class App extends React.Component<Props, State> {
  // 生命周期的第一阶段：初始化
  //构造函数，用来初始化 state
  constructor(props) {
    super(props);
    this.state = {
      robotGallery: [],
      // 初始化这个计数器
      count:0,
    };
  }

  // 在组件创建好DOM加元素以后、挂载进页面的时候调用 ，第一阶段生命周期完成
  componentDidMount() {
    //这里fetch获取数据 api， 这里fetch返回的是一个promise，就是一个get请求获取api数据
    fetch("https://jsonplaceholder.typicode.com/users")
    //使用。then function, response.json是一个响应主体的数据，同时也是返回一个promise
      .then((response) => response.json())
      .then((data) => this.setState({ robotGallery: data }));
  }

  // 生命周期第二阶段：更新
  //在组件接收到一个新的 prop（更新后)时被调用。
  //componentWillReceiveProps
  //用来探测props 和 state是否有变化
  // state getDerivedstateFromProps (nextProps, prevstate){}

  //这个函数的作用是通过组件pros和state的变化，来判断是否要更新
  // shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): boolean {
  //     return nextState. some !== this.state.some
  // }

  //组件更新后调用
  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
      
  }


  // 生命周期第三阶段：销毁
  //组件销毀后调用，
  //可以当作析构函数 destructor 来使用
  render() {
    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="logo" />
          <h1>罗伯特机器人炫酷吊炸天online购物平台的名字要长</h1>
        </div>
        {/* 添加click 事件 使用尖头函数()=>{}, {} 的作用是允许你在函数体内包含多个语句，而不仅仅是单个表达式。*/}
        <button onClick={()=> {
        // 这里{} 选取对象
        // 这里setState异步操作，无论调用多少次，只会使用上一次操作的state进行负值
          // this.setState({count:this.state.count+1},()=>{
          //   console.log("count",this.state.count)
          // });
          // this.setState({count:this.state.count+1},()=>{
          //   console.log("count",this.state.count)
          // });


          // preState 来访问上一个生命周期的状态，这里可以进行两倍增量
          this.setState((preState, preProps) => {
            return { count: preState.count + 1 }
          }, () =>{
            console.log("count ", this.state.count);
          });
          this.setState((preState, preProps) => {
            return { count: preState.count + 1 }
          }, () =>{
            console.log("count ", this.state.count);
          });
        }}>
          Click
        </button>
        {/* 同一行同步显示count */}
        <span> count: {this.state.count}</span>
        <ShoppingCart />
        <div className={styles.robotList}>
          {this.state.robotGallery.map((r) => (
            <Robot id={r.id} email={r.email} name={r.name} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
