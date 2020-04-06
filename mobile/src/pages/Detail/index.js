import React from 'react';
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from './styles';
import imgLogo from '../../assets/logo.png';
import * as MailComposer from 'expo-mail-composer';
import { FlatList } from 'react-native-gesture-handler';

export default function Detail() {
    const navigation = useNavigation();
    const rout = useRoute();
    const incident = rout.params.incident;
    const message = 'Isso é uma mensagem a ser enviada';
    function navigateBack() {
        navigation.goBack();
    }
    function sendMail() {
        MailComposer.composeAsync({
            subject: 'Heroi do caso: <Caso>',
            recipients: ['email@ong.com'],
            body: message,

        });
    }
    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=6661&text=${message}`);
    }
    return (
        <View style={styles.content}>
            <View style={styles.header}>
                <Image source={imgLogo} />
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={24} color="#E02041" />
                </TouchableOpacity>
            </View>

            <FlatList  data={[1]} showsVerticalScrollIndicator={false} keyExtractor={incident => String(incident.id)} renderItem={() => (
                <View>
                    <View style={styles.incident}>
                        <Text style={styles.incidentProperty}>CASO:</Text>
                        <Text style={styles.incidentValue}>{incident.title}</Text>

                        <Text style={styles.incidentProperty}>ONG:</Text>
                        <Text style={styles.incidentValue}> {incident.name} de {incident.city}/{incident.uf}</Text>

                        <Text style={styles.incidentProperty}>DESCRIÇÃO:</Text>
                        <Text style={styles.incidentValue}> {incident.description}</Text>

                        <Text style={styles.incidentProperty}>VALOR:</Text>
                        <Text style={[styles.incidentValue, { marginBottom: 0 }]}> {incident.value}</Text>
                    </View>
                    <View style={styles.contactBox}>
                        <Text style={styles.heroTitle}>Salve o dia!</Text>
                        <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>
                        <Text style={styles.heroDescription}>Entre em contato: </Text>
                        <View style={styles.actions}>
                            <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                                <Text style={styles.actionText}>Whatsapp</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.action} onPress={sendMail}>
                                <Text style={styles.actionText}>E-mail</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            )}>

            </FlatList>

        </View>
    );
}
