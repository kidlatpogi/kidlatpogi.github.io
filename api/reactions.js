// Reactions endpoint removed — kept as no-op to avoid 404s during rollout.
export default async function handler(req, res) {
  res.status(410).json({ error: 'reactions endpoint removed' })
}
