import { URL } from 'url'

const validateNodeUrl = node => new URL(node)

const normalizeNodeUrl = node => new URL(node).toString()

module.exports = {
  validateNodeUrl,
  normalizeNodeUrl,
}
