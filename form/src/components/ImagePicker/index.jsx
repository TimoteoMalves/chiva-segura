import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";

const ImagePickerComponent = ({ onChange, value }) => {
    const handleImagePicker = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3], // Proporção da imagem (opcional)
            quality: 1, // Qualidade da imagem (0 a 1)
        });

        if (!result.cancelled) {
            onChange(result.uri);
        }
    };

    return (
        <View style={styles.inputContainer}>
            <Button
                title="Selecionar Imagem"
                onPress={handleImagePicker}
            />
            {value && <Text>{value}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
});

export default ImagePickerComponent;
