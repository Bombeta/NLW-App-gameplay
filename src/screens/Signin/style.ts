import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/themes';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.color.backgroundColor
    },
  
    content:{
        marginTop: -40,
        paddingHorizontal: 50,
    },
    image: {
        width: '100%',
        height: 360,

    },
    title:{
        color: theme.color.heading,
        textAlign: 'center',
        fontSize: 40,
        marginBottom: 16,
    },
    subtitle: {
        color: theme.color.heading,
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 64,
    }
});