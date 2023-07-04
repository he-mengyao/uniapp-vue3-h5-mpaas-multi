import configInfo from './index'
const { baseURL, env } = configInfo
const CHIPS_WAP_INSTANCE_NAME = 'crisps-app-wap-bff-api'
const CHIS_WEB_INSTANCE_NAME = 'crisps-web-bff-api'
const CHIPS_WAP_SERVICE_PREFIX = 'service'
export const CHIPS_RESOURCE_URL = '/crisps-resource-house'
// 判断是否是本地node层，不是才加网关
export const CHIPS_WAP_BASE_URL =
  baseURL === 'http://127.0.0.1:7001'
    ? `/${CHIPS_WAP_SERVICE_PREFIX}`
    : `/${CHIPS_WAP_INSTANCE_NAME}/${CHIPS_WAP_SERVICE_PREFIX}` // 使用网关调用路径的规则：项目实例名 / 自己服务路径前缀
export const CRISPS_C_MIDDLE_SERVICE_API = '/crisps-c-middle-service-api'
export const CHIPS_WEB_INSTANCE_NAME = '/crisps-web-bff-api'
export const MERCHANT_CENTER_MANAGER = '/merchant-center-manager'
export const CRISPS_MARKETING = '/crisps-marketing-web'
export const CRM_CLUE = '/crm-clue'
export const CRISPS_MARKETING_CMS = '/crisps-cms-web-api'
export const CRM_MIDDLE_APP = `/crm-middle-app/api/crisps-crm/${CHIPS_WAP_SERVICE_PREFIX}`
export const CHIPS_WEB_BASE_URL = `/${CHIS_WEB_INSTANCE_NAME}/${CHIPS_WAP_SERVICE_PREFIX}`
export const ENV = env

export const PLATFORM_CODE = {
  // 平台code
  wap: 'COMDIC_PLATFORM_CRISPS',
  xcx: 'COMDIC_PLATFORM_CRISPS',
}

export const TERMINAL_CODE = {
  // 终端code
  app: 'COMDIC_TERMINAL_APP',
  wap: 'COMDIC_TERMINAL_WAP',
  xcx: 'COMDIC_TERMINAL_APPLET',
}
