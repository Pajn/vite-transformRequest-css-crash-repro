const vite = require('vite')

async function main() {
  const server = await vite.createServer({
    clearScreen: false,
  })
  // Uncomment to workaround crash
  // await server.listen()
  const result = await server.transformRequest('/style.css', { ssr: false })
  console.log('result', result)
}

main()
