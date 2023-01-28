import { Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react'

type AlertBoxPropsType = {
  status: 'error' | 'warning' | 'info' | 'success';
  title: string;
  description?: string;
}

type AlertBoxType = (props: AlertBoxPropsType) => JSX.Element;

export const AlertBox: AlertBoxType = ({status, title, description}) => {
  return (
    <Alert status={status}>
        <AlertIcon />
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription>{description}</AlertDescription>
    </Alert>
  )
}
