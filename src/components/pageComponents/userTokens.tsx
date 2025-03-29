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
import { useUserTokens } from '@/hooks/useUserTokens';
import Link from 'next/link';

function UserTokens() {
  const tokens = useUserTokens();
  const orderedTokens = tokens ? [...tokens].reverse().slice(0, 5) : [];

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
            {orderedTokens?.map((token: `0x${string}`) => (
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
            {orderedTokens?.length > 0 && (
              <TableRow>
                <TableCell>
                  <Link
                    href="/your-tokens"
                    className="underline hover:no-underline underline-offset-2 text-blue-500"
                  >
                    View All
                  </Link>
                </TableCell>
              </TableRow>
            )}
            {orderedTokens?.length === 0 && (
              <TableRow>
                <TableCell colSpan={2}>Loading Tokens...</TableCell>
              </TableRow>
            )}

            {orderedTokens === undefined && (
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
