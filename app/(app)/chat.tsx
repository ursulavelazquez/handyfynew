import React, { useState, useRef, useEffect } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  FlatList, 
  Image, 
  KeyboardAvoidingView, 
  Platform,
  ActivityIndicator
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ArrowLeft, Send, Paperclip, Image as ImageIcon, Camera } from 'lucide-react-native';
import { useAuth } from '@/contexts/AuthContext';
import { mockMessages } from '@/data/mockData';

export default function ChatScreen() {
  const router = useRouter();
  const { id, name } = useLocalSearchParams();
  const { user } = useAuth();
  const [messages, setMessages] = useState(mockMessages);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showAttachmentOptions, setShowAttachmentOptions] = useState(false);
  const flatListRef = useRef<FlatList>(null);
  
  // Scroll to bottom of message list on load and when new messages arrive
  useEffect(() => {
    setTimeout(() => {
      if (flatListRef.current) {
        flatListRef.current.scrollToEnd({ animated: false });
      }
    }, 100);
  }, [messages]);
  
  // Simulate typing indicator
  useEffect(() => {
    const typingTimeout = setTimeout(() => {
      if (Math.random() > 0.7) {
        setIsTyping(true);
        
        // Hide typing indicator after random time
        setTimeout(() => {
          setIsTyping(false);
        }, 2000 + Math.random() * 3000);
      }
    }, 10000);
    
    return () => clearTimeout(typingTimeout);
  }, [messages]);
  
  const handleSend = () => {
    if (!inputText.trim()) return;
    
    const newMessage = {
      id: (messages.length + 1).toString(),
      text: inputText.trim(),
      sender: 'me',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'sent'
    };
    
    setMessages([...messages, newMessage]);
    setInputText('');
    
    // Simulate reply after random delay
    if (Math.random() > 0.3) {
      setTimeout(() => {
        const replies = [
          'Claro, puedo ayudarte con eso.',
          '¿A qué hora te gustaría que pase?',
          'Entiendo, voy a revisar mi agenda.',
          'Perfecto, nos vemos entonces.',
          '¿Podrías darme más detalles sobre el problema?'
        ];
        
        const replyMessage = {
          id: (messages.length + 2).toString(),
          text: replies[Math.floor(Math.random() * replies.length)],
          sender: 'other',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          status: 'delivered'
        };
        
        setMessages(currentMessages => [...currentMessages, replyMessage]);
      }, 1000 + Math.random() * 2000);
    }
  };
  
  const renderMessage = ({ item }) => {
    const isMe = item.sender === 'me';
    
    return (
      <View style={[styles.messageContainer, isMe ? styles.myMessage : styles.theirMessage]}>
        <View style={[
          styles.messageBubble, 
          isMe ? styles.myMessageBubble : styles.theirMessageBubble
        ]}>
          {item.image && (
            <Image 
              source={{ uri: item.image }} 
              style={styles.messageImage} 
              resizeMode="cover"
            />
          )}
          
          {item.text && (
            <Text style={[
              styles.messageText,
              isMe ? styles.myMessageText : styles.theirMessageText
            ]}>
              {item.text}
            </Text>
          )}
          
          <Text style={[
            styles.messageTime,
            isMe ? styles.myMessageTime : styles.theirMessageTime
          ]}>
            {item.timestamp}
          </Text>
        </View>
      </View>
    );
  };
  
  const renderDateSeparator = (date) => (
    <View style={styles.dateSeparator}>
      <View style={styles.dateLine} />
      <Text style={styles.dateText}>{date}</Text>
      <View style={styles.dateLine} />
    </View>
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
    >
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <ArrowLeft size={24} color="#212121" />
        </TouchableOpacity>
        
        <View style={styles.headerTitle}>
          <Image 
            source={{ uri: 'https://i.ibb.co/Ldhc84G/profile-placeholder.png' }} 
            style={styles.avatar} 
          />
          
          <View>
            <Text style={styles.userName}>{name}</Text>
            <Text style={styles.userStatus}>En línea</Text>
          </View>
        </View>
      </View>
      
      <FlatList
        ref={flatListRef}
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderMessage}
        contentContainerStyle={styles.messagesList}
        ListHeaderComponent={() => renderDateSeparator('Hoy')}
        onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
      />
      
      {isTyping && (
        <View style={styles.typingContainer}>
          <View style={styles.typingBubble}>
            <View style={styles.typingDot} />
            <View style={styles.typingDot} />
            <View style={styles.typingDot} />
          </View>
        </View>
      )}
      
      {showAttachmentOptions && (
        <View style={styles.attachmentOptions}>
          <TouchableOpacity style={styles.attachmentOption}>
            <View style={[styles.attachmentIcon, { backgroundColor: '#4CAF50' }]}>
              <Camera size={24} color="#FFFFFF" />
            </View>
            <Text style={styles.attachmentText}>Cámara</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.attachmentOption}>
            <View style={[styles.attachmentIcon, { backgroundColor: '#2196F3' }]}>
              <ImageIcon size={24} color="#FFFFFF" />
            </View>
            <Text style={styles.attachmentText}>Galería</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.attachmentOption}>
            <View style={[styles.attachmentIcon, { backgroundColor: '#FF9800' }]}>
              <Paperclip size={24} color="#FFFFFF" />
            </View>
            <Text style={styles.attachmentText}>Documento</Text>
          </TouchableOpacity>
        </View>
      )}
      
      <View style={styles.inputContainer}>
        <TouchableOpacity 
          style={styles.attachButton}
          onPress={() => setShowAttachmentOptions(!showAttachmentOptions)}
        >
          <Paperclip size={24} color="#757575" />
        </TouchableOpacity>
        
        <TextInput
          style={styles.input}
          placeholder="Escribe un mensaje..."
          value={inputText}
          onChangeText={setInputText}
          multiline
        />
        
        <TouchableOpacity 
          style={[
            styles.sendButton,
            !inputText.trim() && styles.sendButtonDisabled
          ]}
          onPress={handleSend}
          disabled={!inputText.trim()}
        >
          <Send size={20} color={inputText.trim() ? '#FFFFFF' : '#BDBDBD'} />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 40,
    paddingHorizontal: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  userName: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#212121',
  },
  userStatus: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#4CAF50',
  },
  messagesList: {
    padding: 16,
  },
  messageContainer: {
    marginBottom: 16,
    maxWidth: '80%',
  },
  myMessage: {
    alignSelf: 'flex-end',
  },
  theirMessage: {
    alignSelf: 'flex-start',
  },
  messageBubble: {
    padding: 12,
    borderRadius: 16,
  },
  myMessageBubble: {
    backgroundColor: '#E6F3F3',
    borderBottomRightRadius: 4,
  },
  theirMessageBubble: {
    backgroundColor: '#F5F5F5',
    borderBottomLeftRadius: 4,
  },
  messageText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    lineHeight: 20,
  },
  myMessageText: {
    color: '#212121',
  },
  theirMessageText: {
    color: '#212121',
  },
  messageTime: {
    fontFamily: 'Inter-Regular',
    fontSize: 10,
    alignSelf: 'flex-end',
    marginTop: 4,
  },
  myMessageTime: {
    color: '#757575',
  },
  theirMessageTime: {
    color: '#757575',
  },
  messageImage: {
    width: 200,
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  dateSeparator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  dateLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#EEEEEE',
  },
  dateText: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#757575',
    marginHorizontal: 16,
  },
  typingContainer: {
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  typingBubble: {
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
    padding: 12,
    borderRadius: 16,
    borderBottomLeftRadius: 4,
  },
  typingDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#757575',
    marginHorizontal: 2,
    opacity: 0.6,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
  },
  attachButton: {
    padding: 8,
  },
  input: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    maxHeight: 120,
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#212121',
    marginHorizontal: 8,
  },
  sendButton: {
    backgroundColor: '#008080',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendButtonDisabled: {
    backgroundColor: '#F5F5F5',
  },
  attachmentOptions: {
    flexDirection: 'row',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
    justifyContent: 'space-around',
  },
  attachmentOption: {
    alignItems: 'center',
  },
  attachmentIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  attachmentText: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#757575',
  },
});