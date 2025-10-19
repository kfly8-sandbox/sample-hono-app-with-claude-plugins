import { describe, test, expect } from 'vitest'
import app from './index'

describe('GET /', () => {
  test('should return hello message', async () => {
    const res = await app.request('/')
    expect(res.status).toBe(200)
    expect(res.headers.get('content-type')).toBe('application/json')
    expect(await res.json()).toEqual({ message: 'hello' })
  })
})
