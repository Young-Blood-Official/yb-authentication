interface LoginRequestPayload {
  email: string;
  password: string;
}

interface LoginResponse {
  accessToken: string;
  expiredTime: string;
  refreshToken: string;
}

interface RegisterRequestPayload {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  roleId: string;
}

interface ResetPasswordRequestPayload {
  newPassword: string;
  newPasswordToken: string;
}

interface ChangePasswordPayload {
  email?: string;
  newPassword: string;
  newPasswordToken?: string;
  currentPassword: string;
}
