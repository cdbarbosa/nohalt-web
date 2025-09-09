export interface LabelProps extends React.HTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

export function Label({ children, ...rest }: LabelProps) {
  return <label {...rest}>{children}</label>;
}
