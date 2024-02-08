export type ErrCallbackType = (err: { [key: string]: string }) => void

export type LoginParams = {
  email: string
  password: string
  rememberMe?: boolean
}

export type SignUpParams = {
  name: string,
  email: string,
  password: string,
  confirm_password: string,
  location: string,
  company_name: string,
  birth_date: string,
}

export type UserDataType = {
  id: string
  role: string
  email: string
  name: string
  company_name: string
  location: string
  username: string
  password: string
  profile_image?: string
  chat: {
    token: string
    user: {
      duration: string
      users: Record<string, UserInfo>
    }
  }
}

interface UserInfo {
  banned: boolean;
  created_at: string;
  id: string;
  last_active: string;
  name: string;
  online: boolean;
  role: string;
  updated_at: string;
}

export type questionDataType = {
  question: string
}

export type questions = {
  _id: string,
  question: string,
  time_duration: number,
  createdAt: string,
  updatedAt: string,
}

export type AuthValuesType = {
  loading: boolean
  logout: () => void
  jobViewContext: null,
  setQuestions: null,
  setJobViewContext: (value: any) => void
  user: UserDataType | null
  setLoading: (value: boolean) => void
  setUser: (value: UserDataType | null) => void
  login: (params: LoginParams, errorCallback?: ErrCallbackType) => Promise<any>
  signup: (params: SignUpParams, errorCallback?: ErrCallbackType) => Promise<any>
  addQuestion: (params: questionDataType, errorCallback?: ErrCallbackType) => Promise<any>
  initAuth: () => void,
  isLoggedIn: () => Boolean
}
