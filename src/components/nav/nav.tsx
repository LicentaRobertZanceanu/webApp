import React, { useEffect, useState } from 'react'
import { Category, Link, LinkWrapper, Wrapper } from './nav.styles'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { Logo } from '..'
import { useDispatch, useSelector } from 'react-redux'
import { getPlaylists, logout, playlistsSelector } from '../../store'
import { Icon } from '../icon/Icon'
import { appRoutes } from '../../routes'
import { AddPlaylist } from '../playlists'

interface NavProps extends RouteComponentProps { }

const NavFC = ({ history, match }: NavProps) => {
    const { playlists } = useSelector(playlistsSelector)
    console.log('playlists', playlists)
    const [showModal, setShowModal] = useState<boolean>(false)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPlaylists())
    }, [])

    const onLogout = () => {
        dispatch(logout())
        history.push('/auth')
    }

    const getActivePage = (): string => {
        const routes = history.location.pathname.split('/')
        switch (routes[1]) {
            case '': {
                return 'home'
            }
            case 'songs': {
                return 'songs'
            }
            case 'artists': {
                return 'artists'
            }
            case 'genres': {
                return 'genres'
            }
            case 'profile': {
                return 'profile'
            }
            case 'favourites': {
                return 'favourites'
            }
            default: {
                return ''
            }
        }
    }

    const activePage = getActivePage()
    return (
        <Wrapper>
            <div style={{
                paddingLeft: '30px',
                height: '80px',
                width: '100%'
            }}>
                <Logo small />
            </div>
            <Category>Menu</Category>
            <LinkWrapper
                onClick={() => history.push(appRoutes.home)}
                isActive={activePage === 'home'}
            >
                <Icon name={'home'} iconPrefix={'fas'} />
                <Link>Home</Link>
            </LinkWrapper>
            <LinkWrapper
                isActive={activePage === 'songs'}
                onClick={() => history.push(appRoutes.songs)}
            >
                <Icon name={'compact-disc'} iconPrefix={'fas'} />
                <Link>Songs</Link>
            </LinkWrapper>
            <LinkWrapper
                isActive={activePage === 'artists'}
                onClick={() => history.push(appRoutes.artists)}
            >
                <Icon name={'user'} iconPrefix={'fas'} />
                <Link>Artists</Link>
            </LinkWrapper>
            <LinkWrapper
                isActive={activePage === 'genres'}
                onClick={() => history.push(appRoutes.genres)}
            >
                <Icon name={'guitar'} iconPrefix={'fas'} />
                <Link>Genres</Link>
            </LinkWrapper>

            <Category>Library</Category>
            <LinkWrapper isActive={activePage === 'recent'}>
                <Icon name={'history'} iconPrefix={'fas'} />
                <Link>Recent</Link>
            </LinkWrapper>
            <LinkWrapper
                isActive={activePage === 'favourites'}
                onClick={() => history.push(appRoutes.favourites)}
            >
                <Icon name={'heart'} iconPrefix={'fas'} />
                <Link>Favourites</Link>
            </LinkWrapper>

            <Category>Playlist</Category>
            <LinkWrapper
                isActive={activePage === 'recent'}
                onClick={() => setShowModal(true)}
            >
                <Icon name={'plus-square'} iconPrefix={'fas'} />
                <Link>Create new</Link>
            </LinkWrapper>

            {
                playlists && playlists.slice(0, 3).map((playlist) => {
                    return (
                        <LinkWrapper
                            isActive={false}
                            onClick={() => history.push(`/playlists/${playlist._id}`)}
                        >
                            <Icon name={'music'} iconPrefix={'fas'} />
                            <Link>{playlist.name}</Link>
                        </LinkWrapper>
                    )
                })
            }
            {
                playlists.length > 3 &&
                <LinkWrapper
                    onClick={() => history.push('/playlists')}
                    isActive={activePage === 'profile'}
                >
                    <Icon name={'eye'} iconPrefix={'fas'} />
                    <Link>See all playlists</Link>
                </LinkWrapper>
            }
            <Category last>General</Category>
            <LinkWrapper onClick={() => history.push('/profile')} isActive={activePage === 'profile'}>
                <Icon name={'id-card'} iconPrefix={'fas'} />
                <Link>My profile</Link>
            </LinkWrapper>
            <LinkWrapper onClick={onLogout} isActive={activePage === 'logut'}>
                <Icon name={'sign-out-alt'} iconPrefix={'fas'} />
                <Link>Logout</Link>
            </LinkWrapper>
            <AddPlaylist
                showModal={showModal}
                onClose={() => setShowModal(false)}
            />
        </Wrapper >
    )
}

export const Nav = withRouter(NavFC)