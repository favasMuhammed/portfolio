import { MetadataRoute } from 'next'
import { thoughtContent } from '../data/thoughtContent'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
    const thoughts = Object.keys(thoughtContent).map((slug) => ({
        url: `https://favastp.dev/thoughts/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }))

    return [
        {
            url: 'https://favastp.dev',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://favastp.dev/thoughts',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        ...thoughts,
    ]
}
