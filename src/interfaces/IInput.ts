export interface InputProps {
  placeholder: string;
  onChangeText?: (text: string) => void;
  value?: string;
  icon?: React.FC<{ size: number; color: string; style: object }>;
  style?: object;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  autoCorrect?: boolean;
  autoFocus?: boolean;
  editable?: boolean;
  multiline?: boolean;
  numberOfLines?: number;
  maxLength?: number;
  onBlur?: () => void;
  onFocus?: () => void;
  onKeyPress?: () => void;
  onEndEditing?: () => void;
  onSubmitEditing?: () => void;
  returnKeyLabel?: string;
  selectionColor?: string;
}
