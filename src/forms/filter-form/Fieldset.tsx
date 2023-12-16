import { ComponentProps } from "react"

type Props = ComponentProps<'fieldset'>;

export function Fieldset(props: Props) {
  return (
    <fieldset {...props} />
  );
}
