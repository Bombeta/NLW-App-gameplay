import React from 'react';

import{
    Text,
    Image, 
    View,
    TouchableOpacity,
    TouchableOpacityProps
} from 'react-native';


import DiscordImg from '../../assets/discord.png';
import { styles } from './styles';

type Props = TouchableOpacityProps &{
    title: string;
}

export function ButtonIcon({title, activeOpacity} : Props){
    return(
        <TouchableOpacity 
            style={styles.container}
            activeOpacity={activeOpacity}
        >
            <View style={styles.iconWrapper}>
                <Image source={DiscordImg} style={styles.icon}></Image>
            </View>

            <Text style={styles.title}>
                { title }
            </Text>
        </TouchableOpacity>
    );
}