export const constructRegisterData = (name: string, email: string, password: string) => {
  let firstName = name.split(' ')[0]
  let lastName = name.split(' ')[1]

  return {
    email,
    password,
    firstName,
    lastName,
  }
}