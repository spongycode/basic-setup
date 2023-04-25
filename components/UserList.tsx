import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import axios from "axios";

const BASE_URL = "https://sat-olt.onrender.com/api";

const UserList = (props: any) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = props.token; // Replace with your JWT token
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
        };

        fetchData();
    }, []);

    const renderItem = ({ item }) => (
        <View>
            <Text>{`Name: ${item.name}`}</Text>
            <Text>{`Email: ${item.email}`}</Text>
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
};

export default UserList;