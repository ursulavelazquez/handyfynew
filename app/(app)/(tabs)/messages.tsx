import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { Search, X } from 'lucide-react-native';
import { mockChats } from '@/data/mockData';

export default function MessagesScreen() {
  const router = useRouter();
  const [searchText, setSearchText] = useState('');
  const [filteredChats, setFilteredChats] = useState(mockChats);
  
  const handleSearch = (text: string) => {
    setSearchText(text);
    
    if (!text.trim()) {
      setFilteredChats(mockChats);
      return;
    }
    
    const filtered = mockChats.filter(chat => {
      return (
        chat.userName.toLowerCase().includes(text.toLowerCase()) ||
        chat.lastMessage.toLowerCase().includes(text.toLowerCase())
      );
    });
    
    setFilteredChats(filtered);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Mensajes</Text>
      </View>
      
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Search size={20} color="#757575" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar conversaciones..."
            value={searchText}
            onChangeText={handleSearch}
          />
          {searchText ? (
            <TouchableOpacity onPress={() => handleSearch('')}>
              <X size={20} color="#757575" />
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
      
      {filteredChats.length > 0 ? (
        <FlatList
          data={filteredChats}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={styles.chatItem}
              onPress={() => router.push({
                pathname: '/chat',
                params: { id: item.id, name: item.userName }
              })}
            >
              <View style={styles.avatarContainer}>
                <Image 
                  source={{uri: item.userAvatar}} 
                  style={styles.avatar} 
                />
                {item.isOnline && <View style={styles.onlineBadge} />}
              </View>
              
              <View style={styles.chatInfo}>
                <View style={styles.chatHeader}>
                  <Text style={styles.userName}>{item.userName}</Text>
                  <Text style={styles.timeText}>{item.time}</Text>
                </View>
                
                <View style={styles.messageContainer}>
                  <Text 
                    style={[
                      styles.lastMessage,
                      item.unreadCount > 0 && styles.unreadMessage
                    ]}
                    numberOfLines={1}
                  >
                    {item.lastMessage}
                  </Text>
                  
                  {item.unreadCount > 0 && (
                    <View style={styles.unreadBadge}>
                      <Text style={styles.unreadCount}>{item.unreadCount}</Text>
                    </View>
                  )}
                </View>
              </View>
            </TouchableOpacity>
          )}
          contentContainerStyle={styles.chatsList}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Image 
            source={{ uri: 'https://i.ibb.co/vVRTTQc/empty-messages.png' }} 
            style={styles.emptyImage} 
            resizeMode="contain"
          />
          <Text style={styles.emptyTitle}>No hay mensajes</Text>
          <Text style={styles.emptyDescription}>
            Cuando tengas conversaciones, aparecerán aquí.
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 40,
  },
  header: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  headerTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 24,
    color: '#212121',
  },
  searchContainer: {
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#212121',
  },
  chatsList: {
    paddingHorizontal: 24,
  },
  chatItem: {
    flexDirection: 'row',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 16,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  onlineBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#4CAF50',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  chatInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  userName: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#212121',
  },
  timeText: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#757575',
  },
  messageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  lastMessage: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#757575',
    flex: 1,
    marginRight: 8,
  },
  unreadMessage: {
    fontFamily: 'Inter-Medium',
    color: '#212121',
  },
  unreadBadge: {
    backgroundColor: '#008080',
    borderRadius: 12,
    minWidth: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6,
  },
  unreadCount: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
    color: '#FFFFFF',
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  emptyImage: {
    width: 180,
    height: 180,
    marginBottom: 24,
  },
  emptyTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: '#212121',
    marginBottom: 8,
  },
  emptyDescription: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#757575',
    textAlign: 'center',
  },
});