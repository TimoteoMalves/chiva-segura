import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { format } from 'date-fns';
import api from '../../services/api';
import {
    Container,
    Card,
    PerfilImage,
    Label,
    Text as StyledText,
    ReturnButton,
    ButtonText
} from './styles'; 

function Details() {
    const route = useRoute();
    const navigation = useNavigation();
    const [user, setUser] = useState();
    const [loadingUser, setLoadingUser] = useState(false);

    async function loadUser() {
        try {
            setLoadingUser(true);
            const response = await api.get(`users/${route.params?.id}`);
            console.log(response.data)
            setUser(response.data);
        } catch (error) {
            console.error('Erro ao carregar os usuários:', error);
        } finally {
            setLoadingUser(false);
        }
    }

    useEffect(() => {
        loadUser();
    }, []);

    if (loadingUser) {
        return (
            <Container>
                <ActivityIndicator size={36} color="#000" />
            </Container>
        )
    }

    return (
        <>
            {user && (
                <Container>
                    <Card>
                        <PerfilImage
                            source={{ uri: user.image }}
                        />
                        <Label>Name</Label>
                        <StyledText>{user.name}</StyledText>
                        <Label>Email</Label>
                        <StyledText>{user.email}</StyledText>
                        <Label>CPF</Label>
                        <StyledText>{user.cpf}</StyledText>
                        <Label>Birth Date</Label>
                        <StyledText>{format(new Date(user.birth_date), 'dd/MM/yyyy')}</StyledText>
                        <Label>Profile</Label>
                        <StyledText>{user.admin ? 'Admin' : 'User'}</StyledText>
                        <Label>Salary</Label>
                        <StyledText>R$ {user.salary}</StyledText>
                        <Label>City</Label>
                        <StyledText>{user.city}</StyledText>
                    </Card>

                    <ReturnButton onPress={() => navigation.goBack()}>
                        <ButtonText>Return</ButtonText>
                    </ReturnButton>
                </Container>
            )}
        </>
    );
}

export default Details;
