'use client';

import React from 'react';
import { z } from 'zod';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { abi } from '@/web3/abi';
import { Input } from '../ui/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import { useWriteContract } from 'wagmi';
import Link from 'next/link';
import { contractAddress } from '@/web3/address';

const createTokenSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  symbol: z
    .string()
    .min(2, {
      message: 'Symbol must be at least 2 characters.',
    })
    .max(5, {
      message: 'Symbol must be less than 5 characters.',
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
  const {
    writeContract,
    isPending,
    isSuccess,
    isError,
    data: txHash,
  } = useWriteContract();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(createTokenSchema),
  });

  const onSubmit = handleSubmit((data) => {
    try {
      writeContract({
        address: contractAddress,
        abi: abi,
        functionName: 'createToken',
        args: [data.name, data.symbol, BigInt(data.supply)],
      });
      reset();
    } catch (error) {
      console.log(error);
    }
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
              <p className="text-red-500 mt-2">{errors.name.message}</p>
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
              <p className="text-red-500 mt-2">{errors.symbol.message}</p>
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
              <p className="text-red-500 mt-2">{errors.supply.message}</p>
            )}
          </div>
          <Button type="submit" disabled={isPending}>
            {isPending ? 'Creating...' : 'Create Token'}
          </Button>

          {isError && (
            <p className="text-red-500">
              Sorry but no 😔 (probably need to connect wallet)
            </p>
          )}
          {isSuccess && txHash && (
            <div className="flex flex-col gap-2">
              <span className="text-green-500">
                Transaction details:{' '}
                <Link
                  href={`https://base-sepolia.blockscout.com/tx/${txHash}`}
                  target="_blank"
                  className="underline hover:no-underline"
                >
                  {txHash}
                </Link>
              </span>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
}

export default CreateToken;
