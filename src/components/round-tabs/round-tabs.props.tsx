export type RoundTabsElement = {
    id: string
    name: string
}

export type RoundTabsProps = {
    elements: RoundTabsElement[]
    onChange: (id: string) => void
    selectedTab: string
    auth?: boolean
}