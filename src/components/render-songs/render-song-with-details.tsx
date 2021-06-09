import React, { FC } from 'react'
import { SongArtistName, SongDetailsWrapper, SongImage, SongImageWrapper, SongName, SongWrapper } from './styles'
import SongIllustration from '../../assets/images/song.webp'

interface Props {
    image: string
    name: string
    onClick: () => void
    artistName: string
}

const RenderSongWithDetails: FC<Props> = ({
    artistName,
    image,
    onClick,
    name
}) => {
    return (
        <SongWrapper onClick={onClick}>
            <SongImageWrapper>
                <SongImage src={image || SongIllustration} />
            </SongImageWrapper>
            <SongDetailsWrapper>
                <SongName>{name}</SongName>
                <SongArtistName>{artistName}</SongArtistName>
            </SongDetailsWrapper>
        </SongWrapper>
    )
}

export default RenderSongWithDetails