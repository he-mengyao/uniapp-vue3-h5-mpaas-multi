import http from 'utils/http'
import { CRISPS_C_MIDDLE_SERVICE_API } from 'config/constant'

export const getOpenId = (data) => {
  return http.post(
    `${CRISPS_C_MIDDLE_SERVICE_API}/nk/pay/v2/get_open_id.do`,
    data
  )
}

export const smsCode = (data) => {
  return http.post(
    `${CRISPS_C_MIDDLE_SERVICE_API}/nk/authentication/send_sms_code.do`,
    data
  )
}

export const loginPost = (data) => {
  return http.post(
    `${CRISPS_C_MIDDLE_SERVICE_API}/nk/authentication/login.do`,
    data
  )
}

export const userinfoGet = (params) => {
  return http.get(
    `${CRISPS_C_MIDDLE_SERVICE_API}/nk/authentication/get_user_info.do`,
    params
  )
}
