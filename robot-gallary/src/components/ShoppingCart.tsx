import React from "react";
import styles from "./ShoppingCart.module.css";
import { FiShoppingCart } from "react-icons/fi";

//定义类型分为type和interface
// 定义好了组建之间的传递类型 数据的传递
interface Props {}


// 定义组建自己的状态类型
// 比如说下拉菜单，隐藏和显示两种
interface State {
  isOpen: boolean;
}

class ShoppingCart extends React.Component<Props, State> {
    //初始化 state定义
  constructor(props: Props) {
    //用 super 来调用react componnent的基础函数
    super(props);
    //初始化组建状态
    this.state = {
      isOpen: false,
    };
    // this.handlerClick=this.handlerClick.bind(this)
  }

//成员函数
  handlerClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
    // 事件发生的元素
    console.log("e.target", e.target)
    // e.target
    // 事件处理绑定的元素
    console.log("e.currentTarget", e.currentTarget)
    // e.currentTarget
    //这理this 指shopping card class
    // this.setState({ isOpen: !this.state.isOpen });
    if((e.target as HTMLElement).nodeName === "SPAN"){
      this.setState({ isOpen: !this.state.isOpen });
    }
  }

  // 渲染html
  // div + button
  render() {
    return (
      <div className={styles.cartContainer}>
        <button
          className={styles.button}
          //添加一个事件
          onClick = {this.handlerClick}
        >
          <FiShoppingCart />
          {/* 水平方向加内容，这里span不会换行 */}
          <span>购物车 2 (件)</span>
        </button>
        <div
          className={styles.cartDropDown}
          style={{
            display: this.state.isOpen ? "block" : "none",
          }}
        >
          <ul>
            <li>robot 1</li>
            <li>robot 2</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ShoppingCart;
