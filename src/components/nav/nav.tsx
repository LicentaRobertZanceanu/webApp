import React from 'react'
import { Category, Link, LinkWrapper, Wrapper } from './nav.styles'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { Logo } from '..'
import { useDispatch } from 'react-redux'
import { logout } from '../../store'
import { Icon } from '../icon/Icon'

interface NavProps extends RouteComponentProps { }

const NavFC = ({ history, match }: NavProps) => {
    const dispatch = useDispatch()

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
                onClick={() => history.push('/')}
                isActive={activePage === 'home'}
            >
                <Icon name={'home'} iconPrefix={'fas'} />
                <Link>Home</Link>
            </LinkWrapper>
            <LinkWrapper
                isActive={activePage === 'songs'}
                onClick={() => history.push('/songs')}
            >
                <Icon name={'compact-disc'} iconPrefix={'fas'} />
                <Link>Songs</Link>
            </LinkWrapper>
            <LinkWrapper
                isActive={activePage === 'artists'}
                onClick={() => history.push('/artists')}
            >
                <Icon name={'user'} iconPrefix={'fas'} />
                <Link>Artists</Link>
            </LinkWrapper>
            <LinkWrapper
                isActive={activePage === 'genres'}
                onClick={() => history.push('/genres')}
            >
                <Icon name={'guitar'} iconPrefix={'fas'} />
                <Link>Genres</Link>
            </LinkWrapper>

            <Category>Library</Category>
            <LinkWrapper isActive={activePage === 'recent'}>
                <Icon name={'history'} iconPrefix={'fas'} />
                <Link>Recent</Link>
            </LinkWrapper>
            <LinkWrapper isActive={activePage === 'recent'}>
                <Icon name={'heart'} iconPrefix={'fas'} />
                <Link>Favourites</Link>
            </LinkWrapper>

            <Category>Playlist</Category>
            <LinkWrapper isActive={activePage === 'recent'}>
                <Icon name={'plus-square'} iconPrefix={'fas'} />
                <Link>Create new</Link>
            </LinkWrapper>

            <Category last>General</Category>
            <LinkWrapper onClick={() => history.push('/profile')} isActive={activePage === 'profile'}>
                <Icon name={'id-card'} iconPrefix={'fas'} />
                <Link>My profile</Link>
            </LinkWrapper>
            <LinkWrapper onClick={onLogout} isActive={activePage === 'logut'}>
                <Icon name={'sign-out-alt'} iconPrefix={'fas'} />
                <Link>Logout</Link>
            </LinkWrapper>
        </Wrapper>
    )
}

export const Nav = withRouter(NavFC)