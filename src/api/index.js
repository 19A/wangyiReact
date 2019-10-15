/**
 * 管理多个接口函数的模块
 */
import ajax from "./ajax"
import axios from "axios";
// 获取首页数据
export const reqHomeData = () => ajax('/home')
// 获取分类页面数据
export const reqCategoryData = () => ajax('/category')
// 获取分类列表数据
export const reqCategoryListData = () => ajax('/categoryList')

//发送短信验证
export const reqSendCode = (phone) => ajax("/api/sendcode", {phone})
//手机号码验证码登录
// export const reqSmsLogin = (phone,code) => ajax("/api/login_sms", {phone,code},method="POST")
//邮箱密码登录
// export const reqPwdLogin = (phone) => ajax("/api/sendcode", {phone})
//搜索请求
export const reqSearch = (keyword) => axios({
    url: "/wangyi/xhr/search/search.json",
    method: "GET",
    params: {
      keyword
    }
  })
export const reqInit = () => axios({
  url: "/wangyi/xhr/search/init.json",
  method: "POST",
})