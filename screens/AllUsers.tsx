import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const BASE_URL = "https://sat-olt.onrender.com/api";

const AllUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        console.log("input");
        const f = async () => {

            try {
                const token = await AsyncStorage.getItem('userToken');
                console.log(token);


                const response = await axios.get(`${BASE_URL}/user`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                console.log(response.data);
                setUsers(response.data.users);
            } catch (err) {
                console.log("Error fetching user data");
                console.log(err);
            }
        }
        f()

    }, []);

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Text style={styles.itemName}>{`Name: ${item.name}`}</Text>
            <Text style={styles.itemEmail}>{`Email: ${item.email}`}</Text>
        </View>
    );

    return (
        <View>
            <FlatList
                data={users}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}

export default AllUsers

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: '#f9f9f9',
        padding: 16,
        borderRadius: 8,
        marginBottom: 8,
        borderColor: '#e0e0e0',
        borderWidth: 1,
    },
    itemName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    itemEmail: {
        fontSize: 16,
        color: '#757575',
    },
})
