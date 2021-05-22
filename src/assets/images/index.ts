import Artist1 from './artist-1.webp'
import Artist2 from './artist-2.webp'
import Artist3 from './artist-3.webp'
import Artist4 from './artist-4.webp'
import Artist5 from './artist-5.webp'

type artistIllustrationName = 'artist-1' | 'artist-2' | 'artist-3' | 'artist-4' | 'artist-5'

type artistIllustraton = {
    [key in artistIllustrationName]: string
}

export const artistsIllustrations: artistIllustraton = {
    'artist-1': Artist1,
    'artist-2': Artist2,
    'artist-3': Artist3,
    'artist-4': Artist4,
    'artist-5': Artist5
}

export const getArtistIllustration = (name: string) => {
    if (name in artistsIllustrations) {
        if (name === 'artist-1') {
            return artistsIllustrations['artist-1']
        } else if (name === 'artist-2') {
            return artistsIllustrations['artist-2']
        } else if (name === 'artist-3') {
            return artistsIllustrations['artist-3']
        } else if (name === 'artist-4') {
            return artistsIllustrations['artist-4']
        } else {
            return artistsIllustrations['artist-5']
        }
    }
    return
}

