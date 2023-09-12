import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import api from '../../services/api';
import UsersList from '../../components/UsersList';
import Search from '../../components/Search';
import styles from './styles';

function Home() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const handleFilterChange = (filterText) => {
    if (filterText === '') {
      setFilteredUsers(users);
    } else {
      const filtered = users.filter((user) =>
        user.name.toLowerCase().includes(filterText.toLowerCase())
      );
      setFilteredUsers(filtered);
    }
  };

  useEffect(() => {
    async function loadUsers() {
      try {
        const response = await api.get('users');
        setUsers(response.data);
        setFilteredUsers(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao carregar os usuários:', error);
      }
    }

    loadUsers();
  }, []);

  if (loading) {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <ActivityIndicator color="#121212" size={45} />
      </View>
    );
  }

  return (
    <LinearGradient
      colors={["#111017", "#090320"]}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1 }}>
      <View style={styles.container}>
        <Search onFilterChange={handleFilterChange} />
        <Text style={styles.title}>Your Employees</Text>
        <FlatList
          data={filteredUsers}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <UsersList data={item} />}
          style={styles.list}
        />
      </View>
    </LinearGradient>
  );
}

export default Home;
