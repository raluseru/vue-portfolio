let cachedSvgContent: string | null = null

export const getSvgSprite = async (): Promise<string> => {
    if (cachedSvgContent) return cachedSvgContent

    const baseBath = 'https://raluseru.com/src/assets/icons.svg'
    const response = await fetch(baseBath)
    if (!response.ok) throw new Error('Failed to fetch SVG file')
    cachedSvgContent = await response.text()
    return cachedSvgContent
}
