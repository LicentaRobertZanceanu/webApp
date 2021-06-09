import React, { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteSongFromPlaylist, dislikeSong, getPlaylistById, getSongsFromPlaylist, likeSong, playlistsSelector } from '../../store'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { CardProps, RenderSongs } from '../../components'

type MatchParams = {
    playlistId: string
}

interface Props extends RouteComponentProps<MatchParams> {

}

const PlaylistSongsListing: FC<Props> = ({ history, match }) => {
    const dispatch = useDispatch()
    const { songs, playlist } = useSelector(playlistsSelector)

    const playlistId = match.params.playlistId

    const [songsAsCardElements, setSongsAsCardElements] = useState<CardProps[]>([])

    useEffect(() => {
        dispatch(getSongsFromPlaylist({ playlistId: match.params.playlistId }))
        dispatch(getPlaylistById({
            playlistId
        }))
    }, [])

    useEffect(() => {
        const newSongs: CardProps[] = songs.map((song) => ({
            id: song._id,
            title: song.name,
            link: '/',
            image: song.image,
            subTitle: song.artist.name,
            isPlaylistListing: true,
            isSongsListing: true,
            likeSong: {
                liked: song.liked,
                onClick: () => {
                    if (song.liked) {
                        dispatch(dislikeSong({
                            songId: song._id
                        }))
                        return false
                    } else {
                        dispatch(likeSong({
                            songId: song._id
                        }))
                        return true
                    }
                }
            },
            removeSongFromPlaylist: () => {
                dispatch(deleteSongFromPlaylist({
                    playlistId,
                    songId: song._id,
                    dispatch
                }))
            }
        }))

        setSongsAsCardElements(newSongs)
    }, [songs])

    return (
        <RenderSongs
            elements={songsAsCardElements}
            filteredSongs
            filterName={playlist.name}
            fetchData={() => console.log('fetch data')}
            hasMore={false}
            history={history}
            pageTitle={'Playlists'}
        />
    )
}

export default withRouter(PlaylistSongsListing)
