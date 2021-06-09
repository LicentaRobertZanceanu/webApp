import React, { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { addListenedSong, dislikeSong, getSongById, getSongs, likeSong, songsSelector } from '../../store'
import { FlexWrapper, PageContentWrapper, PageWrapper } from '../../styles/styles.app'
import { ArtistImage, ArtistImageWrapper, ArtistName, MainContainerWrapper, SongsContainerWrapper, SongsRecommendations, VideoName, YoutubeWrapper } from './styles'
import ArtistIllustration from '../../assets/images/artist-1.webp'
import { AttributeSongToPlaylist, Icon, RenderSongWithDetails } from '../../components'
import { colors } from '../../constants/colors'
import YouTube from 'react-youtube'

type MatchParams = {
    songId: string
}

interface Props extends RouteComponentProps<MatchParams> { }

const ViewSong: FC<Props> = ({ match, history }) => {
    const { song, songs } = useSelector(songsSelector)
    const dispatch = useDispatch()
    const [liked, setLiked] = useState<boolean>(song.liked)
    const [showModal, setShowModal] = useState<boolean>(false)
    const songId = match.params.songId

    useEffect(() => {
        dispatch(getSongById({ songId }))
        dispatch(getSongs({
            queryParams: {
                limit: 40,
                page: 1
            }
        }))
    }, [match.params.songId])
    useEffect(() => {
        setLiked(song.liked)
    }, [song, match.params.songId])


    if (!song) {
        return (
            <div>loading</div>
        )
    }


    let youtubeId = ''
    if (song.youtubeUrl) {
        const ytUrlSplitted = song.youtubeUrl.split('watch?v=')
        youtubeId = ytUrlSplitted[1]
    }

    let likeIconColor = colors.gray
    if (liked) {
        likeIconColor = colors.primary
    }

    return (
        <PageWrapper flex>
            <MainContainerWrapper>
                <YouTube
                    id={'yt-iframe'}
                    opts={{
                        width: '100%',
                        height: '450px'
                    }}
                    videoId={youtubeId}
                    onPlay={() => {
                        dispatch(addListenedSong({ songId }))
                    }}
                />
                <VideoName>{song.name}</VideoName>
                <FlexWrapper>
                    <div
                        style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                        onClick={() => history.push(`/songs/artists/${song.artist._id}`)}
                    >
                        <ArtistImageWrapper>
                            <ArtistImage src={ArtistIllustration} />
                        </ArtistImageWrapper>
                        <ArtistName>{song.artist.name}</ArtistName>
                    </div>
                    <Icon
                        iconPrefix={'fas'}
                        name={'thumbs-up'}
                        size={'sm'}
                        color={likeIconColor}
                        style={{
                            cursor: 'pointer',
                            marginRight: '10px',
                            marginLeft: 'auto'
                        }}
                        onClick={() => {
                            let likeStatus = liked
                            if (liked) {
                                dispatch(dislikeSong({ songId }))
                                likeStatus = false
                            } else {
                                dispatch(likeSong({ songId }))
                                likeStatus = true
                            }
                            setLiked(likeStatus)
                        }}
                    />
                    <Icon
                        iconPrefix={'fas'}
                        name={'plus'}
                        size={'sm'}
                        color={colors.gray}
                        style={{
                            cursor: 'pointer',
                            marginLeft: '10px'
                        }}
                        onClick={() => {
                            setShowModal(true)
                        }}
                    />
                </FlexWrapper>
            </MainContainerWrapper>
            <SongsContainerWrapper >
                <VideoName songsRecommendations>Songs</VideoName>
                <SongsRecommendations>
                    {
                        songs.map((item, index) => (
                            <RenderSongWithDetails
                                key={`RenderSongWithDetails-${item._id}-${index}`}
                                name={item.name}
                                image={item.image}
                                artistName={item.artist.name}
                                onClick={() => history.push(`/songs/${item._id}`)}
                            />
                        ))
                    }
                </SongsRecommendations>
            </SongsContainerWrapper>
            <AttributeSongToPlaylist
                showModal={showModal}
                onClose={() => setShowModal(false)}
                songId={songId}
            />
        </PageWrapper>
    )
}

export default withRouter(ViewSong)
