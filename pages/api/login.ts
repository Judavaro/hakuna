import type { NextApiRequest, NextApiResponse } from 'next'
import { serialize } from 'cookie'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido' })
  }

  const { username, password } = req.body

  if (username !== 'admin' || password !== '123456') {
    return res.status(401).json({ message: 'Usuario o contraseña incorrectos' })
  }

  const cookie = serialize('session', 'authenticated', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
    maxAge: 60 * 60, // 1 hora
  })

  res.setHeader('Set-Cookie', cookie)

  return res.status(200).json({ message: 'Login exitoso' })
}