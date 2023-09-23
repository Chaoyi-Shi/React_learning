// 当我们import以css结尾的文件都会遵循以下的规定
// 避免css结尾的文件 倒入文件报错
//对css 引入设置
 declare module "*.css" {
    const css: {[key: string]: string};
    export default css
}

//