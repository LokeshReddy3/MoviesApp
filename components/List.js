import React from 'react';
import {Text, View, Dimensions, FlatList} from 'react-native';
import Card from './Card'

class list extends React.PureComponent {
    render() {
        const {title,content} = this.props
        return (
            <View style ={styles.list}>
                <View>
                    <Text style={styles.text}>
                        {title}
                    </Text>
                </View>
                    <FlatList data ={content} horizontal={true} renderItem={({item}) => <Card item={item} />}></FlatList>
            </View>
            
        );
    }
}
  const styles = StyleSheet.create({
    list :{
        marginTop : 25,

    },
    text :{
        fontSize : 20,
        fontWeight : 'bold',
        color : 'black',
        paddingBottom : 20,

    },
  })
export default list;