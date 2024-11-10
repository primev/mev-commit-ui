// Adapted from: https://github.com/kosei28/vercel-og-google-fonts/blob/main/src/utils/font.ts
const weightNames = {
  "300": "regular",
  "400": "medium",
  "500": "semibold",
  "600": "bold",
  "700": "bold", // Assuming you want 700 also as 'bold', adjust if needed
} as const

export async function loadGoogleFont(font: string, text?: string) {
  const textParam = text ? `&text=${encodeURIComponent(text)}` : ""
  const url = `https://fonts.googleapis.com/css2?family=${font}${textParam}`

  const css = await (await fetch(url)).text()

  const fonts = parseFontFaces(css)
  const fetchPromises = fonts.map((font) => {
    return fetch(font.src)
      .then((response) => {
        if (response.ok) {
          return response.arrayBuffer()
        } else {
          throw new Error(`Failed to load font data for weight ${font.weight}`)
        }
      })
      .then((fontData) => {
        return { key: weightNames[font.weight], data: fontData }
      })
  })

  const results = await Promise.all(fetchPromises)
  const fontData = results.reduce(
    (acc, { key, data }: { key: string; data: ArrayBuffer }) => {
      acc[key] = data
      return acc
    },
    {} as Record<string, ArrayBuffer>
  )
  return fontData
  //   const resource = css.match(/src: url\((.+)\) format\('(opentype|truetype)'\)/)

  //   if (resource) {
  //     const res = await fetch(resource[1])
  //     if (res.status == 200) {
  //       const fontData = await res.arrayBuffer()

  //       return fontData
  //     }
  //   }

  //   throw new Error("failed to load font data")
}

function parseFontFaces(
  css: string
): { src: string; weight: keyof typeof weightNames }[] {
  const regex =
    /font-weight: (\d+);[\s\S]*?src: url\((.*?)\) format\('truetype'\);/g
  const results = []
  let match

  while ((match = regex.exec(css)) !== null) {
    if (match[2]) {
      results.push({
        src: match[2],
        weight: match[1] as keyof typeof weightNames,
      })
    }
  }

  return results
}
