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
import { useReadContract } from 'wagmi';
import TokenFactory from '@/lib/TokenFactory.json';
import Link from 'next/link';

function DeployedTokens() {
  const { data: tokens } = useReadContract({
    address: TokenFactory.address as `0x${string}`,
    abi: TokenFactory.abi,
    functionName: 'getDeployedTokens',
  }) as { data: `0x${string}`[] };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Deployed Tokens</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Token Contract Address</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tokens?.map((token: `0x${string}`) => (
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
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default DeployedTokens;
