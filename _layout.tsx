import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const App = () => {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [solution, setSolution] = useState('');

  const solveEquation = () => {
    const aNum = parseFloat(a);
    const bNum = parseFloat(b);
    const cNum = parseFloat(c);

    if (isNaN(aNum) || isNaN(bNum) || isNaN(cNum)) {
      setSolution('Vui lòng nhập tất cả các giá trị.');
      return;
    }

    // Tính toán nghiệm của phương trình bậc 2
    const discriminant = bNum * bNum - 4 * aNum * cNum;
    let result = '';

    if (discriminant > 0) {
      const x1 = (-bNum + Math.sqrt(discriminant)) / (2 * aNum);
      const x2 = (-bNum - Math.sqrt(discriminant)) / (2 * aNum);
      result = `Có hai nghiệm phân biệt: x1 = ${x1}, x2 = ${x2}`;
    } else if (discriminant === 0) {
      const x = -bNum / (2 * aNum);
      result = `Có nghiệm kép: x = ${x}`;
    } else {
      result = 'Phương trình vô nghiệm trong tập số thực.';
    }

    setSolution(result);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Giải phương trình bậc 2 hai ẩn</Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập a"
        keyboardType="numeric"
        value={a}
        onChangeText={setA}
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập b"
        keyboardType="numeric"
        value={b}
        onChangeText={setB}
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập c"
        keyboardType="numeric"
        value={c}
        onChangeText={setC}
      />
      <Button title="Giải phương trình" onPress={solveEquation} />
      {solution ? <Text style={styles.solution}>{solution}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  solution: {
    marginTop: 16,
    fontSize: 16,
  },
});

export default App;
