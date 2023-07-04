import configInfo from '../../config/index'

const { sysCode, secret, mdServerUrl, mdEnv } = configInfo

const config = {
  serverUrl: mdServerUrl,
  sysCode,
  secret,
  env: mdEnv.toUpperCase(),
  buriedPointReportingMode: sysCode,
}

export default config
