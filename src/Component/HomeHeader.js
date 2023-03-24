import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon, withBadge, } from 'react-native-elements'
import { COLORS, parameters } from '../Global/Styles'

const HomeHeader = () => {
    const BadgeIcon = withBadge(0)(Icon)
    return (
        <View style={styles.header}>
            <View style={{ alignItems: 'center', justifyContent: 'center', marginLeft: 15 }}>
                <Icon name="menu"
                    type="material-community"
                    color={COLORS.CardBackground}
                    size={32}
                />
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 25, color: COLORS.CardBackground }}>XpressFood</Text>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center',marginRight:15 }}>
                <BadgeIcon name="cart"
                    type="material-community"
                    color={COLORS.CardBackground}
                    size={35} />
            </View>
        </View>
    )
}

export default HomeHeader

const styles = StyleSheet.create({
    header: {
        backgroundColor: COLORS.buttons,
        height: parameters.headerheight,
        flexDirection: 'row',
        justifyContent:'space-between'
    }
})