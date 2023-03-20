const APPLICATION_NAME = "WEBAPPFIAP"

export const storeToken = (token: string): void => {
  localStorage.setItem(`${APPLICATION_NAME}`, token)
}
