import StyleDictionary from 'style-dictionary'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

StyleDictionary.extend({
  source: [path.resolve(__dirname, 'tokens.json')],
  platforms: {
    'web/scss': {
      transformGroup: 'scss',
      buildPath: 'src/theme/__generated__/',
      files: [
        {
          destination: '_variables.scss',
          format: 'scss/variables',
        },
      ],
    },
  },
}).buildAllPlatforms()
