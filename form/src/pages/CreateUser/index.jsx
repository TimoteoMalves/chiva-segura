import React, { useState } from "react";
import { Text, View, Button, Switch, Keyboard } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from '@react-navigation/native'

import ImagePicker from "../../components/ImagePicker";
import CityPicker from "../../components/CityPicker";
import DatePicker from "../../components/DatePicker";
import TextInput from "../../components/TextInput";
import { createUserSchema } from '../../utils/createUserValidation';
import { format, parseISO } from 'date-fns';
import api from '../../services/api';
import { Container, ErrorText, InputContainer, Label, ScrollViewContent } from './styles';

export default function App() {
    const navigation = useNavigation();
    const [showDatePicker, setShowDatePicker] = useState(false);

    const { control, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            name: "teste",
            email: "teste@teste.com",
            password: "12345678",
            cpf: "12345678985",
            birth_date: new Date(),
            admin: true,
            salary: "2548.45",
            city: "",
            image: "teste",
        },
        resolver: yupResolver(createUserSchema),
    });

    const onSubmit = async (data) => {
        Keyboard.dismiss();

        try {
            const birthDate = format(new Date(data.birth_date), 'yyyy-MM-dd');
            
            const dataApi = {
                name: data.name,
                email: data.email,
                password: data.password,
                cpf: data.cpf,
                birth_date: birthDate,
                admin: data.admin,
                salary: data.salary.toString(),
                city: data.city,
                image: data.image,
            };
            console.log(dataApi);

            // Envie os dados para a API
            await api.post('/users', dataApi);

            // Limpe os campos após o envio bem-sucedido
            reset({
                name: "",
                email: "",
                cpf: "",
                birth_date: new Date(),
                admin: false,
                salary: "",
                city: "",
                image: "teste",
            });
            navigation.navigate('Home')
        } catch (error) {
            // Lide com erros de envio para a API aqui
            console.error("Erro ao enviar dados:", error.message);
        }
    }

    return (
        <Container>
            <ScrollViewContent>
                <InputContainer>
                    <Controller
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <>
                                <Label>Nome</Label>
                                <TextInput
                                    name="name"
                                    placeholder="Nome"
                                    onChange={onChange}
                                    value={value}
                                    error={errors.name}
                                />
                                {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
                            </>
                        )}
                        name="name"
                    />
                </InputContainer>

                <InputContainer>
                    <Controller
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <>
                                <Label>E-mail</Label>
                                <TextInput
                                    name="email"
                                    placeholder="E-mail"
                                    onChange={onChange}
                                    value={value}
                                    error={errors.email}
                                />
                                {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
                            </>
                        )}
                        name="email"
                    />
                </InputContainer>

                <InputContainer>
                    <Controller
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <>
                                <Label>Senha</Label>
                                <TextInput
                                    name="password"
                                    placeholder="Senha"
                                    onChange={onChange}
                                    value={value}
                                    secureTextEntry={true}
                                    error={errors.password}
                                />
                                {errors.password && <ErrorText>{errors.password.message}</ErrorText>}
                            </>
                        )}
                        name="password"
                    />
                </InputContainer>

                <InputContainer>
                    <Controller
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <>
                                <Label>CPF</Label>
                                <TextInput
                                    name="cpf"
                                    placeholder="CPF"
                                    onChange={onChange}
                                    value={value}
                                    error={errors.cpf}
                                />
                                {errors.cpf && <ErrorText>{errors.cpf.message}</ErrorText>}
                            </>
                        )}
                        name="cpf"
                    />
                </InputContainer>

                <InputContainer>
                    <Controller
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <>
                                <Label>Data de Nascimento</Label>
                                <DatePicker
                                    value={value}
                                    onChange={onChange}
                                    showPicker={showDatePicker}
                                    setShowPicker={setShowDatePicker}
                                />
                                {errors.birth_date && <ErrorText>{errors.birth_date.message}</ErrorText>}
                            </>
                        )}
                        name="birth_date"
                    />
                </InputContainer>

                <InputContainer>
                    <Label>Admin:</Label>
                    <Controller
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <Switch
                                value={value}
                                onValueChange={onChange}
                            />
                        )}
                        name="admin"
                    />
                    {errors.admin && <ErrorText>{errors.admin.message}</ErrorText>}
                </InputContainer>

                <InputContainer>
                    <Controller
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <>
                                <Label>Salário</Label>
                                <TextInput
                                    name="salary"
                                    placeholder="Salário"
                                    onChange={onChange}
                                    value={value}
                                    error={errors.salary}
                                />
                                {errors.salary && <ErrorText>{errors.salary.message}</ErrorText>}
                            </>
                        )}
                        name="salary"
                    />
                </InputContainer>

                <InputContainer>
                    <Controller
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <>
                                <Label>Cidade</Label>
                                <CityPicker
                                    control={control}
                                    value={value}
                                    onChange={onChange}
                                    errors={errors}
                                />
                            </>
                        )}
                        name="city"
                    />
                </InputContainer>

                <InputContainer>
                    <Controller
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <>
                                <Label>Imagem</Label>
                                <ImagePicker
                                    onChange={onChange}
                                    value={value}
                                />
                                {errors.image && <ErrorText>{errors.image.message}</ErrorText>}
                            </>
                        )}
                        name="image"
                    />
                </InputContainer>

                <Button title="Enviar" onPress={handleSubmit(onSubmit)} />
            </ScrollViewContent>
        </Container>
    );
}