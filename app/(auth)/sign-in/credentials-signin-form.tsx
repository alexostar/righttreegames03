'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { signInDefaultValues } from '@/lib/constants';
//import Link from 'next/link';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { signInWithCredentials } from '@/lib/actions/user.actions';

import { useSearchParams } from 'next/navigation';

const CredentialsSignInForm = () => {
  const [data, action] = useActionState(signInWithCredentials, {
    message: '',
    success: false,
  });

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/dashboard';

  const SignInButton = () => {
    const { pending } = useFormStatus();
    return (
      <Button disabled={pending} className='w-full' variant='default'>
        {pending ? 'Innskráning ...' : 'Sráðu þig inn'}
      </Button>
    );
  };

  return (
    <form action={action}>
      <div className='space-y-6'>
        <div>
          <input type='hidden' name='callbackUrl' value={callbackUrl} />
          <Label htmlFor='email'>Netfang</Label>
          <Input
            id='email'
            name='email'
            required
            type='email'
            defaultValue={signInDefaultValues.email}
            autoComplete='email'
          />
        </div>
        <div>
          <Label htmlFor='password'>Lykilorð</Label>
          <Input
            id='password'
            name='password'
            required
            type='password'
            defaultValue={signInDefaultValues.password}
            autoComplete='current-password'
          />
        </div>
        <div>
          <SignInButton />
        </div>
        {data && !data.success && (
          <div className='text-center text-destructive'>{data.message}</div>
        )}
        <div className='text-sm text-center text-muted-foreground'>
          Aðeins fyrir ritstjóra og þátttakendur í verkefninu Rétt tré á réttum
          stað
          {/*<Link target='_self' className='link' href='/sign-up'>
            Sign Up
          </Link>*/}
        </div>
      </div>
    </form>
  );
};

export default CredentialsSignInForm;
