export const checkRegisterData = (name: string, email: string, password: string, confirmPassword: string) => {
  if (name.split(' ').length < 2) return 'الاسم الكامل مطلوب'
  if (!email) return 'البريد الالكتروني مطلوب'
  if (!password) return 'كلمة المرور مطلوبة'
  if (confirmPassword !== password) return 'كلمة المرور غير متطابقة'

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
  if (!emailRegex.test(email)) return 'البريد الاكتروني غير صالح'
  return ''
}