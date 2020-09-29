import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';

import BalanceLabel from '../../components/BalanceLabel';
import { saveEntry, deleteEntry } from '../../services/Entries';

import NewEntryInput from './NewEntryInput';
import NewEntryCategoryPicker from './NewEntryCategoryPicker';

import Colors from '../../styles/Colors';

export default function NewEntry({ navigation }) {
  const entry = navigation.getParam('entry', {
    id: null,
    amount: '0.00',
    category: { id: null, name: 'Selecione' },
    entryAt: new Date()
  });

  const [amount, setAmount] = useState(entry.amount);
  const [debit, setDebit] = useState(entry.amount <= 0);
  const [category, setCategory] = useState(entry.category);

  const isValid = () => {
    if (parseFloat(amount) !== 0) {
      return true;
    }

    return false;
  };

  const onSave = () => {
    const data = {
      amount: parseFloat(amount),
      category
    };

    saveEntry(data, entry);
    onClose();
  };

  const onDelete = () => {
    deleteEntry(entry);
    onClose();
  };

  const onClose = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <BalanceLabel />
      <View>
        <NewEntryInput
          value={amount}
          onChangeDebit={setDebit}
          onChangeValue={setAmount}
        />

        <NewEntryCategoryPicker
          debit={debit}
          category={category}
          onChangeCategory={setCategory}
        />
        <Button title="GPS" />
        <Button title="Camera" />
      </View>

      <View>
        <Button title="Adicionar" onPress={() => isValid() && onSave()} />
        <Button title="Excluir" onPress={onDelete} />
        <Button title="Cancelar" onPress={onClose} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 10
  },
  input: {
    borderColor: '#000',
    borderWidth: 1
  }
});
