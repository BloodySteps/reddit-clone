import { Box, Button, PasswordInput, TextInput } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { z } from 'zod';

interface FormValues {
  email: string;
  password: string;
}

/* tslint:disable-next-line */

const schema = z.object({
  email: z.string().trim().email({ message: 'Invalid email address' }),
  password: z
    .string()

    .regex(
      new RegExp(
        '^(?=(.*[a-z]){3,})(?=(.*[A-Z]){2,})(?=(.*[0-9]){2,})(?=(.*[!@#$%^&*()-__+.]){1,}).{8,}$',
      ),
      'Password must be strong!',
    )
    .min(8, 'Must be at least 8 characters in length'),
});

function Login() {
  const form = useForm<FormValues>({
    initialValues: { email: '', password: '' },
    schema: zodResolver(schema),
  });

  return (
    <Box mx="auto">
      <form
        onSubmit={form.onSubmit((values: FormValues) => console.log(values))}
      >
        <TextInput placeholder="Email" {...form.getInputProps('email')} />
        <PasswordInput
          mt="sm"
          placeholder="Password"
          {...form.getInputProps('password')}
        />

        <Button size="xs" fullWidth mt="sm" type="submit">
          Log In
        </Button>
      </form>
    </Box>
  );
}

export default Login;
