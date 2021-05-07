import React from 'react' 
import { StyleSheet } from 'react-native'

// Grey: #959595 | Cream: #e2e0d4 | Off Pink: #cebeb9 | Pure Pink: #e7cac2 | Soft Grey:#e8e8e8
// https://www.jordanprindledesigns.com/blog/color-palettes

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: "#cebeb9"
    },
    
    box: {
        paddingVertical: 24,
        marginTop: 16,
        borderWidth: 4,
        borderColor: "#959595",
        borderRadius: 6,
        backgroundColor: "#e8e8e8",
    },

    title: {
        color: "#1b1717",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
        padding: 12
    },

    button: {
        color: "#810000",
        textAlign: "center",
        fontSize: 48,
        fontWeight: "bold",
        padding: 12
    },

    p: {
        color: "black",
        paddingLeft: 12,
        textAlign: "left",
        fontSize: 20,
        fontWeight: "normal",
        fontFamily: 'sans-serif'
    },

    a: {
        color: "black",
        paddingLeft: 12,
        textAlign: "left",
        fontSize: 20,
        fontWeight: "bold",
        fontFamily: 'sans-serif'
    }
})

export { styles }