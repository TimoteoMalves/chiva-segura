import React from "react";
import { View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Controller } from "react-hook-form";

const CityPicker = ({ control, value, onChange, errors }) => {
    return (
        <View>
            <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                    <Picker
                        selectedValue={value}
                        onValueChange={onChange}
                    >
                        <Picker.Item label="Selecione uma cidade" value="" />
                        <Picker.Item label="Santa Maria" value="Santa Maria" />
                        <Picker.Item label="Agudo" value="Agudo" />
                        <Picker.Item label="Restinga Seca" value="Restinga Seca" />
                    </Picker>
                )}
                name="city"
            />
            {errors.city && <Text style={styles.error}>{errors.city.message}</Text>}
        </View>
    );
};

const styles = {
    error: {
        color: "red",
        fontSize: 12,
    },
};

export default CityPicker;
