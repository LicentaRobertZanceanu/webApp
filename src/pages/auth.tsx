import React, { useState } from "react"
import { Logo, RoundTabs, RoundTabsElement, SignUp } from "../components"
import { AuthContentHalfWrapper, AuthIllustration, AuthWrapper } from "../styles/styles.auth"
import Illustration from "../assets/images/auth-illustration.svg"
import Login from "../components/login/login"

export const AuthPage = () => {
    const [selectedTab, setSelectedTab] = useState<string>("login")

    const tabs: RoundTabsElement[] = [{
        id: "signup",
        name: "Sign up"
    }, {
        id: "login",
        name: "Login"
    }
    ]

    const onChangeTab = (tab: string) => {
        setSelectedTab(tab)
    }

    return (
        <AuthWrapper>
            <AuthContentHalfWrapper>
                <Logo />
                <AuthIllustration src={Illustration} />
            </AuthContentHalfWrapper>
            <AuthContentHalfWrapper second>
                <RoundTabs
                    elements={tabs}
                    onChange={onChangeTab}
                    selectedTab={selectedTab}
                    auth
                />
                {
                    selectedTab === "login" ?
                        <Login />
                        :
                        <SignUp 
                            changeToLogin={() => setSelectedTab('login')}
                        />
                }
            </AuthContentHalfWrapper>
        </AuthWrapper>
    )
}