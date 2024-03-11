export interface ButtonProps {
  title: string;
  loading?: boolean;
  onPress: () => void;
  style?: object;
  social?: boolean;
  icon?: React.FC<{ size: number; color: string; style: object }>;
}
