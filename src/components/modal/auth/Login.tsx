import {
  Box,
  Button,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';
import { useForm, yupResolver } from '@mantine/form';
import * as Yup from 'yup';

interface FormValues {
  email: string;
  password: string;
}

/* tslint:disable-next-line */

const schema = Yup.object().shape({
  email: Yup.string().required('Email Required!!').email('Invalid email'),
  password: Yup.string()
    .required('Please Enter your password')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Please choose strong password',
    ),
});

function Login() {
  const form = useForm<FormValues>({
    validateInputOnChange: true,
    validate: yupResolver(schema),
    initialValues: { email: '', password: '' },
  });

  return (
    <Box mx="auto">
      <form
        onSubmit={form.onSubmit((values: FormValues) => console.log(values))}
      >
        <TextInput
          variant="filled"
          placeholder="Email"
          {...form.getInputProps('email')}
        />
        <PasswordInput
          variant="filled"
          autoComplete="true"
          mt="sm"
          placeholder="Password"
          {...form.getInputProps('password')}
        />

        <Button size="xs" fullWidth mt="sm" type="submit">
          Log In
        </Button>

        <Stack spacing={0}>
          <Text size="sm" mt="xs">
            Forget your crediential <Box className="anchor">Reset Password</Box>{' '}
          </Text>
          <Text size="sm">
            New to Reddit? <Box className="anchor"> Sign Up</Box>{' '}
          </Text>
        </Stack>
      </form>
    </Box>
  );
}

export default Login;
