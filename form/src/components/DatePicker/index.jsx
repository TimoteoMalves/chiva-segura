import React from 'react';
import { View, Text, Button } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'; // Importe o locale em português brasileiro

const DatePicker = ({ value, onChange, showPicker, setShowPicker }) => {
  // Formate um objeto Date como uma string para exibir no componente Text
  const formattedDate = value instanceof Date
    ? format(value, 'dd/MM/yyyy', { locale: ptBR }) // Use o locale ptBR
    : '';

  return (
    <View>
      <Button title="Selecionar Data" onPress={() => setShowPicker(true)} />
      <Text>Data Selecionada: {formattedDate}</Text>
      <DateTimePickerModal
        isVisible={showPicker}
        mode="date"
        onConfirm={(data) => {
          setShowPicker(false);
          onChange(data); // Mantenha a data como um objeto Date
        }}
        onCancel={() => setShowPicker(false)}
        locale={ptBR} // Defina o locale do calendário como "pt_BR"
      />
    </View>
  );
};

export default DatePicker;
