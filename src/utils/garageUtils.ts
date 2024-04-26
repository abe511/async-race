const names = [
  'Porsche 911',
  'Chevrolet Corvette',
  'Ford Mustang',
  'BMW M3',
  'Audi R8',
  'Nissan GT-R',
  'Lamborghini Aventador',
  'Ferrari 488 GTB',
  'McLaren 720S',
  'Aston Martin Vantage',
  'Jaguar F-Type',
  'Mercedes-AMG GT',
  'Dodge Viper',
  'Lexus LC',
  'Toyota Supra',
  'Acura NSX',
  'Subaru WRX STI',
  'Lotus Evora',
  'Alfa Romeo 4C',
  'Chevrolet Camaro ZL1',
];

const colors = [
  'red',
  'violet',
  'dodgerblue',
  'yellow',
  'magenta',
  'cyan',
  'coral',
  'gold',
  'aqua',
  'orangered',
  'royalblue',
  'fuchsia',
  'orchid',
  'springgreen',
  'orange',
  'pink',
  'white',
  'lime',
  'crimson',
  'deeppink',
];

export const generateCars = (quantity: number): NewCarData[] => {
  const cars: NewCarData[] = [];
  for (let i = 0; i < quantity; i += 1) {
    const newName = names[Math.floor(Math.random() * names.length)];
    const newColor = colors[Math.floor(Math.random() * colors.length)];
    cars.push({ name: newName, color: newColor });
  }
  return cars;
};

export const handleInputChange = (
  e: React.ChangeEvent<HTMLInputElement> | null,
  setter: InputSetter
) => {
  setter(e?.target.value || '');
};
