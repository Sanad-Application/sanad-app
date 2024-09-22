import axios from 'axios'

export const baseURL = 'http://192.168.100.3:5000'

const { post } = axios.create({ baseURL })

export const aiService = {
  getChatAnswer: (question: string) => post('/get_response', { question }),
}