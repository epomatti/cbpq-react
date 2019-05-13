import axios from 'axios'

const client = axios.create({
  baseURL: 'http://localhost:5001',
})

export const getLicenseCbpq = async (cbpq) => {
  return await getLicense('cbpq', cbpq)
}

export const getLicenseCpf = async (cpf) => {
  return await getLicense('cpf', cpf)
}

const getLicense = async (parameter, document) => {
  const response = await client.get(`/cbpq-7e4c6/us-central1/app/license/${parameter}/${document}`)
  const data = await response.data
  return data
}