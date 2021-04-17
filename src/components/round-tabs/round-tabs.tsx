import React from "react"
import { RoundTabsProps } from "./round-tabs.props"
import { Tab, TabName, Wrapper } from "./round-tabs.styles"

export const RoundTabs = ({
    elements,
    onChange,
    selectedTab,
    auth
}: RoundTabsProps) => {
    return (
        <Wrapper
            auth={auth}
        >
            {
                elements.map((element, index) => {
                    return (
                        <Tab
                            key={index}
                            selected={element.id === selectedTab}
                            onClick={() => {
                                onChange(element.id)
                            }}
                        >
                            <TabName selected={element.id === selectedTab}>
                                {element.name}
                            </TabName>
                        </Tab>
                    )
                })
            }
        </Wrapper>
    )
}