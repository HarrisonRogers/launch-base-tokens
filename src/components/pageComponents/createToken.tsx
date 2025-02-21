'use client';

import React, { useState } from 'react';
import { z } from 'zod';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Label } from '../ui/label';
import { Button } from '../ui/button';

const createTokenSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  symbol: z.string().min(2, {
    message: 'Symbol must be at least 2 characters.',
  }),
  supply: z
    .string()
    .transform((val) => Number(val))
    .pipe(
      z.number().min(100000, {
        message: 'Supply must be at least 100,000',
      })
    ),
});

type FormSchema = z.infer<typeof createTokenSchema>;

function CreateToken() {
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(createTokenSchema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create Token</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <div>
            <Label htmlFor="name">Token Name</Label>
            <Input
              type="text"
              placeholder="Enter Token Name..."
              {...register('name')}
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="symbol">Token Symbol</Label>
            <Input
              type="text"
              placeholder="Enter Token Symbol..."
              {...register('symbol')}
            />
            {errors.symbol && (
              <p className="text-red-500">{errors.symbol.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="supply">Token Supply</Label>
            <Input
              type="number"
              placeholder="Enter Token Supply..."
              {...register('supply')}
            />
            {errors.supply && (
              <p className="text-red-500">{errors.supply.message}</p>
            )}
          </div>
          <Button type="submit" disabled={isPending} loading={isPending}>
            {isPending ? 'Creating...' : 'Create Token'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default CreateToken;
