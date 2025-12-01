// Admin likes endpoint removed — return 410 Gone
export default async function handler(req, res) {
  res.status(410).json({ error: 'admin likes endpoint removed' })
}