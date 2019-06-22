import React, { PureComponent } from 'react';
import { List, ListItem } from "react-native-elements";
import { FlatList } from "react-native";

export default class Group extends PureComponent {  
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                id: "1",
                name: "Nhà trọ",
                description: "Bạn với Minh, Thanh, Mỹ",
                picture: {
                    thumbnail: ""
                }
            }]
        }
    };

    render() {
        return (
            <FlatList
                data={this.state.data}
                renderItem={({ item }) => (
                    <ListItem                  
                        leftAvatar={{
                            title: 'MD',
                            rounded: true,
                            containerStyle: { margin: 5 },
                            onPress: () => alert('hey'),
                        }}
                    />
                )}
            />
        );
    }
}
