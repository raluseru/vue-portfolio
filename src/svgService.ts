let cachedSvgContent: Response | null = null

export const getSvgSprite = async (): Promise<any> => {
    if (cachedSvgContent) return cachedSvgContent

    const baseBath = 'src/assets/icons.svg'
    const response = await fetch(baseBath)
    if (!response.ok) throw new Error('Failed to fetch SVG file')
    console.log(response)
    cachedSvgContent = await response
    return cachedSvgContent
}
