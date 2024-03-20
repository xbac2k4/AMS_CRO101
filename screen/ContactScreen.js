import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, KeyboardAvoidingView, Pressable } from 'react-native';
import uuid from 'react-native-uuid';

const ContactScreen = ({ route }) => {
    const [name, setName] = useState(''); // State để lưu tên người liên hệ
    const [email, setEmail] = useState(''); // State để lưu địa chỉ email
    const [message, setMessage] = useState(''); // State để lưu nội dung tin nhắn
    let url_api = 'http://192.168.1.112:3000/contacts';
    // Hàm xử lý khi người dùng nhấn nút Gửi
    const handleSubmit = () => {
        // Kiểm tra xem tên, email và tin nhắn có được nhập không
        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            Alert.alert('Lỗi', 'Vui lòng điền đầy đủ thông tin.');
            return;
        }

        // Gửi thông tin liên hệ tới server hoặc xử lý theo yêu cầu của bạn

        let objUser =
        {
            id: uuid.v4(),
            idUser: route.params?.id,
            fullname: name,
            email: email,
            message: message,
        };
        fetch(url_api, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(objUser)
        })
            .then((res) => {
                if (res.status == 201) {
                    Alert.alert('Gửi thành công', 'Cảm ơn bạn đã liên hệ!');
                    setName('')
                    setEmail('')
                    setMessage('')
                }
                    
            })
            .catch((ex) => {
                console.log(ex);
            });
        // Ở đây, chúng ta chỉ hiển thị một cảnh báo giả định

    };

    return (
        <KeyboardAvoidingView style={{
            flex: 1,
            backgroundColor: '#000014'
        }} behavior='padding' enabled>
            <View style={{ padding: 20, }}>
                <Text style={{ fontSize: 30, marginBottom: 10, color: 'white', fontWeight: 'bold' }}>Liên Hệ</Text>

                {/* Ô nhập tên */}
                <TextInput
                    style={{
                        height: 40, borderColor: 'white', borderWidth: 1, marginBottom: 10, padding: 10, color: 'white', borderRadius: 5
                    }}
                    placeholder="Tên của bạn"
                    placeholderTextColor={'white'}
                    value={name}
                    onChangeText={(text) => setName(text)}
                />

                {/* Ô nhập email */}
                <TextInput
                    style={{
                        height: 40, borderColor: 'white', borderWidth: 1, marginBottom: 10, padding: 10, color: 'white', borderRadius: 5
                    }}
                    placeholder="Địa chỉ email"
                    keyboardType="email-address"
                    placeholderTextColor={'white'}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />

                {/* Ô nhập nội dung tin nhắn */}
                <TextInput
                    style={{
                        height: 100, borderColor: 'white', borderWidth: 1, marginBottom: 10, padding: 10, color: 'white', borderRadius: 5
                    }}
                    placeholder="Nội dung tin nhắn"
                    placeholderTextColor={'white'}
                    multiline
                    numberOfLines={4}
                    value={message}
                    onChangeText={(text) => setMessage(text)}
                />

                {/* Nút Gửi */}
                <Pressable style={{
                    width: 355,
                    height: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#df7132',
                    borderRadius: 5
                }} onPress={handleSubmit}>
                    <Text style={{
                        color: 'white',
                        textAlign: 'center',
                        fontWeight: 'bold'
                    }}>GỬI</Text>
                </Pressable>
            </View>
        </KeyboardAvoidingView>
    );
};

export default ContactScreen;
