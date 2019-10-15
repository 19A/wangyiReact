/* 暴露一个用于请求数据的函数（基于axios） */
/* 特点：返回值为promise对象 */
/* 目的：1.能够得到异步执行的response的data
        2.可以统一处理请求失败的状态 */
import axios from "axios"
// import qs from "qs";
export default function ajax(url='' , data={}, mothed="GET" ) {
  return new Promise((resolve, reject) => {
    let promise
    if(mothed==="GET"){
      promise = axios.get(url,{
        params:data
      })
    }else{
      promise = axios.post(url,data)
    }
    promise
    .then(res=>{
      resolve(res.data)
      console.log("请求成功返回的数据",res.data)
    })
    .catch(error => {
      console.log("请求失败"+ error.msg)
    })
  })
}

