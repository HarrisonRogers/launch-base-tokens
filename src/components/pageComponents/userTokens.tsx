'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';
import { useAccount, useReadContract } from 'wagmi';
import TokenFactory from '@/lib/TokenFactory.json';
import Link from 'next/link';

function UserTokens() {
  const { address } = useAccount();
  const { data: tokens } = useReadContract({
    address: process.env.NEXT_PUBLIC_TOKEN_FACTORY_ADDRESS as `0x${string}`,
    abi: TokenFactory.abi,
    functionName: 'getUserTokens',
    args: [address],
  }) as { data: `0x${string}`[] };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Tokens</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Token Contract Address</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tokens?.sort().map((token: `0x${string}`) => (
              <TableRow key={token}>
                <TableCell>
                  <Link
                    href={`https://base-sepolia.blockscout.com/address/${token}`}
                    className="underline hover:no-underline underline-offset-2"
                    target="_blank"
                  >
                    {token}
                  </Link>
                </TableCell>
              </TableRow>
            ))}
            {tokens?.length === 0 && (
              <TableRow>
                <TableCell colSpan={2}>No tokens found</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default UserTokens;
