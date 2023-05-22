import { AppInfo } from "@/types/app"
export const APP_ID = '1c6234ca-a0bf-43c7-9fa8-2097295d7b68'
export const API_KEY = 'app-RE9aro98LoKum8UVJkMDCl9U'
export const API_URL = process.env.API_URL || ''
export const APP_INFO: AppInfo = {
  "title": 'Chat APP',
  "description": '',
  "copyright": '',
  "privacy_policy": '',
  "default_language": 'zh-Hans'
}

export const isShowPrompt = false
export const promptTemplate = 'I want you to act as a javascript console.'

export const API_PREFIX = '/api';

export const LOCALE_COOKIE_NAME = 'locale'

export const DEFAULT_VALUE_MAX_LEN = 48
